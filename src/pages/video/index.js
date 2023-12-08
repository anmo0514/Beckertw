import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/video.scss";
import { motion } from "framer-motion"

function Video() {
    return (
        <>
            {/* banner */}
            <div class="banner">
                <motion.div
                        initial={{ opacity: 0, x:-100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                        }}>
                    <img src="./videoImg/video.jpg" alt=""/>
                </motion.div>
                <div class="bannerttitle">
                    Video
                </div>
            </div>
            {/* Video */}
            <div class="videocate">
                <div class="videosubnav col-2 text-center">
                    <div class="cpacate">
                        CPA
                    </div>
                    <div class="cateitem">
                        <ul>
                            <li>講座活動精華</li>
                            <li>學員心得分享</li>
                            <li>外師介紹考試</li>
                            <li>中文課程試聽</li>
                        </ul>
                    </div>
                    <div class="cmacate">
                        CMA
                    </div>
                    <div class="cateitem">
                        <ul>
                            <li>講座活動精華</li>
                            <li>中文課程試聽</li>
                        </ul>
                    </div>
                </div>
                <div class="row col-10 p-5">
                    <div class="col-3">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/KcySfr7ctck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="col-9">
                        <div class="videotitle mt-1 mb-3">
                            新舊制怎麼銜接？如何規劃科目順序與考試時間？
                        </div>
                        <div class="videotext mb-2">
                            8分鐘一次看懂美國註冊會計師考試改革
                        </div>
                        <div class="speacher">
                            Becker 講師 Ken 老師
                        </div>
                    </div>
                    <div class="col-3">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/KcySfr7ctck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="col-9">
                        <div class="videotitle mt-1 mb-3">
                            新舊制怎麼銜接？如何規劃科目順序與考試時間？
                        </div>
                        <div class="videotext mb-2">
                            8分鐘一次看懂美國註冊會計師考試改革
                        </div>
                        <div class="speacher">
                            Becker 講師 Ken 老師
                        </div>
                    </div>
                    <div class="col-3">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/KcySfr7ctck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="col-9">
                        <div class="videotitle mt-1 mb-3">
                            新舊制怎麼銜接？如何規劃科目順序與考試時間？
                        </div>
                        <div class="videotext mb-2">
                            8分鐘一次看懂美國註冊會計師考試改革
                        </div>
                        <div class="speacher">
                            Becker 講師 Ken 老師
                        </div>
                    </div>
                    <div class="col-3">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/KcySfr7ctck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="col-9">
                        <div class="videotitle mt-1 mb-3">
                            新舊制怎麼銜接？如何規劃科目順序與考試時間？
                        </div>
                        <div class="videotext mb-2">
                            8分鐘一次看懂美國註冊會計師考試改革
                        </div>
                        <div class="speacher">
                            Becker 講師 Ken 老師
                        </div>
                    </div>
                    <div class="col-3">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/KcySfr7ctck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="col-9">
                        <div class="videotitle mt-1 mb-3">
                            新舊制怎麼銜接？如何規劃科目順序與考試時間？
                        </div>
                        <div class="videotext mb-2">
                            8分鐘一次看懂美國註冊會計師考試改革
                        </div>
                        <div class="speacher">
                            Becker 講師 Ken 老師
                        </div>
                    </div>
                    <div class="col-3">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/KcySfr7ctck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="col-9">
                        <div class="videotitle mt-1 mb-3">
                            新舊制怎麼銜接？如何規劃科目順序與考試時間？
                        </div>
                        <div class="videotext mb-2">
                            8分鐘一次看懂美國註冊會計師考試改革
                        </div>
                        <div class="speacher">
                            Becker 講師 Ken 老師
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Video;