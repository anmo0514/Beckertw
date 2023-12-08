import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/cpa.scss";
import { motion } from "framer-motion"

function Cpa() {
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
                    <img src="./cpaImg/CPA.jpg" alt=""/>
                </motion.div>
                <div className="cpabannertext">
                    Becker<br/>
                    CPA<br/>
                    <div className="fs-1">
                        Exam Review
                    </div>
                    <div className="fx">
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
            {/* <!-- CPAsubNav --> */}
            <div className="container-fluid bgb">
                <div className="container">
                    <div className="cpasubnav">
                        <a href="#why"><div>Why USCPA</div></a>
                        <a href="#examsubjects"><div>考試科目與<br/>題型配比</div></a>
                        <a href="#examtimeline"><div>考試時間與<br/>成績保留原則</div></a>
                        <a href="#eligibility"><div>應考步驟與<br/>報考資格</div></a>
                        <a href="#protocol"><div>雙照計劃</div></a>
                        <a href="#protocol2"><div>證照互認協議</div></a>
                    </div>
                </div>
            </div>
            {/* <!-- CPA --> */}
            <div className="beckertitlename mb100 mt100" id="why">Why USCPA</div>
            <div className="container whycpa mb100">
                <div className="sixsq">
                <div className="sqcard">
                        <div className="side mt-5">
                        <img src="./cpaImg/cpa_icon_01.svg" alt=""/>
                            <div className="fs-5">美國法律保障</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-5">美國註冊會計師 (Certified Public Accountant，簡稱 CPA) 執照具美國法律約束力與保障，由美國會計師協會 (AICPA) 舉辦統一會計師考試、由各州依法核發執照。</div>
                        </div>
                    </div>
                </div>
                <div className="sixsq">
                <div className="sqcard">
                        <div className="side mt-5">
                        <img src="./cpaImg/cpa_icon_02.svg" alt=""/>
                            <div className="fs-5">全球會計師始祖</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-5">美國會計師是全球第一個需通過會計專業考試取得的執業證照，也是全球會計師(CPA) 的始祖，推行至今已逾百年，在全球各國皆享有高認可度，是世界上規模最大、最為國際化的法定會計師專業資格。</div>
                        </div>
                    </div>
                </div>
                <div className="sixsq">
                <div className="sqcard">
                        <div className="side mt-5">
                        <img src="./cpaImg/cpa_icon_03.svg"alt=""/>
                            <div className="fs-5">國際職場競爭力</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-3">全球化影響下，跨國企業對「具有國際證照的財會人才」需求大增，會計專業更因可與不同產業結合，發展性隨之加大；美國 CPA 可結合並抵換多國財會專業證照，對需要取得 CPA 執業頭銜、瞭解美國會計制度的管理者而言，除了增加在跨國職場上的競爭力外，更可提升個人專業信用度與權威。</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container whycpa mb100">
                <div className="sixsq">
                <div className="sqcard">
                        <div className="side mt-5">
                        <img src="./cpaImg/cpa_icon_04.svg"alt=""/>
                            <div className="fs-5">國際高度專業能力</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-5">美國 CPA 是國際性會計師事務所、政府單位招募指標，更是跨國企業、外商公司炙手可熱的高薪人才。通過美國會計師考試，代表分析判斷、思考視野以及語文能力皆符合國際水準，並擁有跨國商業溝通的高度專業能力。</div>
                        </div>
                    </div>
                </div>
                <div className="sixsq">
                <div className="sqcard">
                        <div className="side mt-5">
                        <img src="./cpaImg/cpa_icon_05.svg"alt=""/>
                            <div className="fs-5">留學、移民絕對優勢</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-5">通過 CPA 考試者，在赴美留學、申請名校時佔加分優勢，畢業後取得當地實習機會較同期畢業生更大，獲得正式工作機會也較不具 CPA 資格之留學生多，是移民美國、技術移民澳洲及加拿大並立即進入當地職場的快捷方式。</div>
                        </div>
                    </div>
                </div>
                <div className="sixsq">
                <div className="sqcard">
                        <div className="side mt-5">
                        <img src="./cpaImg/cpa_icon_06.svg"alt=""/>
                            <div className="fs-5">全球趨勢、國際認可</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-5">通過美國會計師考試代表熟悉 IFRS 與 U.S. GAAP 會計雙準則，更強調對美國法規和商業環境的瞭解；持有美國會計師，在國際會計師事務所或跨國企業中，和跨國同事協力工作、或和國際客戶商談生意時，將賦予有力話語權與說服力。</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- USCPA 有助生涯&職涯規劃 --> */}
            <div className="container mb100 mt100">
                <div className="br mt100 mb100"></div>
                <div className="beckertitlename mb100 mt100">USCPA 有助生涯&職涯規劃</div>
                <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.4,
                            default: { ease: "linear" },
                        }}>
                <div className="d-flex justify-content-around">
                    <div className="cpaappliance">
                        <div className="sqcontent">
                            <div className="sqtitle">在職人士</div>
                            <div className="sqdes">專業強化/交換工作/職務晉升/職涯轉換/自行開業/國際移動</div>
                        </div>
                    </div>
                    <div className="cpaappliance">
                        <div className="sqcontent">
                            <div className="sqtitle">留學生</div>
                            <div className="sqdes">申請名校/Pre-MBA專業訓練/申請工作實習/爭取實習後留任</div>
                        </div>
                    </div>
                    <div className="cpaappliance">
                        <div className="sqcontent">
                            <div className="sqtitle">大學生</div>
                            <div className="sqdes">就業前的專業預備/抵免台會雙照計畫</div>
                        </div>
                    </div>
                    <div className="cpaappliance">
                        <div className="sqcontent">
                            <div className="sqtitle">移民需求</div>
                            <div className="sqdes">申請美國移民加分/技術移民澳洲、加拿大、新加坡的快捷方式</div>
                        </div>
                    </div>
                </div>
                </motion.div>
                <div className="br mt100 mb100"></div>
                {/* <!-- 考試科目與題型配比 --> */}
                <div className="beckertitlename mb100 mt100" id="examsubjects">考試科目與題型配比</div>
                <div className="examtable">
                    <div className="examsubjects fr col-sm-3 col-xs-12">
                        <img className="" src="./cpaImg/far.svg"alt=""/>
                        <div className="subjectname ">FAR</div>
                        <div className="fullname ">Financial Accounting & Reporting</div>
                        <div className="chmean ">一般公認會計準則(GAAP)，包含企業、非營利事業和政府會計</div>
                        <div className="examtime tfr">考試時間：4小時</div>
                        <div className="qutype mfr">
                            <ul>
                                <li>
                                    <span className="mma">題型</span>
                                    <span className="mmt">配比</span>
                                </li>
                                <li>
                                    <span className="mma">單選題66題</span>
                                    <span className="mmt">50%</span>
                                </li>
                                <li>
                                    <span className="mma">Task-Based Simulation 8大題</span>
                                    <span className="mmt">50%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="examsubjects bc col-sm-3 col-xs-12">
                        <img className="" src="./cpaImg/bec.svg"alt=""/>
                        <div className="subjectname">BEC</div>
                        <div className="fullname">Business Environment & Concepts</div>
                        <div className="chmean">成本會計、管理會計、資訊科技、金融、經濟學等</div>
                        <div className="examtime tbc">考試時間：4小時</div>
                        <div className="qutype mbc">
                            <ul>
                                <li>
                                    <span className="mma">題型</span>
                                    <span className="mmt">配比</span>
                                </li>
                                <li>
                                    <span className="mma">單選題62題</span>
                                    <span className="mmt">50%</span>
                                </li>
                                <li>
                                    <span className="mma">Task-Based Simulation 4大題</span>
                                    <span className="mmt">35%</span>
                                </li>
                                <li>
                                    <span className="mma">Written Communication Tasks 3題</span>
                                    <span className="mmt">15%</span>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="examsubjects rg col-sm-3 col-xs-12">
                        <img className="" src="./cpaImg/reg.svg"alt=""/>
                        <div className="subjectname">REG</div>
                        <div className="fullname">Regulation</div>
                        <div className="chmean">美國聯邦稅法、商事法</div>
                        <div className="examtime trg">考試時間：4小時</div>
                        <div className="qutype mrg">
                            <ul>
                                <li>
                                    <span className="mma">題型</span>
                                    <span className="mmt">配比</span>
                                </li>
                                <li>
                                    <span className="mma">單選題76題</span>
                                    <span className="mmt">50%</span>
                                </li>
                                <li>
                                    <span className="mma">Task-Based Simulation 8大題</span>
                                    <span className="mmt">50%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="examsubjects au col-sm-3 col-xs-12">
                        <img className="" src="./cpaImg/aud.svg"alt=""/>
                        <div className="subjectname">AUD</div>
                        <div className="fullname">Auditing & Attestation</div>
                        <div className="chmean">一般公認審計準則(GAAS)、其他簽證</div>
                        <div className="examtime tau">考試時間：4小時</div>
                        <div className="qutype mau">
                            <ul>
                                <li>
                                    <span className="mma">題型</span>
                                    <span className="mmt">配比</span>
                                </li>
                                <li>
                                    <span className="mma">單選題72題</span>
                                    <span className="mmt">50%</span>
                                </li>
                                <li>
                                    <span className="mma">Task-Based Simulation 8大題</span>
                                    <span className="mmt">50%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="br mn100 mt100"></div>
                {/* <!-- 四科考試架構及考試注意事項 --> */}
                <div className="beckertitlename mb-5 mt100">四科考試架構及考試注意事項</div>
                <div className="text-center w-75 m-auto">
                    美國註冊會計師考試為觀念導向的考試，考生應全面了解考試概念及內容重點，正確判斷題意之外，也要有靈活思考以增快答題速度。另外可從題目練習之中學習答題技巧及方向，而非死背答案。
                </div>
                <div className="d-flex subjecttable mb100 mt100">
                    <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                        <div className="col-4">
                            <img className="subpic" src="./cpaImg/far_pic.jpg" alt=""/>
                        </div>
                    </motion.div>
                    <div className="col-8">
                        <div className="fs-1 mb-3">Financial Accounting & Reporting</div>
                        <div className="mb100">對於大部份國內會計系相關學生而言，FAR 是相對較容易的科目，考生在學校及工作中均已學過大部份的相關內容，應試者在準備過程中，應注意有些會計處理原則國內 IFRS 及美國不盡相同，同時對於美國的財會公報體系應有一定程度的瞭解。在進入考場前，考生應已做過 Simulation 題目，並且對於法規查詢部份，應知道該如何尋找相關規定。相信只要充份閱讀 Becker 教材並復習，考生應可順利通過此科。
                        </div>
                        <ul>
                            <li className="tsti">
                                <span className="tmxl">Content Area</span>
                                <span className="tmm">Allocation</span>
                            </li>
                            <li className="wt">
                                <span className="tms">Area I</span>
                                <span className="tml">Conceptual Framework, Standard-Setting and Financial Reporting</span>
                                <span className="tmm">觀念準則訂定</span>
                                <span className="tmm">25-35%</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area II</span>
                                <span className="tml">Select Financial Statement Accounts</span>
                                <span className="tmm">財務報表</span>
                                <span className="tmm">30-40%</span>
                            </li>
                            <li className="wt">
                                <span className="tms">Area III</span>
                                <span className="tml">Select Transactions</span>
                                <span className="tmm">交易名目選擇</span>
                                <span className="tmm">20-30%</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area IV</span>
                                <span className="tml">State and Local Governments</span>
                                <span className="tmm">中央與地方政府</span>
                                <span className="tmm">5-15%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="d-flex subjecttable mb100">
                    <div className="col-4">BEC</div>
                    <div className="col-8">
                        <div className="fs-1 mb-3">Business Environment & Concepts</div>
                        <div className="mb100">此科內容較為廣泛，和其他科目相較之下為容易，考生仍需對財務管理、經濟、資訊科技、成管會、公司及產業結構有相當程度的瞭解。Written Communication 寫作題部分，應準備一簡單的範本，以簡潔、有組織的文字傳達重點，以求通過此科目考試。
                        </div>
                        <ul>
                            <li className="tsti">
                                <span className="tmxl">Content Area</span>
                                <span className="tmm">Allocation</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area I</span>
                                <span className="tml">Corporate Governance</span>
                                <span className="tmm">公司治理</span>
                                <span className="tmm">17-27%</span>
                            </li>
                            <li className="wt">
                                <span className="tms">Area II</span>
                                <span className="tml">Economic Concepts and Analysis</span>
                                <span className="tmm">經濟學觀念與分析</span>
                                <span className="tmm">17-27%</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area III</span>
                                <span className="tml">Financial Management</span>
                                <span className="tmm">財務管理</span>
                                <span className="tmm">11-21%</span>
                            </li>
                            <li className="wt">
                                <span className="tms">Area IV</span>
                                <span className="tml">Information Technology</span>
                                <span className="tmm">資訊系統與溝通</span>
                                <span className="tmm">15-25%</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area V</span>
                                <span className="tml">Operations Management</span>
                                <span className="tmm">生產作業管理</span>
                                <span className="tmm">15-25%</span>
                            </li>
                        </ul>
                    </div>
                </div> */}
                <div className="d-flex subjecttable mb100">
                    <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                        <div className="col-4">
                            <img className="subpic" src="./cpaImg/reg_pic.jpg" alt=""/>
                        </div>
                    </motion.div>
                    <div className="col-8">
                        <div className="fs-1 mb-3">Regulation</div>
                        <div className="mb100">此科對於大部份國內學生而言是較為陌生的一科，包含商事法（Business Law）及稅法 （Federal Taxation）。由於美國商事法及稅法體系複雜且龐大，國內考生對於此部份較不易準備。Becker 教材在此部份提供相當有效之幫助，在美國商事法部份，Becker 教材提供完整的架構及示例，可幫助考生建立完整的觀念。在美國聯邦稅法方面，大部份的國內考生均未曾修習過相關的課程，Becker 提供完整的聯邦稅法架構，對於考生而言，可有效減少摸索的時間。
                        </div>
                        <ul>
                            <li className="tsti">
                                <span className="tmxl">Content Area</span>
                                <span className="tmm">Allocation</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area I</span>
                                <span className="tml">Ethics, Professional Responsibilities and Federal Tax Procedures</span>
                                <span className="tmm">聯邦稅法、道德專業與法律責任</span>
                                <span className="tmm">10-20%</span>
                            </li>
                            <li className="wt">
                                <span className="tms">Area II</span>
                                <span className="tml">Business Law</span>
                                <span className="tmm">商事法</span>
                                <span className="tmm">10-20%</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area III</span>
                                <span className="tml">Federal Taxation of Preperty Transactions</span>
                                <span className="tmm">聯邦稅-產權交易</span>
                                <span className="tmm">12-22%</span>
                            </li>
                            <li className="wt">
                                <span className="tms">Area IV</span>
                                <span className="tml">Federal Taxation of Individuals</span>
                                <span className="tmm">個人稅</span>
                                <span className="tmm">15-25%</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area V</span>
                                <span className="tml">Federal Taxation of Entities</span>
                                <span className="tmm">公司稅</span>
                                <span className="tmm">28-38%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex subjecttable mb100">
                    <motion.div
                                initial={{ opacity: 0, x:-100 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                        <div className="col-4">
                            <img className="subpic" src="./cpaImg/aud_pic.jpg" alt=""/>
                        </div>
                    </motion.div>
                    <div className="col-8">
                        <div className="fs-1 mb-3">Auditing & Attestation</div>
                        <div className="mb100">在審計基本觀念及方法上，台灣與美國大致相同， 惟在相關法令規定上差異較大。尤其在2001 年安隆案（Enron）後，相關審計規定不斷更新，沙賓法案（Sarbanes-Oxley Act）通過及 PCAOB 設立，對於審計專業人員之影響甚大。針對此一方面，Becker 完整的介紹美國審計應用與規定，對於考生未來在審計大型國際公司（或在其擔任財會主管）時，將有極大之助益。
                        </div>
                        <ul>
                            <li className="tsti">
                                <span className="tmxl">Content Area</span>
                                <span className="tmm">Allocation</span>
                            </li>
                            <li className="wt">
                                <span className="tms">Area I</span>
                                <span className="tml">Ethics, professional responsibilities and general principles</span>
                                <span className="tmm">道德與會計師專業責任</span>
                                <span className="tmm">15-25%</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area II</span>
                                <span className="tml">Area II	Assessing risk and developing a planned response</span>
                                <span className="tmm">評估風險與製成應對計畫</span>
                                <span className="tmm">20-30%</span>
                            </li>
                            <li className="wt">
                                <span className="tms">Area III</span>
                                <span className="tml">Performing further procedures and obtaining evidence</span>
                                <span className="tmm">查核程序與取證</span>
                                <span className="tmm">30-40%</span>
                            </li>
                            <li className="gr">
                                <span className="tms">Area IV</span>
                                <span className="tml">Forming conclusions and reporting</span>
                                <span className="tmm">研擬結論與查核報告</span>
                                <span className="tmm">15-25%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="br mb100 mt100"></div>
            </div>
            {/* <!-- 考試時間與成績保留原則 --> */}
            <div className="container examtimeline mt100 mb100">
                <div className="beckertitlename mb100" id="examtimeline">考試時間與成績保留原則</div>
                <ul className="base-timeline mb100 mt100 m-auto">
                    <li className="base-timeline__item base-timeline__item--data"data-step="STEP 1">
                        <span className="base-timeline__summary-text " 
                        >學歷認證</span>
                    </li>
                    <li className="base-timeline__item base-timeline__item base-timeline__item--data"data-step="STEP 2">
                        <span className="base-timeline__summary-text" 
                        >取得NTS</span>
                    </li>
                    <li className="base-timeline__item base-timeline__item--data"data-step="STEP 3">
                        <span className="base-timeline__summary-text " 
                        >正式考試</span>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="fs-3 mb-4">申請考試</div>
                <ul>
                    <li>Step1：完成學歷認證後，隨時可提出考試申請，時間約需2周至2個月。</li>
                    <li>Step2：接續取得NTS，以進行後續預約考場的動作。 (NTS的效期為6個月)</li>
                </ul>
                <div className="fs-3 mb-4 mt-5">預約考場</div>
                <ul>
                    <li>通過第一科考試後，18 個月內須通過其他3科考試，即須在18個月內完成4科考試；若超過18個月完成4科考試 ，則須重新應考成績失效的科目。</li>
                </ul>
                <div className="fs-3 mb-4 mt-5">預約考場</div>
                <ul>
                    <li>每週一至週五皆開放預約考試，早上、下午各一個考試時段。</li>
                    <li>考試地點不限於考生報考的身分州，例如：以關島資格報考之考生，可以選擇於 LA 的考場應考。</li>
                    <li>2020年七月起，取消每季不得重複應考之限制；考後收到成績不及格通知時，可立即再次報考該科。</li>
                    <li>所有考科不限一次考完，各次應考科數可依個人規劃申請應試。</li>
                </ul>
                <div className="br mb100 mt100"></div>
            </div>
            <div className="container">
                <div className="beckertitlename mb100" id="eligibility">應考步驟與報考資格</div>
                <div className="d-flex justify-content-around mb100">
                    <motion.div
                                initial={{ opacity: 0, y:-100 }}
                                whileInView={{ opacity: 1, y:0 }}
                                transition={{
                                delay: 0.3,
                                default: { ease: "linear" },
                            }}>
                        <div className="stepcircle bc">Step 1<br/>選州</div>
                    </motion.div>
                    <motion.div
                                initial={{ opacity: 0, y:-100 }}
                                whileInView={{ opacity: 1, y:0 }}
                                transition={{
                                delay: 0.4,
                                default: { ease: "linear" },
                            }}>
                        <div className="stepcircle fr">Step 2<br/>學歷認證</div>
                    </motion.div>
                    <motion.div
                                initial={{ opacity: 0, y:-100 }}
                                whileInView={{ opacity: 1, y:0 }}
                                transition={{
                                delay: 0.5,
                                default: { ease: "linear" },
                            }}>
                        <div className="stepcircle rg">Step 3<br/>考試申請</div>
                    </motion.div>
                    <motion.div
                                initial={{ opacity: 0, y:-100 }}
                                whileInView={{ opacity: 1, y:0 }}
                                transition={{
                                delay: 0.6,
                                default: { ease: "linear" },
                            }}>
                        <div className="stepcircle au">Step 4<br/>准考通知</div>
                    </motion.div>
                    <motion.div
                                initial={{ opacity: 0, y:-100 }}
                                whileInView={{ opacity: 1, y:0 }}
                                transition={{
                                delay: 0.7,
                                default: { ease: "linear" },
                            }}>
                        <div className="stepcircle mau">Step 5<br/>考前叮嚀</div>
                    </motion.div>
                </div>
                <div className="fs-2 mb100 text-center">申請門檻</div>
                <div className="text-center w-75 m-auto">美國會計師考試資格依所報考州別不同，而有不同的資格限制，其通過後申請執照要求也各不相同，報考前可依「報考目的」、「執業需求」與「現有學分數」評估州別選擇。建議如要一一研究，至NASBA 網站會是首要步驟。以下表格就華盛頓、緬因、新罕布夏州與關島地區為例，篩選出總學分數、學位資格、會計與商業學分，與取得執照等註：最新最正確的學分要求與取照規定請上NASBA</div>
                <ul className="tsbox">
                    <li className="tsti">
                        <span>　</span>
                        <span>WA</span>
                        <span>ME</span>
                        <span>NH</span>
                        <span>GU</span>
                    </li>
                    <li className="wt">
                        <span>總學分數</span>
                        <span>150</span>
                        <span>120</span>
                        <span>120</span>
                        <span>120</span>
                    </li>
                    <li className="gr">
                        <span>學士學歷</span>
                        <span>YES</span>
                        <span>YES</span>
                        <span>YES</span>
                        <span>YES</span>
                    </li>
                    <li className="wt">
                        <span>會計/商業學分</span>
                        <span>24/24</span>
                        <span>15/0</span>
                        {/* style="font-size: 0.5em" */}
                        <span>12/12<br/><p>(Before 7/1/2014)</p></span>
                        {/* style="font-size: 0.5em" */}
                        <span>24/24<br/><p>可先報考，於第一次赴考後18個月內補足(註1)</p></span>
                    </li>
                    <li className="gr">
                        <span>畢業後應考</span>
                        <span>YES/180 days</span>
                        <span>YES/120 days</span>
                        <span>YES</span>
                        <span>YES</span>
                    </li>
                    <li className="wt">
                        <span>執照總學分需求</span>
                        <span>150</span>
                        <span>150</span>
                        {/* style="font-size: 0.5em" */}
                        <span>120<br/><p>(Before 7/1/2014)</p></span>
                        <span>150<br/></span>
                    </li>
                    <li className="gr">
                        <span>執照工作經驗需求</span>
                        <span>1 year</span>
                        <span>2 years</span>
                        <span>½ year</span>
                        <span>1 year</span>
                    </li>
                </ul>
                <div className="br mb100"></div>
            </div>
            <div className="container">
                <div className="fs-2 mb-3 text-center fw-bold">雙照計劃</div>
                <div className="text-center mb100">USCPA VS. ROCCPA<br/>領有外國會計師證書，經考選部認可者，得申請部分科目免試</div>
                <div className="d-flex w-75 douicon">
                    <div className="col-6 text-center">
                        <img src="./cpaImg/dou_icon2.svg"alt=""/>
                        <div className="fw-bold mt-3">抵免科目<br/>中會、高會、成會、國文</div>
                    </div>
                    <div className="col-6 text-center">
                        
                        <img src="./cpaImg/dou_icon.svg"alt=""/>
                    <div className="fw-bold mt-3">必考科目<br/>審計、稅法、公司法<br/>&<br/>證券交易法&商業會計法</div>
                    </div>
                </div>
                <div className="fs-2 mb-3 text-center fw-bold">通過USCPA考試後</div>
                <div className="text-center w-75 m-auto mt-5 mb-5">
                    需向所屬州別申請 USCPA 執照於隔年3月向考選部提出台灣會計師考試抵免申請，5月報考8月份台灣會計師專技考試若「台灣會計師3科考試」與「抵免申請」兩件事相繼於三年內完成（無先後順序），即可取得台灣會計師執照，拿取台美雙照頭銜。
                </div>
                <div className="br mt100 mb100"></div>
                <div className="fs-2 mb100 text-center fw-bold">USCPA VS. HKICPA</div>
                <div className="m-auto w-100">
                    <div className="d-flex doupic mb100">
                        <motion.div
                                    initial={{ opacity: 0, x:-100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    transition={{
                                    delay: 0.4,
                                    default: { ease: "linear" },
                                }}>
                        <img className="col-5" src="./cpaImg/dou_pic.jpg" alt=""/>
                        </motion.div>
                        <div className="col-7">
                            <div className="fs-4 mb-3 fw-bold">擁有USCPA 牌照，要怎樣才能換成HKICPA牌照？</div>
                            <div>
                                2011年10月末，AICPA和HKICPA簽訂互認協議，根據協議：HKICPA可以通過加考IQEX（涵蓋部分AICPA四個科目考試內容）互認考試，獲取申請AICPA和美國某個州的CPA License的資格（仍需要符合該州的教育背景和工作經驗方面的要求）。AICPA執照持有者報考HKICPA可以豁免ABCD四個單元的考試，只用考Final Exam（綜合測試）和素質測試（香港法和香港稅法）即可申請HKICPA的執照。
                            </div>
                        </div>
                    </div>
                    <div className="d-flex doupic mb100">
                        <motion.div
                                    initial={{ opacity: 0, x:-100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    transition={{
                                    delay: 0.4,
                                    default: { ease: "linear" },
                                }}>
                            <img className="col-5" src="./cpaImg/dou_pic2.jpg" alt=""/>
                        </motion.div>
                        <div className="col-7">
                            <div className="fs-4 mb-3 fw-bold">USCPA換HKICPA具體免考要求：</div>
                            <div>
                                1. USCPA牌照持證人，免考MA財務匯報、MB企業財務、MC業務鑑證、MD稅務，只需考FE綜合測試和AT素質測試（香港法+香港稅法）；<br/><br/>
                                2. 若UCCPA持有者的教育背景滿足90個美國學分，則不需考Final exam。
                            </div>
                        </div>
                    </div>
                    <div className="d-flex doupic mb100">
                        <motion.div
                                    initial={{ opacity: 0, x:-100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    transition={{
                                    delay: 0.4,
                                    default: { ease: "linear" },
                                }}>
                            <img className="col-5" src="./cpaImg/dou_pic3.jpg" alt=""/>
                        </motion.div>
                        <div className="col-7">
                            <div className="fs-4 mb-3 fw-bold">USCPA換HKICPA申請會員資格要求：</div>
                            <div>
                                1. 通過美國註冊會計師統一考試；<br/><br/>
                                2. 通過香港會計師公會的FE綜合測試和AT素質測試；<br/><br/>
                                3. 有香港會計師學會(協會)認可的至少3年的相關會計經驗。
                            </div>
                        </div>
                    </div>
                    <div className="d-flex doupic mb100">
                        <motion.div
                                    initial={{ opacity: 0, x:-100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    transition={{
                                    delay: 0.4,
                                    default: { ease: "linear" },
                                }}>
                            <img className="col-5" src="./cpaImg/dou_pic4.jpg"alt=""/>
                        </motion.div>
                        <div className="col-7">
                            <div className="fs-4 mb-3 fw-bold">遞交申請時必須附有下列文件：</div>
                            <div>
                                1. 國家委員會出具的證明你執照信譽良好信函；<br/><br/>
                                2. 確認國家頒布的150學分的日期；<br/><br/>
                                3. 證明你的美國CPA教育90學分要求是在美國完成的聲明。
                            </div>
                        </div>
                    </div>
                    <div className="d-flex doupic mb100">
                        <motion.div
                                    initial={{ opacity: 0, x:-100 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    transition={{
                                    delay: 0.4,
                                    default: { ease: "linear" },
                                }}>
                            <img className="col-5" src="./cpaImg/dou_pic5.jpg"alt=""/>
                        </motion.div>
                        <div className="col-7">
                            <div className="fs-4 mb-3 fw-bold">USCPA換HKICPA申請牌照資格要求：</div>
                            <div>
                                1. 通過香港會計師公會的FE綜合測試和AT素質測試；<br/><br/>
                                2. 擁有不少於四年全職認可的會計工作經驗（75%的工作經驗需與審計相關），其中包含至少一年是取得資格後的工作經驗，如果工作經驗是在取得認可資格後開始累積，規定的四年經驗可減為三十個月。<br/><br/>
                                3. 在申請香港會計師執業證書的前三年，至少需要積累一年與審計相關的工作經驗，並且是在香港工作獲得的。<br/><br/>
                                4. 通常需要在香港居留，且滿足以下其中一個條件：a. 此前12個月在港居留不少於180天；b. 目前且未來12個月內在港居住，並已獲得香港居留權；c. 對於目前在中國大陸工作人士，需滿足某些由香港會計師公會理事會規定的特定條件<br/><br/>
                                5. 並非按《破產條例》（香港法第6章）的涵義現正或已破產或已與其債權人訂立自願安排。<br/><br/>
                                6. 滿足由香港會計師公會規定的CPD（Continuing Professional Development，繼續職業發展）相關要求。
                            </div>
                        </div>
                    </div>
                    <div className="br mt100 mb100"></div>
                    {/* <!-- 證照互認協議 --> */}
                    <div className="fs-2 mb-3 text-center fw-bold" id="protocol">證照互認協議</div>
                    <div className="protocol mt100 mb100">
                        <img src="./cpaImg/protocol.jpg"alt=""/>
                        <div className="fs-2 mt-3 mb-3 text-center fw-bold" id="protocol2">相互承認協議</div>
                        <div className="w-50 text-center m-auto">NASBA / AICPA國際資格鑑定委員會（IQAB）是美國會計專業與其他“服務貿易總協定”（GATS）簽署國之間的聯繫。通過相互承認協議（MRA），來自另一個國家的合格專業會計師可以在美國執業，而無需完全重新認證，同樣承認希望在同一個國家執業的美國註冊會計師。</div>
                        <img className="mt100" src="./cpaImg/teacher_banner.jpg"alt=""/>
                        <div className="fs-2 mt-3 mb-3 text-center fw-bold">當前協議</div>
                        <div className="w-50 text-center m-auto">IQAB目前已經與以下專業機構建立了MRA</div>
                    </div>
                </div>
                <div className="container-fluid mb100">
                    <div className="d-flex">
                        <div className="clearfix clear-columns"></div>
                        <div className="col-sm-3 ctbox ctl"><img src="./cpaImg/ic_ct01.png"alt=""/>澳洲特許會計師協會(ICAA)</div>
                        <div className="col-sm-3 ctbox"><img src="./cpaImg/ic_ct02.png"alt=""/>CPA Canada (CPAC)</div>
                        <div className="col-sm-3 ctbox"><img src="./cpaImg/ic_ct03.png"alt=""/>蘇格蘭特許會計師協會(ICAS)</div>
                        <div className="col-sm-3 ctbox"><img src="./cpaImg/ic_ct04.png"alt=""/>愛爾蘭特許會計師公會(CAI)</div>
                    </div>
                    <div className="ctbk">
                        <div className="d-flex">
                            <div className="col-sm-4 ctbox ctl"><img src="./cpaImg/ic_ct05.png"alt=""/>墨西哥公共會計師公會(IMCP)</div>
                            <div className="col-sm-4 ctbox"><img src="./cpaImg/ic_ct06.png"alt=""/>紐西蘭特許會計師協會(NZICA)</div>
                            <div className="col-sm-4 ctbox"><img src="./cpaImg/ic_ct07.png"alt=""/>香港會計師公會(HKICPA)</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cpa;