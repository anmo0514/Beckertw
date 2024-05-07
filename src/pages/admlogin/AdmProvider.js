import React, { useState, useContext, createContext, useEffect } from "react";

const AdmContext = createContext(null);

export const AdmProvider = ({ children }) => {
    const [admData, setAdmData] = useState({});

    return (
        <>
            <AdmContext.Provider value={{ admData, setAdmData }}>
                {children}
            </AdmContext.Provider>
        </>
    );
};

export const AdmInfo = () => useContext(AdmContext);
