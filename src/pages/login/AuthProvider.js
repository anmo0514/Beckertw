import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    authorized: false,
    mem_id: 0,
    account: "",
    token: "",
});

export const AuthProvider = ({ children }) => {
    const unAuthState = {
        authorized: false,
        mem_id: 0,
        account: "",
        token: "",
    };

    // 先查看 localStorage 的資料是否表示已登入
    const localAuthStr = localStorage.getItem("auth");
    let localAuth = { ...unAuthState };
    if (localAuthStr) {
        try {
            localAuth = JSON.parse(localAuthStr);
            if (localAuth.account && localAuth.token) {
                localAuth = { ...localAuth, authorized: true };
            }
        } catch (ex) {}
    }

    const [auth, setAuth] = useState(localAuth);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("auth");
        setAuth({ authorized: false, mem_id: 0, token: "" });
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{
                ...auth,
                setAuth,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
