import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/origin.scss";
import { motion } from "framer-motion"

export default function Origin() {
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
                    <img src="/aboutImg/about_banner.jpg" alt=""/>
                </motion.div>
                <div className="bannercircle">
                    <div className="aboutbannertext">
                        <div className="lgtext">
                            <div className="lxtext">Direct Line</div>
                            源起與發展<br />
                        </div>
                        Born Free, Work Free, Live Free<br />
                    </div>
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
            {/* aboutcontent */}
            <div className="aboutcontent">
                <div className="bggirl">
                    <img src="/aboutImg/bggirl.png" alt=""/>
                </div>
                <div className="lcircle1"></div>
                <div className="lcircle2"></div>
                <div className="lcircle3"></div>
                <div className="lcircle4"></div>
                <div className="rcircle1"></div>
                <div className="rcircle2"></div>
                <div className="rcircle3"></div>
                <div className="rcircle4"></div>
                <div className="bgboy">
                    <img src="/aboutImg/bgboy.jpg" alt=""/>
                </div>
                <div className="textarea1">
                    <div className="titlename">捷進創辦源起與發展</div>
                    <p>
                        捷進顧問公司 (Direct Line Consulting Co.) 成立於 1987
                        年，是台灣最具規模的名校留學申請輔導公司，從「學涯」、「職涯」、「生涯」三個方面提供全方位之完整規劃，無論是在申請大學、碩士或博士，皆有傲人的成績與口碑。<br /><br />
                        捷進亦為國內唯一接受中視新聞、台視「早安您好」、中廣服務網及台北廣電專訪的顧問公司；創辦人陸秀麗女士
                        (Christina Lou) 根植留學輔導領域30年，曾執筆英文報紙 China
                        Post
                        留學專欄、主持中廣「立體精華_陸老師留學信箱」及台北、台中有線電視台「留學國家介紹」，
                        她曾幫助上萬名台灣及大陸青年學子，前往美、加、英、澳等國求學深造，並創下成功輔導近70名台灣學生申請哈佛大學的輝煌記錄。<br /><br />
                        2007年，Christina
                        從美國、台灣、香港、大陸等地區，邀集國際人力資源管理培訓極具豐富經驗之專業人士及留學菁英，共同策畫留學生
                        SOS Academic English, OPT English 及國際就業力 total
                        solution ，以因應未來出國留學及海外工作之挑戰。<br /><br />
                    </p>
                </div>
                <div className="textarea2">
                    <div className="titlename">
                        面對競爭，鼓勵青年即早建立自我絕對優勢
                    </div>
                    <p>
                        一路走來，Christina
                        培育人才的信念與心力投入，從「留學輔導」延伸至「國際證照」，從「學科學習」的面向更積極關注學成後「就業能力與機會」的實質需求，Christina
                        認為每個人在青年時期就要建立自己的絕對優勢，特別是在台灣越趨限縮與困境的經濟環境之下，面臨薪資水準、就業機會的嚴峻考驗，台灣年輕人更該提早在就學階段爲畢業後的求職預做準備，在職階段爲個人職涯發展加值競爭實力；此外，跨領域整合學習已為趨勢，雙專業、多專業的在學生與工作者，紛紛透過國際證照更加確立自我的優勢角色。<br /><br />Christina
                        期許捷進的服務能做為年輕人從台灣邁向國際舞台的銜接橋梁，大步跨出自己想走的路，自由自在地在全球舞台上一展所長。<br /><br />
                        以「捷進」之名意喻通往全球職場之就業捷徑。 "Born Free, Work
                        Free, Live Free!" Christina<br /><br />
                        期待台灣人才在全球市場自由無礙的發揮所長、實現夢想。
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="textarea3">
                    <div className="titlename">
                        代理 Becker 財會權威品牌，推廣 USCPA 美國註冊會計師
                    </div>
                    <p>
                        有感於全球化趨勢，面對國際化人才需求，2003年 Christina
                        引進全球最具教材領導優勢的美國 Becker CPA Exam
                        Review，同步推廣 USCPA 美國註冊會計師。美國 Becker
                        是培養全美 2/3
                        美國註冊會計師的權威機構，前百大會計事務所與超過2000家公司組織、政府機構、知名頂尖大學，皆選用Becker
                        作為內訓與合作教材，高等學府包括 Michigan
                        AnnArbor、UCLA、SouthernCalifornia、UT Austin
                        等300所以上名校均在校園合作之列。<br /><br />
                        捷進顧問公司在台推廣
                        USCPA美國註冊會計師已19年，隨著人才競爭時代持續增溫，多項數據顯示海外留學與工作比例逐漸提高，跨國企業需求外派人數向上成長，「人才移動」、「國際就業」已非口號，取得USCPA美國註冊會計師展現國際專業信用度，亦代表財會專業人員具備服務全球客戶的語言與專業能力。
                    </p>
                </div>
                <div className="textarea4">
                    <div className="titlename">
                        與校園合作共同推廣 USCPA 國際執照，讓畢業即就業
                    </div>
                    <p>
                        2017年適逢美國關島會計師協會公告會計師考試資格門檻放寬
                        ，其學分/學位後補機制，打開了大學高年級生在校即可開始準備
                        USCPA 的大門，有機會於畢業後 1-2
                        年內達成台美雙照目標，具備國內與國際雙會計師的專業資格。<br /><br />
                        捷進顧問公司借鏡美國 Becker
                        高校合作經驗，於同年4月，邀請國際註冊專業會計師協會 (AICPA)
                        全球聯合事務總監 Jim Knafo
                        見證本公司與台灣5所大專院校建立校園合作；持續至今，已陸續共有十所院校加入合作行列，包括：國立中正大學會計與資訊管理學系、國立臺北大學會計學系、國立臺北商業大學會計資訊系、淡江大學會計學系、輔仁大學會計學系、中原大學會計系、國立中興大學會計系、元智大學管理學院、東海大學會計學系、國立東華大學會計學系共10校，共同簽署「BECKER台灣與大學院校產學合作意向書」，幫助在學生順利啟動
                        USCPA
                        考照計劃，準備人生第一張最具自我投資效益的國際會計執照，此舉象徵台灣校園接軌美國註冊會計師，邁向國際職場的重要里程碑，嘉惠學子。<br /><br />
                    </p>
                </div>
                <div className="imgarea">
                    <img src="./aboutImg/about_1.jpg" alt=""/>
                    2017/04/06 捷進顧問公司創辦人陸秀麗女士(左三)與淡江大學會計學系(左二)、輔仁大學會計學系(左四)、國立臺北商業大學會計資訊系(右四)、國立臺北大學會計學系(右三)、國立中正大學會計與資訊管理學系(右二)等5校，共同簽署「BECKER台灣與大學院校產學合作意向書」，簽署當日國際註冊專業會計師協會 (AICPA) 全球聯合事務總監 Jim Knafo 先生(右一)與北亞新興市場總監高文佳女士(左一)共同見證。
                </div>
                
                <div>

                </div>
            </div>
        </>
    );
}