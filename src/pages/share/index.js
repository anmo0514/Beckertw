import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/share.scss";
import { motion } from "framer-motion"

function Share() {
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
                    <img src="./shareImg/share.jpg" alt=""/>
                </motion.div>
                <div class="bannerttitle">
                    SHARE
                </div>
            </div>
            {/* share */}
            <div class="container">
                <div class="title text-center mb100">精選成功案例</div>
                <div class="br mb100"></div>
                <div class="tabcontent mb100">
                    <div class="tab-content" id="myTab1Content">
                        <div class="tab-pane fade show active" id="a" role="tabpanel" aria-labelledby="a-tab">
                            <div class="d-flex justify-content-around">
                                <div class="card d">
                                    <img src="./shareImg/2.jpg" class="card-img-top" alt=""/>
                                    <div class="card-body">
                                        <h5 class="card-title">文/ 張同學</h5>
                                        <p class="card-text">申請關島 (Guam) CPA<br/>
                                            國立中興大學土木工程系畢業</p>
                                        <Link href="#" class="btn btn-primary">more</Link>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src="./shareImg/2.jpg" class="card-img-top" alt=""/>
                                    <div class="card-body">
                                        <h5 class="card-title">文/ 林同學</h5>
                                        <p class="card-text">申請關島 (Guam) CPA<br/>
                                        國立中興大學土木工程系畢業</p>
                                        <Link href="#" class="btn btn-primary">more</Link>
                                    </div>
                                </div>
                                <div class="card d">
                                    <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                    <div class="card-body">
                                        <h5 class="card-title">文/ 張同學</h5>
                                        <p class="card-text">申請關島 (Guam) CPA<br/>
                                            國立中興大學土木工程系畢業</p>
                                        <Link href="#" class="btn btn-primary">more</Link>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                    <div class="card-body">
                                        <h5 class="card-title">文/ 林同學</h5>
                                        <p class="card-text">申請關島 (Guam) CPA<br/>
                                        國立中興大學土木工程系畢業</p>
                                        <Link href="#" class="btn btn-primary">more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="b" role="tabpanel" aria-labelledby="b-tab">
                            <div class="d-flex justify-content-around">
                                <div class="card d">
                                    <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                    <div class="card-body">
                                        <h5 class="card-title">文/ 張同學</h5>
                                        <p class="card-text">申請關島 (Guam) CPA<br/>
                                            國立中興大學土木工程系畢業</p>
                                        <Link href="#" class="btn btn-primary">more</Link>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                    <div class="card-body">
                                        <h5 class="card-title">文/ 林同學</h5>
                                        <p class="card-text">申請關島 (Guam) CPA<br/>
                                        國立中興大學土木工程系畢業</p>
                                        <Link href="#" class="btn btn-primary">more</Link>
                                    </div>
                                </div>
                                <div class="card d">
                                    <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                    <div class="card-body">
                                        <h5 class="card-title">文/ 張同學</h5>
                                        <p class="card-text">申請關島 (Guam) CPA<br/>
                                            國立中興大學土木工程系畢業</p>
                                        <Link href="#" class="btn btn-primary">more</Link>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                    <div class="card-body">
                                        <h5 class="card-title">文/ 林同學</h5>
                                        <p class="card-text">申請關島 (Guam) CPA<br/>
                                        國立中興大學土木工程系畢業</p>
                                        <Link href="#" class="btn btn-primary">more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="c" role="tabpanel" aria-labelledby="c-tab">
                            <div class="card">
                                <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                <div class="card-body">
                                    <h5 class="card-title">文/ 陳同學</h5>
                                    <p class="card-text">申請關島 (Guam) CPA<br/>
                                        國立中興大學土木工程系畢業</p>
                                    <Link href="#" class="btn btn-primary">more</Link>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="d" role="tabpanel" aria-labelledby="d-tab">
                            <div class="card">
                                <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                <div class="card-body">
                                    <h5 class="card-title">文/ 黃同學</h5>
                                    <p class="card-text">申請關島 (Guam) CPA<br/>
                                        國立中興大學土木工程系畢業</p>
                                    <Link href="#" class="btn btn-primary">more</Link>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="e" role="tabpanel" aria-labelledby="e-tab">
                            <div class="card">
                                <img src="./image/2.jpg" class="card-img-top" alt=""/>
                                <div class="card-body">
                                    <h5 class="card-title">文/ 蕭同學</h5>
                                    <p class="card-text">申請關島 (Guam) CPA<br/>
                                        國立中興大學土木工程系畢業</p>
                                    <Link href="#" class="btn btn-primary">more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="br mb100"></div>
                <div class="title text-center mb100">歷年心得分享</div>
            </div>
        </>
    );
}
export default Share;