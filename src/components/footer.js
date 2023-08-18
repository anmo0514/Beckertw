
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "../styles/footer.scss";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footerup">
                        <div className="flogo">
                            <img src="/logo//logo.svg" alt=""/>
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <i
                                    className="fa-solid fa-envelope fa-xl"
                                ></i>
                            </div>
                            <div className="text">
                                客服信箱<br />
                                service@beckertw.com
                            </div>
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <i
                                    className="fa-solid fa-phone fa-xl"
                                ></i>
                            </div>
                            <div className="text">
                                客服專線<br />
                                02-2700-0053
                            </div>
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <i
                                    className="fa-solid fa-location-dot fa-xl"
                                ></i>
                            </div>
                            <div className="text">
                                公司地址<br />
                                台北市大安區信義路四段6號16樓之12
                            </div>
                        </div>
                    </div>
                    <div className="footerdown">
                        <div className="text">
                            周一至周五 09:00-18:00 周六 08:00-17:00<br />
                            (國定假日除外)
                        </div>
                        <div className="copyright">
                            版權所有 © 2023 DL. All Rights Reserved.
                        </div>
                        <Link to="https://www.facebook.com/beckertaiwan/" target="_blank">
                            <div className="icon">
                                <i className="fa-brands fa-facebook fa-xl sicon" ></i>
                            </div>
                        </Link>
                        <Link to="https://www.instagram.com/beckertaiwan/?hl=en" target="_blank">
                            <div className="icon">
                                <i className="fa-brands fa-instagram fa-xl sicon"></i>
                            </div>
                        </Link>
                        <Link to="https://page.line.me/vtz1908l?openQrModal=true" target="_blank">
                            <div className="icon">
                                <i className="fa-brands fa-line fa-xl sicon"></i>
                            </div>
                        </Link>
                        <Link to="https://www.youtube.com/@beckertaiwan" target="_blank">
                            <div className="icon">
                                <i className="fa-brands fa-youtube fa-xl sicon"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}