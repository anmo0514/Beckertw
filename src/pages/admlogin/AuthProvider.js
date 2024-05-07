import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    authorized: false,
    id: 0,
    account: "",
    token: "",
    name: "",
    type: ""
});

export const AuthProvider = ({ children }) => {
    const unAuthState = {
        authorized: false,
        id: 0,
        account: "",
        token: "",
        name: "",
        type: ""
    };

    // 先查看 localStorage 的資料是否表示已登入
    const localAuthStr = localStorage.getItem("authAdm");
    let localAuth = { ...unAuthState };
    if (localAuthStr) {
        try {
            localAuth = JSON.parse(localAuthStr);
            if (localAuth.account && localAuth.token) {
                localAuth = { ...localAuth, authorized: true };
            }
        } catch (ex) {
            console.log(ex);
        }
    }

    const [auth, setAuth] = useState(localAuth);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("authAdm");
        setAuth({ authorized: false, id: 0, token: "", type: "", name: "", account: "" });
        navigate("/adm/login");
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
