import React, { useState, useContext, createContext, useEffect } from "react";

const MemberContext = createContext(null);

export const MemberProvider = ({ children }) => {
    const [memberData, setMemberData] = useState({});

    return (
        <>
            <MemberContext.Provider value={{ memberData, setMemberData }}>
                {children}
            </MemberContext.Provider>
        </>
    );
};

export const MemberInfo = () => useContext(MemberContext);
