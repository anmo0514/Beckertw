import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/video.scss";
import { motion } from "framer-motion";
import axios from "axios";

function Video() {
    const [videoData, setVideoData] = useState([]);
    const [activeCategory, setActiveCategory] = useState(56);
    const handleButtonClick = async (cateId) => {
        try {
            const response = await axios.get(`http://localhost:3700/video/selectVideoData/${cateId}`);
            setVideoData(response.data); 
            setActiveCategory(cateId);
            // console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    console.log(videoData);
    };
    useEffect(() => {
        handleButtonClick(56); // 頁面加載時立即加載 cateId=56 的資料
    }, []); // 空依賴列表確保只在組件加載時觸發
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
                    <img src="./videoImg/video.jpg" alt=""/>
                </motion.div>
                <div className="bannerttitle">
                    Video
                </div>
            </div>
            {/* Video */}
            <div className="videocate">
                <div className="videosubnav col-2 text-center">
                    <div className="cpacate">
                        CPA
                    </div>
                    <div className="cateitem">
                        <ul>
                            <li className={activeCategory === 56 ? "activesn" : ""} type="button" onClick={() => handleButtonClick(56)}>講座活動精華</li>
                            <li className={activeCategory === 66 ? "activesn" : ""} type="button" onClick={() => handleButtonClick(66)}>學員心得分享</li>
                            <li className={activeCategory === 67 ? "activesn" : ""} type="button" onClick={() => handleButtonClick(67)}>外師介紹考試</li>
                            <li className={activeCategory === 65 ? "activesn" : ""} type="button" onClick={() => handleButtonClick(65)}>中文課程試聽</li>
                        </ul>
                    </div>
                    <div className="cmacate">
                        CMA
                    </div>
                    <div className="cateitem">
                        <ul>
                            <li className={activeCategory === 74 ? "activesn" : ""} type="button" onClick={() => handleButtonClick(74)}>講座活動精華</li>
                            <li className={activeCategory === 70 ? "activesn" : ""} type="button" onClick={() => handleButtonClick(70)}>中文課程試聽</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                {videoData.map((item, index) => (
                    <div className="card col-3 p-3 m-4 text-center" key={`${index}-${item.art_id}`}>
                        <div className="">
                            <NavLink to={item.link}>
                                <img width={200} src={item.cover_1} alt=""/>
                            </NavLink>
                        </div>
                        <div className="">
                            <div className="videotitle mt-1 mb-2">
                                {item.title}
                            </div>
                            <div className="videotext mb-2" dangerouslySetInnerHTML={{ __html: item.intro }}>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default Video;