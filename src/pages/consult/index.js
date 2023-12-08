import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/consult.scss";
import { motion } from "framer-motion"

function Consult() {
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
                        <img src="./consultImg/consult_banner.jpg" alt=""/>
                </motion.div>
                <div className="bannertext text-black-50">
                        <div className="lgtext mb-5 text-black">
                            Becker<br />
                            <div className="lxtext mb-4 mt-5">CPA 專業顧問</div>
                        </div>
                        捷進顧問 Becker Taiwan為 IMA®<br />
                        免費顧問諮詢及文件檢核服務<br />
                        主題包含：學歷認證、報名考試、預約考場<br />
                    </div>
            </div>
            {/* <!-- content --> */}
            <div className="container">
                <div className="beckertitlename mt100 mb100">報考資格免費評估</div>
                <div className="fs-5 w-75 text-center consultbd">
                投入 U.S. CPA 考試準備之前，捷進 Becker 可協助您針對台灣考生最常報考州別 (Washington, Montana, Guam 等)，初步評估是否符合報考美國註冊會計師考試的學分資格。<br/>

                針對初步評估結果，我們同時提供您一次30分鐘免費顧問諮詢。
                我們亦提供 Becker CPA 台灣學員「選州」諮詢、作為啟動報考的第一步，協助評估其他指定州別的各項報考、申請執照門檻，幫助考生確認報考和取照選項。
                </div>
                <div className="w-75 m-auto pb-5">
                    【請注意】<br/>
                    ● U.S. CPA 考試報名所需之學分，以各州別官方考試單位與指定之學歷認證機構回覆報告為準，捷進 Becker 所提供的免費報考資格評估僅供參考。<br/>

                    ● 欲申請此免費服務，請您準備專科大學以上學歷中文或英文之完整一頁式成績單。<br/><br/>
                    <div className="text-danger">
                        Becker Taiwan (捷進) 基於本服務提供評估之目的，蒐集、處理並利用您的個人資料，未經您的同意， Becker Taiwan (捷進)不會將您的個人資料提供給第三人或作不當利用，您享有個人資料保護法及相關法令之一切權利。
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <button type="button" className="btn btn-outline-secondary m-auto">開始</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Consult;