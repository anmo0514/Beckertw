import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/home.scss";
import { motion } from "framer-motion"
import axios from "axios";
import Sharearea from "./components/sharearea";
import Newsarea from "./components/newsarea";

function Home(props) {
    
    return (
        <>
            {/* banner */}
            <div className="banner">
                <motion.div
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{
                    delay: 0.4,
                    default: { ease: "linear" },
                    }}>
                    <img src="./homeImg/1.jpg" alt=""/>
                    
                </motion.div>
                    <div className="bannerblock"></div>
                    <div className="bannertext">
                        <div className="lgtext">
                            Becker<br />
                            <div className="lxtext">CPA<br /></div>
                            Exam Review<br />
                        </div>
                        全球最具權威領導品牌的<br />
                        財會培訓軟體<br />
                    </div>
                
            </div>
            {/* news */}
            <Newsarea/>
            {/* video */}
            <div className="container-fluid">
                <div className="row">
                    <div className="video d-flex justify-content-evenly">
                        <iframe width="625" height="400" src="https://www.youtube.com/embed/NrcEIxqTjLM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width="625" height="400" src="https://www.youtube.com/embed/S5lHuzUOflI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            {/* share */}
            <Sharearea/>
        </>
    );
}
export default Home;