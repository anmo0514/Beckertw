import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/member.scss";
import { motion } from "framer-motion"

function Member() {
    return (
        <>
            {/* banner */}
            <div className="banner">
                <motion.div
                        initial={{ opacity: 0, x:-100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                        }}>
                    <img src="/memberImg/member_banner.jpg" alt=""/>
                </motion.div>
                <div className="memberbannertext">
                    <div className="lgtext">
                        <div className="lxtext mb-5">Direct Line</div>
                        學生專區<br />
                    </div>
                    您好，歡迎使用捷進Becker 學員專區<br />
                </div>
            </div>
            <div className="container mb100">
                <div className="beckertitlename mt100">學員專區</div>
                {/* <!-- Service Nav--> */}
                <div className="memberbar mt100 mb100">
                    {/* style="background-color: #2B418E;" */}
                    <Link to=""><div className="membersq mainbg">基本<div className="fs-3">資料編輯</div></div></Link>
                    <Link to=""><div className="membersq yellowbg">顧問<div className="fs-3">初談紀錄</div></div></Link>
                    <Link to=""><div className="membersq greenbg">中文<div className="fs-3">線上發問系統</div></div></Link>
                </div>
                <div className="memberbar">
                    {/* style="background-color: #2B418E;" */}
                    <Link to=""><div className="membersq primary500bg">雲端<div className="fs-3">導讀&解讀</div></div></Link>
                    <Link to=""><div className="membersq redbg">獵才<div className="fs-3">開放名單</div></div></Link>
                </div>
            </div>
        </>
    );
}
export default Member;