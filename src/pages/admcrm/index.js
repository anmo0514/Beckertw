import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../login/AuthProvider';

function AdmCrm() {
    const { authorized } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // 如果未登入，則重定向到後台登入頁面
        if (!authorized) {
            navigate('/adm/admlogin');
        }
    }, [authorized, navigate]);

    return (
        <>
            {/* <!-- banner --> */}
            <div className="beckerbanner">
                <div className="beckerbannerblock col-3">
                    <div className="wlecomsign">
                        <div className="lgtext">Welcome</div>
                        <div className="beclertitle">張兆軒</div>
                        Thank you for your contribution<br />
                        to Direct Line<br />
                    </div>
                    
                </div>
                <motion.div
                        initial={{ opacity: 0, x:100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                    }}>
                    <div className="col-9">
                        <img src="/admImg/welcomepic.jpg" alt=""/>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
export default AdmCrm;