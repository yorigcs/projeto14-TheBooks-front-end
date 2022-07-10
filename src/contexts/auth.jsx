import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosI from "../services/axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem("TBAuthUser");
        const storagedToken = localStorage.getItem("TBAuthToken");

        if (storagedUser && storagedToken) {
            //set header authorization if user is authenticated!
            axiosI.defaults.headers["Authorization"] = `Bearer ${storagedToken}`
            setUserInfo(JSON.parse(storagedUser));
        }
    }, [])

    const signIn = async (signInData, setLoading, setError, setSucess, setErrorMessage) => {
        setLoading(true);
        try {
            setLoading(false);
            setSucess(true);

            const { data } = await axiosI.post("/sign-in", signInData);
            setUserInfo(data.user);
            axiosI.defaults.headers["Authorization"] = `Bearer ${data.token}`;
            localStorage.setItem("TBAuthUser",JSON.stringify(data.user));
            localStorage.setItem("TBAuthToken", data.token);
            navigate("/")
    
        } catch (err) {
            setLoading(false);
            setError(true);
            setErrorMessage(err.response.data);
            setTimeout(() => {
                setError(false);
                setErrorMessage(null);
            }, 2500)
        }
    
    }

    const signOut = () => {
        navigate("/")
        setUserInfo(null);
        localStorage.removeItem("TBAuthUser");
        localStorage.removeItem("TBAuthToken");

    }

    return (
        <AuthContext.Provider
            value={{ signed: !!userInfo, userInfo, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}