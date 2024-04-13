import { useState, useRef } from "react";
import "./styles/memberlogin.scss";
import { motion } from "framer-motion";

function Member() {
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
                                    <form className="forms_form">
                                    <fieldset className="forms_fieldset">
                                        <div className="forms_field">
                                        <input type="email" placeholder="Email" className="forms_field-input" required autoFocus />
                                        </div>
                                        <div className="forms_field">
                                        <input type="password" placeholder="Password" className="forms_field-input" required />
                                        </div>
                                    </fieldset>
                                    <div className="forms_buttons">
                                        <button type="button" className="forms_buttons-forgot">忘記密碼?</button>
                                        <input type="submit" value="Log In" className="forms_buttons-action"/>
                                    </div>
                                    </form>
                                </div>
                            ) : (
                                <div className="user_forms-signup">
                                    <h2 className="forms_title">註冊會員</h2>
                                    <form className="forms_form">
                                    <fieldset className="forms_fieldset">
                                        <div className="forms_field">
                                        <input type="text" placeholder="Full Name" className="forms_field-input" required />
                                        </div>
                                        <div className="forms_field">
                                        <input type="email" placeholder="Email" className="forms_field-input" required />
                                        </div>
                                        <div className="forms_field">
                                        <input type="password" placeholder="Password" className="forms_field-input" required />
                                        </div>
                                    </fieldset>
                                    <div className="forms_buttons">
                                        <input type="submit" value="Sign up" className="forms_buttons-action"/>
                                    </div>
                                    </form>
                                </div>
                            )}
                            </div>
                        </div>
                    </section>
            </div>
        </>
    );
}

export default Member;