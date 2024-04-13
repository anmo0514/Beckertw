import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/success.scss";
import { motion } from "framer-motion"
import Address from "./component/address";


function Success() {
    return (
        <>
            {/* <!-- banner --> */}
            {/* <div className="banner">
                <motion.div
                        initial={{ opacity: 0, x:-100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                        }}>
                    <img src="./serviceImg/servicebanner.jpg" alt=""/>
                </motion.div>
            </div> */}
            {/* <!-- USCPA 方案線上報名表 --> */}
            <div className="container mb100 mt100">
                <div className="card w-75 p-5 m-auto">
                    <div className="card-body text-center">
                        <div className="beckertitlename m-2">恭喜完成購買</div>
                        捷進貝克業務將會盡速與您聯繫，接洽後面流程與服務。<br/>
                        <Link to="/"><button type="submit" className="btn btn-primary mt-5">回首頁</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Success;