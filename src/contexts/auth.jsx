import { useState, useContext, createContext, useEffect } from "react";
import axiosI from "../services/axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    

    const signIn = async (signInData, setLoading, setError, setSucess, setErrorMessage) => {
        setLoading(true);
        try {
            const { data } = await axiosI.post("/sign-in", signInData);
            setUserInfo(data.user);
            setLoading(false);
            setSucess(true);
    
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

    return (
        <AuthContext.Provider
            value={{ signed: !!userInfo, userInfo, signIn }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}