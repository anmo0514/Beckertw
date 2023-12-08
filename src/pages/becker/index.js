import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/becker.scss";
import { motion } from "framer-motion"

function Becker() {
    return (
        <>
            {/* <!-- banner --> */}
            <div className="beckerbanner">
                <div className="beckerbannerblock col-3">
                    <img src="./beckerImg/Becker_Logo.svg" alt=""/>
                    <div className="beckertext">
                        <div className="beclertitle">認識Becker</div>
                        Becker Professional Education<br />
                        專業 x 領先 x 權威<br />
                    </div>
                </div>
                <motion.div
                        initial={{ opacity: 0, x:100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                    }}>
                    <div className="col-9">
                        <img src="./beckerImg/usbecker.jpg" alt=""/>
                    </div>
                </motion.div>
            </div>
            {/* <!-- subnav --> */}
            <div className="container">
                <div className="subnav">
                    <a href="#know"><div>認識Becker</div></a>
                    <a href="#benefit"><div>培訓效益</div></a>
                    <a href="#feature"><div>優勢特色</div></a>
                    <a href="#teacher"><div>美籍優秀師資</div></a>
                    <a href="#textbook"><div>輔助教材</div></a>
                    <a href="#trytextbook"><div>試用連結</div></a>
                </div>
            </div>
            {/* <!-- content --> */}
            {/* <!-- 認識becker --> */}
            <div className="container">
                <div className="beckertitlename mb100" id="know">認識Becker</div>
                <div className="beckertextarea1 pb100 mb100">
                    Becker Professional
                    Education是運用優質培訓教育帶領全球各地的專業人士邁向成功的趨勢領導者；<br />成立已達60年，服務範圍廣布全球250多個分支機構，1500多個合作夥伴，包括會計師事務所、非營利組織、公司企業、政府機構與知名大學。
                </div>
                <div className="advantage row pb100 mb100">
                    <div className="col-4">
                        <div className="adheaderpic mb-5">
                            <img src="./beckerImg/becker_1.jpg" alt=""/>
                        </div>
                        <div className="adtitle mb-5 pb-3">多元專業領域培訓教材</div>
                        <div className="adp">
                            <p>
                                全球已有50萬名會計/金融人士、專案管理和醫療保健專業人士透過Becker
                                CPA Exam Review, ACCA® Exam preparation, PMP® Exam
                                Review, USMLE® Exam Review and Continuing
                                Professional Education courses
                                完成職涯理想目標、實踐職業發展方向。
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="adheaderpic mb-5">
                            <img src="./beckerImg/becker_2.jpg" alt=""/>
                        </div>
                        <div className="adtitle mb-5 pb-3">美國ACCET國家認可</div>
                        <div className="adp">
                            <p>
                                Becker Professional
                                Education秉持質量並重的培訓教材品質，不斷創新沿革課程設計，也力求優化學習工具，各項繼續教育課程亦獲得美國教育部繼續教育培訓認證委員會（ACCET）認可，為各領域專業人士持續提升專業技術與知能。
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="adheaderpic mb-5">
                            <img src="./beckerImg/becker_3.jpg" alt=""/>
                        </div>
                        <div className="adtitle mb-5 pb-3">CPA最具權威/全球肯定</div>
                        <div className="adp">
                            <p>
                                Becker CPA Exam Review
                                會計專業培訓教材於財會領域的專業培訓受到全球性的肯定，被公認為最具權威與專業性的學習教本，每年超過四萬七千名的學員參加培訓課程。Becker
                                頂尖設計的教學法、設有專業團隊，每年研究更新的課程及各項輔助的學習工具，讓目前全球超過四十萬使用
                                Becker 教材的人成功通過CPA 考試。
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- 培訓效益 --> */}
                <div className="beckertitlename mb100" id="benefit">Becker 培訓效益</div>
                <div className="row mb-5">
                    <div className="col-4">
                        <div className="iconue mb-5">
                            <img src="./beckerImg/ic_ue01.png" alt=""/>
                        </div>
                        <div className="adtitle mb-5 pb-3">教材普及率</div>
                        <div className="adp">
                            <p>
                                60年來，超過 1,000,000名考生 選擇 Becker做為 準備
                                USCPA的培訓教材
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="iconue mb-5">
                            <img src="./beckerImg/ic_ue04.png" alt=""/>
                        </div>
                        <div className="adtitle mb-5 pb-3">考試通過率</div>
                        <div className="adp">
                            <p>
                                使用Becker 考生的通過率是 非 Becker 考生的 2倍； 90%
                                one-shot 一次通過者與 95% 的高分區考生皆選用Becker。
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="iconue mb-5">
                            <img src="./beckerImg/ic_ue03.png" alt=""/>
                        </div>
                        <div className="adtitle mb-5 pb-3">高分群得主</div>
                        <div className="adp">
                            <p>
                                自2005年起，AICPA 所設立 Elijah Watt Sells Award
                                得主， 9成以上皆為Becker學員。 （Elijah Watt Sells
                                Award： 通過四科USCPA 考試， 四科總平均分數超過95.50
                                分者得主）
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row iconarea mb100 pd100">
                    <div className="col-6">
                        <div className="iconue mb-5">
                            <img src="./beckerImg/ic_ue05.png" alt=""/>
                        </div>
                        <div className="adtitle mb-5 pb-3">企業內訓唯一選擇</div>
                        <div className="adp">
                            <p>
                                在美國，超過 2,000 個組織與Becker合作內訓，
                                美國前100大會計事務所 100% 選用 Becker
                                做為專業人員培訓教材。
                            </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="iconue mb-5">
                            <img src="./beckerImg/ic_ue12.png" alt=""/>
                        </div>
                        <div className="adtitle mb-5 pb-3">校園培訓首選教材</div>
                        <div className="adp">
                            <p>
                                美國各地頂尖知名之大學院校 選用 Becker
                                作為會計培訓教材 或相互簽署校園合作專案
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- video --> */}
                <div className="container">
                    <div className="beckervideo mb100 pb100">
                        <iframe
                            width="980"
                            height="500"
                            src="https://www.youtube.com/embed/c_41ZR9uvss"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
            {/* <!-- 中間banner --> */}
            <div className="midbanner mb100">
                <img src="./beckerImg/midbanner.jpg" alt=""/>
            </div>
            {/* <!-- feature --> */}
            <div className="container feature mb100 pb100" id="feature">
                <div className="beckertitlename mb100">Becker 優勢特色</div>
                <p className="featurep">
                    2017年，AICPA新制考題上路，Becker全面更新軟體內容與介面設計，幫助考生面對最新趨勢的考試挑戰。全新的軟體內容運用創新Adapt2U學習技術，學習工具更加強調個人化與提升學習效率。
                    <br /><br />特別設計的pre-assessment提供適性的學習起點分析，讓學習不必從零開始；各項答題紀錄追蹤並整合測試結果，以即時回饋報告讓考生了解知識建構的程度與應考準備的成熟度，增強考試信心；內建大量題庫，透過答題建立題感與應試熟悉度，介面亦有智慧化設計，答題錯誤可即時點選影片教學與電子書出處，第一時間複習重要觀念。
                </p>
            </div>
            {/* <!-- software --> */}
            <div className="container">
                <div className="row">
                    <div className="softwarepic col-6 mb100">
                        <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.4,
                            default: { ease: "linear" },
                        }}>
                            <img src="./beckerImg/future_1.jpg" alt=""/>
                        </motion.div>
                    </div>
                    <div className="col-6">
                        <div className="softwaretitle mb-4">軟體功能</div>
                        ■
                        Becker培訓軟體不受時地與網路限制，隨時隨地、線上離線都可使用。<br />
                        ■ 線上即時發問系統，快速解決學習、答題與技術操作問題。<br />
                        ■ 四科紙本教科書與軟體內建電子書，內容完整詳盡。<br />
                        ■ 適性互動式的學習計劃時程表，合理規劃準備進度。<br />
                        ■ 軟體即時更新，有「活教材」之稱。<br />
                        ■ 學習起點分析，學習不必從零開始。<br />
                        ■ 觀念強化練習，活化應用不費力。<br />
                        ■ 全真模擬試題，上場應考不陌生。<br />
                    </div>
                </div>
                <div className="software row mb100">
                    <div className="softwarepic col-6 mb100">
                        <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.4,
                            default: { ease: "linear" },
                        }}>
                            <img src="./beckerImg/future_2.jpeg" alt=""/>
                        </motion.div>
                    </div>
                    <div className="col-6">
                        <div className="softwaretitle mb-4">軟體內建</div>
                        ■ 美籍專業教師授課影片，120小時<br />
                        ■ MCQ (Multiple Choice Question) 選擇練習題，6,300題
                        <br />
                        ■ Simulation情境式模擬題組，340題
                        <br />
                        ■ CPA SkillMaster業界實務應用CPA解題影片
                        <br />
                        ■ 考前全真模擬試題，各科3套
                        <br />
                        ■ Adapt2U 適性AI智慧選題複習功能
                        <br />
                    </div>
                </div>
            </div>
            {/* <!-- teacher --> */}
            <div className="container mb100" id="teacher">
                <div className="teacherbanner mb100">
                    <img src="./beckerImg/teacher_banner.jpg" alt=""/>
                </div>
                <div className="beckertitlename">Becker 美籍優秀師資</div>
                <div className="beckersubtitle">世界級的導師</div>
                <div className="teacherp">
                    Becker
                    美籍教師每一位皆為美國註冊會計師，也是各職業領域經驗豐富的專業人士，範圍含括會計，法律與商業領域。在
                    Becker 軟體中，他們總計提供 120
                    小時的專家指導，教學幽默風趣、講解豐富流暢、發音清晰標準，以
                    Becker 軟體通過 CPA 考試，絕對是最佳利器。
                </div>
            </div>
            {/* <!-- teachers pics --> */}
            <div className="container-fluid">
                <div className="row teachers mb100 pb100">
                    <div className="teacher col-3 p-5">
                        <div className="teacherpic mb-5">
                            <img src="./beckerImg/Peter Olinto 2.jpeg" alt=""/>
                        </div>
                        <div className="teachername mb-2">
                            Peter Olinto 
                        </div>
                        <div className="teachersc mb-5">
                            全美知名講師<br />
                            法學博士(JD)<br />
                            美國註冊會計師(CPA)<br />
                        </div>
                        <div>
                            擁有事務所審計、稅務律師實務經驗，並於紐約Fordham
                            University大學部與商學研究所教授法律、會計學、財報分析、與稅務，有十多年教學經驗。1998年加入Becker師資群，活躍發展於課程研發與產品推廣。
                        </div>
                    </div>
                    <div className="teacher col-3 p-5">
                        <div className="teacherpic mb-5">
                            <img src="./beckerImg/Tim Gearty.jpg" alt=""/>
                        </div>
                        <div className="teachername mb-2">Timothy F. Gearty </div>
                        <div className="teachersc mb-5">
                            MBA<br />
                            法學博士(JD)<br />
                            美國註冊會計師(CPA)<br />
                        </div>
                        <div>
                            為全美公認會計與稅務專家，過去二十年內頻繁受邀至各大企業與組織中進行主題演講，亦身為Gearty
                            & McIntyre, LLP, CPA
                            的合夥人之一，主要業務包含企業諮詢、訴訟支援、與鑑識會計；持有AICPA協會與紐澤西註冊會計師協會、全美與紐澤西律師協會會員身份。
                        </div>
                    </div>
                    <div className="teacher col-3 p-5">
                        <div className="teacherpic mb-5">
                            <img src="./beckerImg/Mike_Brown_11300_0279A.JPG" alt=""/>
                        </div>
                        <div className="teachername mb-2">
                            Michael Brown 
                        </div>
                        <div className="teachersc mb-5">
                            法學博士(JD)<br />
                            美國註冊會計師(CPA)<br />
                            全球特許管理會計師(CGMA)<br />
                            美國註冊管理會計師(CMA)<br />
                        </div>
                        <div>
                            持有多年事務所公共會計、企業公司會計與教育培訓經驗；於2011年度“40
                            Under 40: PICPA Members to Watch”
                            獲得提名；2013起加入Becker成為全國專職講師；持有賓州註冊會計師協會、賓州高等教育關係委員會會員身份。
                        </div>
                    </div>
                    <div className="teacher col-3 p-5">
                        <div className="teacherpic mb-5">
                            <img src="./beckerImg/Angie Brown.jpg" alt=""/>
                        </div>
                        <div className="teachername mb-2">
                            Angie Brown
                        </div>
                        <div className="teachersc mb-5">
                            全美知名講師<br />
                            法學博士(JD)<br />
                            美國註冊會計師(CPA)<br />
                        </div>
                        <div>
                            持有Grant Thornton LLP資深審計主管經驗，2000年加入Becker教師群，後成為會計教材研發團隊負責人，同時於Brigham Young University 以及DeVry University管理研究所教授會計科目。
                        </div>
                    </div>
                </div>
                <div className="container mb100 pd100 br"></div>
            </div>
            {/* <!-- textbook --> */}
            <div className="container" id="textbook">
                <div className="beckertitlename mb100">
                    Becker 輔助教材
                </div>
                <div className="row mb-5">
                    <div className="col-6">
                        <div className="beckertextbook">
                            <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                                <img src="./beckerImg/becker_textbook.jpeg" alt=""/>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="beckertextsubtitle mb-3">
                            CPA Exam Review Flashcards
                        </div>
                        <div className="mb-5">
                            Flashcards 是一種閃字卡的概念，便於攜帶且易於使用，一般作為 CPA Exam Review 配套之學習工具；內容涵蓋 CPA考試各章節的重點概念，總計包含1300 道題目與簡短答案，透過問答方式幫助學生快速記憶。
                        </div>
                        <div className="beckertextsubtitle mb-3">
                            CPA Exam Review Flashcards
                        </div>
                        <div className="mb-5">
                            Flashcards 是一種閃字卡的概念，便於攜帶且易於使用，一般作為 CPA Exam Review 配套之學習工具；內容涵蓋 CPA考試各章節的重點概念，總計包含1300 道題目與簡短答案，透過問答方式幫助學生快速記憶。
                        </div>
                    </div>
                </div>
                <div className="text-center mb100">全新概念統整講解影片 40小時• 超過 800 題 MCQ，充分練習、建立題感• 超過 100 題任 Task-based simulations 模擬題組，融貫知識、加強整合應用。</div>
                <div className="br mb100"></div>
            </div>
            {/* <!-- trytextbook --> */}
            <div className="container" id="trytextbook">
                <div className="beckertitlename mb-5">
                    Becker 試用連結
                </div>
                <div className="text-center mb-5">
                    立即體驗 Becker 最新課程，為期14天軟體試用期，
                    你將能親身感受Becker CPA Exam Review 的絕佳設計與軟體內容。
                </div>
                <div className="mb100">
                    <table className="textbooktable">
                        <tr className="textbooktabletitle text-center">
                            <th className="textbooktabletitle" colspan="2">
                                人化適性學習經驗
                            </th>
                        </tr>
                        <tr>
                            <td className="textbooktext w-30">
                                Pre-assessments
                            </td>
                            <td className="textbooktext">
                                4
                            </td>
                        </tr>
                        <tr>
                            <td className="textbooktext">
                                Progress Tests
                            </td>
                            <td className="textbooktext">
                                √
                            </td>
                        </tr>
                        <tr className="textbooktabletitle text-center">
                            <th className="textbooktabletitle" colspan="2">
                                試用版學習內容
                            </th>
                        </tr>
                        <tr>
                            <td className="textbooktext">
                                Simulations
                            </td>
                            <td className="textbooktext">
                                20 Task-Based Simulations;1 Written Communication Task
                            </td>
                        </tr>
                        <tr>
                            <td className="textbooktext">
                                Conceptual Videos
                            </td>
                            <td className="textbooktext">
                                4
                            </td>
                        </tr>
                        <tr>
                            <td className="textbooktext">
                                Interactive Simulations
                            </td>
                            <td className="textbooktext">
                                4
                            </td>
                        </tr>
                        <tr>
                            <td className="textbooktext">
                                Multiple-Choice Questions
                            </td>
                            <td className="textbooktext">
                                150+
                            </td>
                        </tr>
                        <tr>
                            <td className="textbooktext">
                                Flashcards
                            </td>
                            <td className="textbooktext">
                                √
                            </td>
                        </tr>
                        <tr>
                            <td className="textbooktext">
                                Lectures
                            </td>
                            <td className="textbooktext">
                                2+ Hours
                            </td>
                        </tr>
                        <tr>
                            <td className="textbooktext">
                                Mock Exams
                            </td>
                            <td className="textbooktext">
                                √
                            </td>
                        </tr>
                        <tr>
                            {/* style="background-color: rgb(113, 204, 21); border-radius: 0 0 20px 20px;" */}
                            <td colspan="2" className="text-center" >
                                {/* style="color: #ffffff; text-decoration: none;" */}
                                <Link href="./duty.html" >開始試用</Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Becker;