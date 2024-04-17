import React from "react";

const AuthContext = React.createContext({
    authorized: false,
    mem_id: 0,
    account: "",
    token: "",
});

export default AuthContext;
