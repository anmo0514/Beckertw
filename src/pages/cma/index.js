import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/cma.scss";
import { motion } from "framer-motion";
import Accordion from 'react-bootstrap/Accordion';

function Cma() {
    return (
        <>
            {/* <!-- banner --> */}
            <div className="banner">
                <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                    <img src="./cmaImg/CMA.jpg" alt=""/>
                </motion.div>
                <div className="cmabannertext">
                    Direct Line<br/>
                    CMA <span className="fs-1">專業證照</span>
                    <div className="fs-5">
                        捷進顧問 Becker Taiwan為 IMA®<br/>
                        認證合作教材供應商 (Approved Review Course Provider)
                    </div>
                    <div className="fx w-50 mt-5">
                        <button type="button" className="btn btn-secondary">詳情介紹</button>
                        <button type="button" className="btn btn-outline-secondary">申請報名</button>
                    </div>
                </div>
            </div>
            {/* <!-- Service Nav--> */}
            <div className="servicenavbar">
                {/* style="background-color: #2B418E;" */}
                <Link to="../cpa"><div className="servicesq">CPA</div></Link>
                <Link to="../cma"><div className="servicesq">CMA</div></Link>
                <Link to="../cpacc"><div className="servicesq">CPE</div></Link>
                <Link to="../cpapcs"><div className="servicesq">CPA<div className="fs-3">中文加值服務</div></div></Link>
            </div>
            {/* <!-- CMAsubNav --> */}
            <div className="container-fluid bgb">
                <div className="container">
                    <div className="cpasubnav">
                        <a href="#why"><div>Why USCMA</div></a>
                        <a href="#about"><div>About IMA</div></a>
                        <a href="#exam"><div>考試介紹</div></a>
                        <a href="#sup"><div>輔助教材</div></a>
                        <a href="#cost"><div>考試費用減免</div></a>
                        <a href="#price"><div>方案價格</div></a>
                    </div>
                </div>
            </div>
            {/* <!-- CMA --> */}
            <div className="container">
                <div className="beckertitlename mt100" id="why">What is U.S. CMA® </div>
                <div className="fs-4 text-center fw-bolder mb100">美國註冊管理會計師專業證照</div>
                <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                    <div className="text-center mb100">
                        <img className="w-75" src="./cmaImg/cma_pic1.jpg" alt=""/>
                    </div>
                </motion.div>
                <div className="fs-5 w-75 m-auto">
                    美國註冊管理會計師The U.S. CMA® (Certified Management Accountant) 國際證照（內含兩科考試），由美國管理會計師協會 (Institute of Management Accountants，簡稱 IMA) 設立與舉辦。<br/><br/>
                    根據IMA 發佈之2021薪資調查報告書顯示，財務會計人員持有 U.S. CMA 者，其整體薪酬中位數比起non-CMA，增高了58%。
                </div>
                {/* <div className="text-center mt100 mb100">
                    <iframe width="600" height="350" src="https://www.youtube.com/watch?v=OQLFiiXFXwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div> */}
                <div className="br mb100 mt100"></div>
                <div className="fs-2 text-center fw-bolder mb100" id="about">About IMA® / IMA® 協會介紹</div>
                <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                    <div className="text-center mb100">
                        <img className="w-75" src="./cmaImg/cma_pic2.jpg"alt=""/>
                    </div>
                </motion.div>
                <div className="fs-5 w-75 m-auto">
                    美國管理會計協會 (IMA®) 為管理會計領域最大之專業組織，1919年成立至今年已滿100年，已逾10萬會員遍及全球；於各大城市設有分會，活躍舉辦組織會員人脈拓展活動，在台灣亦設有台北分會 (IMA Taipei Chapter)。
                    <br/><br/>
                    IMA旗下的美國註冊管理會計師證照 (Certified Management Accountant，簡稱CMA®) 是對會計和財務專業人士的權威鑑定，其所側重的財務規劃、績效與分析、戰略財務分析等內容與當今財務專業人員在工作中所應用的專業知識、技能與能力保持一致，在全球範圍內被企業財務高管所廣泛認可。
                    <br/><br/>
                    IMA 致力於精進管理會計專業人士之成長，於眾多大型企業中、例如 IBM、Johnson & Johnson、Intel 等企業內獲廣泛認可，於企業內開設 U.S. CMA 管理會計內訓活動，大力培養儲備管會人才，驗證 U.S. CMA 為提高財務會計人員能力的指標 — 發掘人才、發展長才、留住人才。
                </div>
                <div className="br mt100 mb100"></div>
                <div className="fs-2 text-center fw-bolder mb100" id="exam">U.S. CMA Exam Structure / 美國註冊管理會計師考試介紹</div>
                <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                    <div className="text-center mb100">
                        <img className="w-75" src="./cmaImg/cma_pic3.jpeg"alt=""/>
                    </div>
                </motion.div>
                <div className="fs-4 fw-bold  w-75 mx-auto my-auto mb-4">
                    考試科目
                </div>
                <div className="fs-5 w-75 mx-auto my-auto mb-4">
                    U.S. CMA 考試分為兩大科，簡稱 Part 1 和 Part 2，可先考任一科目：<br/><br/>
                    Part 1:《財務規劃、績效與分析》總共四小時- 100 道選擇題，三小時完成時間- 兩道寫作題 (共10-12段問答)，一小時完成時間<br/>
                    Part 2:《策略財務管理》- 100 道選擇題，三小時完成時間- 兩道寫作題 (共10-12段問答)，一小時完成時間<br/>
                    出題順序為選擇題先，寫作問答題後；若選擇題回答正確率不滿50%，則考試提早結束，不進入問答題。
                </div>
                <div className="fs-4 fw-bold  w-75 mx-auto my-auto mb-4 mt100">
                    成績計算方式
                </div>
                <div className="fs-5 w-75 mx-auto my-auto mb-4">
                    單科滿分為500，達360分即及格。<br/>
                    根據 IMA 目前最新釋出的 2020 Pass Rate 統計，U.S. CMA 兩科之全球通過率為 45%。<br/><br/>
                    考試語言與介面<br/>
                    U.S. CMA 考生可於台灣任一 Prometric 考場應試，目前台灣境內提供英語考題，全程上機考。<br/>
                    中國考場提供以中文應考，全程筆試；考題用語為英翻中直譯，偶有需要以英文思考方能理解的情況
                </div>
                <div className="fs-4 fw-bold  w-75 mx-auto my-auto mb-4 mt100">
                    報考與應考
                </div>
                <div className="fs-5 w-75 mx-auto my-auto mb-4">
                    Part 1 與 Part 2 皆於以下 testing window 開放應考：
                    <ul className="mt-3 mb-3">
                        <li> ■ 一月、二月</li>
                        <li> ■ 五月、六月</li>
                        <li> ■ 九月、十月</li>
                    </ul>
                    報名 U.S. CMA 考試的方式有兩種：
                    <ul className="mt-3 mb-3">
                        <li> ■ IMA 官方網站 Online Store 線上報考。</li>
                        <li> ■ 致電 800-638-4427 或 (201) 573-9000，準備好信用卡資訊，通話報考。</li>
                    </ul>
                    考試報名截止日為二月、六月、十月的15號。建議於「預計考試日」提前四週報名，以確保能預約到理想的考試時間、日期、考場地點選項。
                </div>
                <div className="br mt100 mb100"></div>
                <div className="fs-2 text-center fw-bolder mb100" id="sup">The Becker CMA Exam Review / Becker CMA 輔考教材</div>
                <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                    <div className="text-center mb100">
                        <img className="w-75" src="./cmaImg/cma_pic4.jpg" alt=""/>
                    </div>
                </motion.div>
                <div className="fs-5 w-75 mx-auto my-auto">
                    Becker Professional Education身為國際專業執照輔考教材首選品牌，致力於研究與設計最適考生體驗、譽有高通過率、短通過時間之產品已逾六十年歷史。2021年起，Becker 與 IMA 攜手合作，推出最新Adapt2U科技人工智慧適性學習軟體，內含最新版本之考試題庫、教科書、模擬考題，搭配經驗豐富之美國專業菁英講師授課影片、以業界實務經驗帶入教學，優化考生使用體驗，提高投入時間效率。
                </div>
                <div className="fs-2 text-center fw-bolder mb100 mt100">如何使用 Becker 高度適性AI技術軟體教材？</div>
                <div className="text-center mt100 mb100">
                    <iframe width="600" height="350" src="https://www.youtube.com/embed/Ena4sd_zlUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="fs-5 w-75 mx-auto my-auto">
                    Becker Taiwan (捷進顧問) 為 IMA® 在台唯一認證合作教材供應商 (Approved Review Course Provider, ARCP)，雙方簽署特約於2021至2023年提供 CMA 學員考試報名費之高額減免折扣。欲取得優惠折扣詳情，請至 Becker Taiwan 官方 LINE 帳號，傳訊息索取。
                </div>
                <div className="br mt100 mb100"></div>
                <div className="fs-2 text-center fw-bolder mb100" id="cost">CMA 學員專屬考試費用減免</div>
                <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                    <div className="text-center mb100">
                        <img className="w-75" src="./cmaImg/cma_pic5.jpg" alt=""/>
                    </div>
                </motion.div>
                <div className="fs-5 w-75 mx-auto my-auto">
                    Becker Taiwan (捷進顧問) 為 IMA® 在台唯一認證合作教材供應商 (Approved Review Course Provider, ARCP)，雙方簽署特約於2021至2023年提供 CMA 學員考試報名費之高額減免折扣。欲取得優惠折扣詳情，請至 Becker Taiwan 官方 LINE 帳號，傳訊息索取。
                </div>
                <div className="br mt100 mb100"></div>
                <div className="fs-2 text-center fw-bolder mb100" id="price">Prices / 方案價格</div>
                <div className="row">
                    <div className="col-6">
                        <div className="card pdbox w-75 h-100">
                            <h5>Advantage自修方案</h5>
                            <div className="card-body">
                                <ul className="align-items-stretch">
                                    <li>兩科線上學習軟體</li>
                                    <li>線上電子書</li>
                                    <li>500+ 張線上觀念閃字卡 (flashcards)</li>
                                    <li>3,000+ 單選練習題</li>
                                    <li>70 寫作問答練習題</li>
                                    <li>63+小時講師授課影片 </li>
                                    <li>依據 ICMA Learning Outcomes Statements，100% 配合考試異動固定更新教材內容</li>
                                    <li>Sana Labs研發之Adapt2U適性學習輔助科技</li>
                                    <li>介面與題型皆全擬真之模擬測驗</li>
                                    <li>個人適性出題模式</li>
                                    <li>大量刷題模式</li>
                                    <li>考程顧問諮詢輔導</li>
                                    <li>線上發問，外師迅速解題</li>
                                    <li>線上題型問答資料庫</li>
                                </ul>
                            </div>
                            <div className="ugbk">
                                <h6>使用效期</h6>
                                <span>24個月</span>
                            </div>
                            <div className="ugbk">
                                <h6>適用客群</h6>
                                <span>留學生</span><br/>
                            </div>
                            <div className="cash">46,000</div>
                            
                            <Link to="https://forms.gle/giXyV9tj6gQFhpu68" target="_blank" className="bt_prd">»報名與購買</Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card pdbox w-75 h-100">
                            <h5>菁英方案【2023年夏季班】</h5>
                            <div className="card-body">
                                <ul>
                                    <li className="text-danger">Becker CMA Exam Review Part 1 &amp; Part 2 紙本教科書</li>
                                    <li className="text-danger">
                                        CMA 面授/雲端中文課程，共 60 小時中文專業師資教學
                                        <ul>
                                            <NavLink className="text-decoration-none" to="https://beckertw.com/art/523">
                                                <li className="text-danger">2023年最新開課公告</li>
                                            </NavLink>
                                        </ul>
                                    </li>
                                    <li>兩科線上學習軟體</li>
                                    <li>線上電子書</li>
                                    <li>500+ 張線上觀念閃字卡 (flashcards)</li>
                                    <li>3,000+ 單選練習題</li>
                                    <li>70 寫作問答練習題</li>
                                    <li>63+小時講師授課影片 </li>
                                    <li>依據 ICMA Learning Outcomes Statements，100% 配合考試異動固定更新教材內容</li>
                                    <li>Sana Labs研發之Adapt2U適性學習輔助科技</li>
                                    <li>介面與題型皆全擬真之模擬測驗</li>
                                    <li>個人適性出題模式</li>
                                    <li>大量刷題模式</li>
                                    <li>考程顧問諮詢輔導</li>
                                    <li>線上發問，外師迅速解題</li>
                                    <li>線上題型問答資料庫</li>
                                </ul>
                            </div>
                            <div className="ugbk">
                                <h6>使用效期</h6>
                                <span>24個月</span>
                            </div>
                            <div className="ugbk">
                                <h6>適用客群</h6>
                                <span>留學生、僅須重點中文課程者</span><br/>
                            </div>
                            <div className="cash">66,000</div>
                            <Link to="https://forms.gle/giXyV9tj6gQFhpu68" target="_blank" className="bt_prd">»報名與購買</Link>
                        </div>
                    </div>
                </div>
                <div className="br mt100 mb100"></div>
                {/* style="background-image:none;font-weight:bold;" */}
                <h2 className="fs-2 text-center mb-3 fw-bold">中文面授教學範圍</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span>PART1</span>：Financial Planning, Performance, and Analysis<br />
                        </Accordion.Header>
                        <Accordion.Body>
                            - External Financial Reporting Decision<br />
                            - Planning, Budgeting, and Forecasting<br />
                            - Performance Management<br />
                            - Cost Management<br />
                            - Internal Controls<br />
                            - Technology and Analysis<br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>PART2</span>：Strategic Financial Management<br />
                        </Accordion.Header>
                        <Accordion.Body>
                            - Financial Statement Analysis<br />
                            - Corporate Finance<br />
                            - Decision Analysis<br />
                            - Risk Management<br />
                            - Investment Decision<br />
                            - Professional Ethics<br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <span>Course Review</span><br />
                        </Accordion.Header>
                        <Accordion.Body>
                            <span>PART1</span>：Key points and analysis of CMA examination questions<br />
                            <span>PART2</span>：Key points and analysis of CMA examination questions<br />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="container mt100">
                <div className="fs-2 text-center mb-3 fw-bold">中文面授專業師資</div>
                <div className="br mb100"></div>
            </div>
            <div className="container-fluid">
                <div className="tabcontent mb100">
                    <div className="tab-content" id="myTab1Content">
                        <div className="tab-pane fade show active" id="a" role="tabpanel" aria-labelledby="a-tab">
                            <div className="d-flex justify-content-around">
                            {/* style="width: 18rem;" */}
                                <div className="card d">
                                    <img src="./cmaImg/2.jpg" className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">文/ 張同學</h5>
                                        <p className="card-text">申請關島 (Guam) CPA<br/>
                                            國立中興大學土木工程系畢業</p>
                                        <Link to="#" className="btn btn-primary">more</Link>
                                    </div>
                                </div>
                                {/* style="width: 18rem;" */}
                                <div className="card">
                                    <img src="./cmaImg/2.jpg" className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">文/ 林同學</h5>
                                        <p className="card-text">申請關島 (Guam) CPA<br/>
                                        國立中興大學土木工程系畢業</p>
                                        <Link to="#" className="btn btn-primary">more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cma;