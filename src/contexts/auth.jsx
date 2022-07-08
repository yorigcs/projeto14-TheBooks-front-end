import { useState, useContext, createContext } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    return (
        <AuthContext.Provider
            value={{ signed: !!userInfo, userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}