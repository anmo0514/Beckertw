import { useState, useRef } from "react";
import "./styles/memberlogin.scss";
import { motion } from "framer-motion";
import { useAuth } from "../login/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";


function Memberlogin() {
    
    //表單動態轉換
    const [showLoginForm, setShowLoginForm] = useState(true);
    const userFormsRef = useRef(null);
    const userOptionsTextRef = useRef(null);

    const handleSignUpClick = () => {
        userFormsRef.current.classList.remove('bounceRight');
        userFormsRef.current.classList.add('bounceLeft');
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        userFormsRef.current.classList.remove('bounceLeft');
        userFormsRef.current.classList.add('bounceRight');
        setShowLoginForm(true);
    };

    return (
        <>
            {/* banner */}
            <div className="banner">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, default: { ease: "linear" } }}
                >
                    <img src="/memberImg/login_banner.jpg" alt="" />
                </motion.div>
                
                <section className="user">
                        <div className="user_options-container">
                            <div className="user_options-text">
                                <div className="user_options-unregistered">
                                    <h5 className="user_unregistered-title">沒有帳號嗎?</h5>
                                    <p className="user_unregistered-text">尚未註冊帳號，請先點擊我要註冊，成為捷進貝克會員。</p>
                                    <button className="user_unregistered-signup" onClick={handleSignUpClick}>我要註冊</button>
                                </div>
                                <div className="user_options-registered">
                                    <h5 className="user_registered-title">已經有帳號?</h5>
                                    <p className="user_registered-text">已經有會員請點選我要登入，即可使用會員功能。</p>
                                    <button className="user_registered-login" onClick={handleLoginClick}>我要登入</button>
                                </div>
                            )
                            </div>
                            <div className="user_options-forms" id="user_options-forms" ref={userFormsRef}>
                            {showLoginForm ? (
                                <div className="user_forms-login">
                                    <h2 className="forms_title">登入會員</h2>
                                    <Login/>
                                </div>
                            ) : (
                                <div className="user_forms-signup">
                                    <h2 className="forms_title">註冊會員</h2>
                                    <Register/>
                                </div>
                            )}
                            </div>
                        </div>
                    </section>
            </div>
        </>
    );
}

export default Memberlogin;