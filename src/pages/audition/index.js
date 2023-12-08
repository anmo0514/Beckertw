import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/audition.scss";
import { motion } from "framer-motion"

function Audition() {
    return (
        <>
            {/* <!-- banner --> */}
            <div className="banner">
                <motion.div
                        initial={{ opacity: 0, x:100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                }}>
                        <img src="./auditionImg/audition_banner.jpg" alt=""/>
                </motion.div>
            </div>
            {/* <!-- content --> */}
            <div className="container">
                <div className="beckertitlename mt100">捷進 Becker 中文試聽課程</div>
                {/* <!-- Service Nav--> */}
                <div className="auditionbar mt100 mb100">
                    {/* style="background-color: #2B418E;" */}
                    <Link to="https://www.youtube.com/watch?v=T_X4FwZAlu4"><div className="auditionsq mainbg">FAR<div className="fs-3">中文試聽</div></div></Link>
                    <Link to="https://www.youtube.com/watch?v=ilSsg71cGbg"><div className="auditionsq yellowbg">AUD<div className="fs-3">中文試聽</div></div></Link>
                    <Link to="https://www.youtube.com/watch?v=psCks4Iw5Eo"><div className="auditionsq greenbg">REG<div className="fs-3">中文試聽</div></div></Link>
                </div>
                <div className="container mb100 pd100 br"></div>
                <div className="beckertitlename mt100">All in One 國際就業力試聽課程</div>
                <div className="auditionbar mt100 mb100">
                    {/* style="background-color: #2B418E;" */}
                    <Link to="https://www.youtube.com/watch?v=oN6wblDF8G0"><div className="auditionsq mainbg">商判<div className="fs-3">英文用語</div></div></Link>
                    <Link to="https://www.youtube.com/watch?v=jW8AXebKyi8"><div className="auditionsq mainbg">面試<div className="fs-3">必備技巧</div></div></Link>
                    <Link to="https://www.youtube.com/watch?v=mpP27dzD82Y"><div className="auditionsq mainbg">問題<div className="fs-3">解決技巧</div></div></Link>
                </div>
            </div>
        </>
    );
}
export default Audition;