import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/duty.scss";
import { motion } from "framer-motion"

export default function Duty() {
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
                    <img src="/aboutImg/about_3.jpg" alt=""/>
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
            {/* dutycontent */}
            <div className="container">
                <div className="titlename">起源：從走入偏鄉開始</div>
                <p>
                    捷進顧問公司創辦人 Christina Lou
                    盡其職涯走在惜才育才的道路上，竭盡全力幫助優秀人才出國深造，也積極輔導財會人才邁向國際。30年來，留學與證照的諮詢輔導工作，Christina
                    閱盡無數台灣菁英，在他們人生歷程佔有極關鍵的協力與推手角色。菁英育才這一路途，Christina
                    不忘企業社會責任，並基於自我真誠信仰，走入偏鄉為台灣中輟學生的身心陪伴、職能培訓、生活自立等輔導工作竭盡心力，而這也是她在2010年後一直默默深耕的另類育才任務。<br/><br/>
                    與培育菁英人才相較，中輟生的陪伴與輔導更為不易、結果更難顯見。面對艱困任務，Christina
                    始終不畏挫敗與挑戰，一如她數十年來經營捷進顧問公司的堅定決心與信念，她持續為弱勢孩子們進行英文教學與溝通訓練，透過生活陪伴及自信建立來提升孩子們的內在歸屬與自我形象，同時也關注中輟孩子的家庭關係維繫、職業技能的訓練與未來就業發展；中輟的孩子們從初始的抗拒、漠視、情緒暴走與輕易放棄的態度，漸漸地轉變並願意自我約束、自我要求進而自我訓練，並未自己設定目標。<br/><br/>
                    Christina
                    常說：育才30年，即使未來從工作崗位退下資深顧問的輔導角色，在人生的道路上，仍要繼續著另一段更別具意義、用生命影響生命的輔導工作，而這份工作對象之於中輟的孩子們，未來，若能成功重建內在受傷沉重的孩子們，重新懷抱對生命的希望與目標，找到自立於社會的角色並有能力好好生活，這將是對我、也是對孩子們最珍貴的生命禮讚，也是捷進顧問公司本於企業責任回饋社會的重要貢獻與付出。<br/><br/><br/><br/>
                </p>
            </div>
        </>
    );
}