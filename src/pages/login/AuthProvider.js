import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    authorized: false,
    id: 0,
    account: "",
    token: "",
    name: "",
    type: "",
});

export const AuthProvider = ({ children }) => {
    // 初始狀態
    const unAuthState = {
        authorized: false,
        id: 0,
        account: "",
        token: "",
        name: "",
        type: "",
    };

    // 根據路徑選擇存儲鍵和初始狀態結構
    const isAdminPath = window.location.pathname.startsWith('/adm');
    const localStorageKey = isAdminPath ? 'authAdm' : 'auth';
    const initialAuthState = {
        ...unAuthState,
        ...(isAdminPath ? { name: "", type: "" } : { mem_id: 0 }),
    };

    // 從 localStorage 中加載身份驗證狀態
    const localAuthStr = localStorage.getItem(localStorageKey);
    let localAuth = { ...initialAuthState };
    if (localAuthStr) {
        try {
            localAuth = JSON.parse(localAuthStr);
            if (localAuth.account && localAuth.token) {
                localAuth.authorized = true;
            }
        } catch (ex) {
            console.error('Error parsing auth data:', ex);
        }
    }

    const [auth, setAuth] = useState(localAuth);
    const navigate = useNavigate();

    // 登出函數
    const logout = () => {
        localStorage.removeItem(localStorageKey);
        setAuth({ ...initialAuthState });
        
        // 根據路徑選擇重定向路徑
        const redirectPath = isAdminPath ? '/adm/admlogin' : '/';
        navigate(redirectPath);
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