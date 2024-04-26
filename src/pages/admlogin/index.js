import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"
import Form from './components/form';



function AdmLogin() {
    const [formDone, setFormDone] = useState(false);
    return (
        <>
            <div className="container mb100 mt100 w-25">
                <div className="App">
                    <Form setFormDone={setFormDone}/>
                </div>
            </div>
        </>
    );
}
export default AdmLogin;