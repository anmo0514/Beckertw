import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/glory.scss";
import { motion } from "framer-motion"

export default function Glory() {
    const [activeDate, setActiveDate] = useState(0);
    const years = [1996, 2007]; 
    const img = ["1996", "2007"]; 
    const content = ["捷進顧問公司榮獲中華民國消費者評審委員頒發「消費者績優廠商金牌獎」", "捷進顧問公司榮獲美國 Becker 表揚頒發「教學創意獎」"]; 

    const handleControlClick = (direction) => {
        setActiveDate((prevActiveDate) => prevActiveDate + direction);
    };

    const handleDateClick = (index) => {
        setActiveDate(index);
    };
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
            <div class="timelinectrl">
                <div class="time-line">
                    <div class="controls" onClick={() => handleControlClick(-1)} data-direction="-1"></div>
                    <div class="controls next" onClick={() => handleControlClick(1)} data-direction="1"></div>
                    <div class="dates-overflow">
                        <div class="dates-wrap">
                        {years.map((year, index) => (
                            <div key={index} className={`date ${index === activeDate ? "active" : ""}`} onClick={() => handleDateClick(index)}>
                            <div class="date-year">
                                <p>{year}</p>
                            </div>
                            <div class="date-content">
                                <div class="date-image">
                                    <img src={`/aboutImg/${img[index]}.jpg`} alt={`${year} Image`} />
                                </div>
                                <div className="date-text">
                                {content}
                                </div>
                            </div>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}