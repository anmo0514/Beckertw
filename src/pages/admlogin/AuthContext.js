import React from "react";

const AuthContext = React.createContext({
    authorized: false,
    id: 0,
    account: "",
    token: "",
    name: "",
    type: ""
});

export default AuthContext;
