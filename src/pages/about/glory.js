import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/glory.scss";
import { motion } from "framer-motion"

export default function Glory() {
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
                    <img src="/aboutImg/about_2.jpg" alt=""/>
                </motion.div>
                <div class="bannerblock"></div>
                <div class="bannertext">
                    <div class="lgtext">
                        Becker<br />
                        <div class="lxtext">CPA<br /></div>
                        Exam Review<br />
                    </div>
                    全球最具權威領導品牌的<br />
                    財會培訓軟體<br />
                </div>
            </div>
            {/* subnav  */}
            <div className="container">
                <div className="subnav">
                    {/* 改顏色#c00000 */}
                    <NavLink to="/about/origin"><div>源起與發展</div></NavLink>
                    <NavLink to="/about/glory"><div>成就與榮耀</div></NavLink>
                    <NavLink to="/about/duty"><div>企業社會責任</div></NavLink>
                </div>
            </div>
            {/* Glorycontent */}
            <div class="videoctrl">
                <video autoPlay loop muted>
                    <source src="/aboutImg/1104341247-preview.mp4" type="video/mp4"/>
                </video>
            </div>
        </>
    );
}