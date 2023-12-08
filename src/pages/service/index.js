import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/service.scss";
import { motion } from "framer-motion"

function Service() {

    

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
                    <img src="./serviceImg/servicebanner.jpg" alt=""/>
                </motion.div>
            </div>
            <div className="container">
                <div className="beckertitlename mt100 mb-5">獨一無二台灣在地化中文加值服務</div>
                <div className="container whycpa mb100">
                <div className="sixsq">
                    <div className="sqcard">
                        <div className="side mt-5">
                            <img src="./cpaImg/cpa_icon_01.svg" alt=""/>
                            <div className="fs-5">特聘中文專業講師</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-5">捷進特聘中文講師，每位皆為 Becker 學員，均成功通過美國 CPA 四科考試且具豐富職場經驗。
                            職業領域包含四大會計事務所、大型法律事務所、外資企業、電商平台、…等。</div>
                        </div>
                    </div>
                </div>
                <div className="sixsq">
                    <div className="sqcard">
                        <div className="side mt-5">
                            <img src="./cpaImg/cpa_icon_02.svg" alt=""/>
                            <div className="fs-5">申請流程顧問諮詢</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-3">購買美國 Becker CPA Exam Review 會計專業培訓教材，於軟體效期內，捷進針對 USCPA 考程提供 3 次免費顧問諮詢及文件檢核服務，主題包含：學歷認證、報名考試、預約考場，每次30分鐘。另有「考後申請執照」與「抵免台會考試」兩項內容可接受顧問預約申請。</div>
                        </div>
                    </div>
                </div>
                <div className="sixsq">
                    <div className="sqcard">
                        <div className="side mt-5">
                        <img src="./cpaImg/cpa_icon_03.svg"alt=""/>
                            <div className="fs-5">中文精華數位課程</div>
                        </div>
                        <div className="side back p-3">
                            <div className="fs-5 mt-5">捷進數位課程，是將面授課程同步數位化，針對商務人士、預備出國留學、公務出差、留學中短暫返台的學員，配合個人需求自主安排課程進度。
                            數位化學習設備採一人一機，課程內容可重覆聆聽也可加快學習速度，是最佳個人化課程服務。</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container whycpa mb100">
                    <div className="sixsq">
                        <div className="sqcard">
                            <div className="side mt-5">
                            <img src="./cpaImg/cpa_icon_04.svg"alt=""/>
                                <div className="fs-5">中文精華面授課程</div>
                            </div>
                            <div className="side back p-3">
                                <div className="fs-5 mt-5">捷進中文講師針對台灣學生特別編寫講義、掌握重點、解析觀念，內容如濃縮成雞精般的精華，幫助學員有效吸收會計專業知識。
                                實體面授課程，小班教學機制，師生、同儕與捷進同仁交流互動，讓準備 USCPA 的你持續感受到鼓勵與支持。</div>
                            </div>
                        </div>
                    </div>
                    <div className="sixsq">
                        <div className="sqcard">
                                <div className="side mt-5">
                                    <img src="./cpaImg/cpa_icon_05.svg"alt=""/>
                                    <div className="fs-5">中文雲端學科導讀</div>
                                </div>
                                <div className="side back p-3">
                                    <div className="fs-5 mt-5">捷進為幫助非英語系國家考生能快速有效地進入學習狀態，請四大學科專業講師分析各科章節配比與重要內容、準備小撇步與時間規劃建議，幫助學員站穩學習第一步。</div>
                                </div>
                        </div>
                    </div>
                    <div className="sixsq">
                        <div className="sqcard">
                                <div className="side mt-5">
                                <img src="./cpaImg/cpa_icon_06.svg"alt=""/>
                                    <div className="fs-5">中文雲端趨勢解題</div>
                                </div>
                                <div className="side back p-3">
                                    <div className="fs-5 mt-5">中文講師針對 Becker CPA Exam Review 題庫中的指標性題目，預先進行題目解析，透過解題強化觀念並融貫實務應用。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="br mt100 mb100"></div>
                <div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.3,
                            default: { ease: "linear" },
                        }}>
                        <div className="beckertitlename mt100 mb-5">選擇美國註冊會計師 Why USCPA?</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.5,
                            default: { ease: "linear" },
                        }}>
                        <div className="text-center w-50 m-auto">
                        美國註冊會計師為全球會計專業類首選，人才需求遍佈各地跨國企業，是留學生申請 OPT、移民赴美工作者加分首選。USCPA 考試通過率高、準備期短，台灣在職考生平均九個月通過全科考試，即獲取執照；在校全職考生最快兩個月即通過全科。
                        USCPA 考法寫作比重低、重觀念、不須死背，實際考試介面提供法規查詢與自動拼字檢查功能，不求考試技巧或背誦大量法條，目的在於強調與證明考生擁有解決客戶疑問的能力。
                        </div>
                        </motion.div>
                    </div>
                    <div className="br mt100 mb100"></div>
                    <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.3,
                            default: { ease: "linear" },
                        }}>
                    <div className="beckertitlename mt100 mb-5">選擇 Becker 準備美國會計師考試 Why Becker CPA?</div>
                    </motion.div>
                    <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.5,
                            default: { ease: "linear" },
                        }}>
                    <div className="text-center w-50 m-auto">
                    在「能力當道 + 講求迅速」的現今，每十個美國會計師之中，就有九個是使用 Becker 通過考試成功；90%獲 Elijah Watt Sells Award 的考生得主都是 Becker 學員。
        　
                    然而，北美地區華人考生可能受限於留美時間短、對專業英文與對英美法陌生之故，常在考試準備上無法有效率地達標。
                    </div>
                    </motion.div>
                    <div className="br mt100 mb100"></div>
                    <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.3,
                            default: { ease: "linear" },
                        }}>
                    <div className="beckertitlename mt100 mb-5">選擇 Becker 台灣雙語課程與諮詢方案 Why Taiwan Becker CPA?</div>
                    </motion.div>
                    <motion.div
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.5,
                            default: { ease: "linear" },
                        }}>
                    <div className="text-center w-50 m-auto">
                        Becker Taiwan 自2003年起，即推廣研發中文與英文雙語解說課程，協助跨科系、對英美法及專業英文陌生的華語考生們，快速理解並成功通過 USCPA 考試。Becker Taiwan 的 CPA 考生學員通過率高，2016 更獲 AICPA 高分肯定獎項 Elijah Watt Sells Award。在英語非母語的台灣，學員能獲有此殊榮，與台灣中文講師的精湛教學不無關係。
            　
                        Becker Taiwan 的 CPA 四科中文課程，皆聘請在該科領域上獨具專業背景的美國會計師。舉例來說，Regulation 科目講師亦持有美國律師資格；同時，內含大量資訊科技內容的 BEC 科目，授課講師即為 IT 專業背景的美國會計師。
            　
                        此外值得一提的是，Becker Taiwan 的 CPA 學員可獲得線上中文解題服務、使用中文解答知識庫、以及報名申請考試的行政手續全程輔導。
                    </div>
                    </motion.div>
                </div>
            </div>
            <div className="container mt100">
                <div className="row">
                    <div className="col-6">
                        <div className="text-left mb-2">
                            REG 美國商稅法，台灣講師教學試聽影片：
                        </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/psCks4Iw5Eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-6">
                        <div className="text-left mb-2">
                            BEC 商業環境，台灣講師教學試聽影片：
                        </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wjqdm-SfnzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="beckertitlename mt100 mb-5">選擇現在啟動考照計畫 Now is the time</div>
                    <div className="text-center w-50 m-auto">
                        Becker Taiwan 即日起擴增 CPA 雙語課程（比 Becker 原文教材更多出約120小時之中文強化講解課程）以及上述貼心服務至北美及新加坡地區，開放華人考生跨洋線上學習與使用。
                        想要快速通過考試取得美國會計師執照的華人考生，現在就是最好的啟動時機！
                        　
                        Becker Taiwan 現行優惠方案，讓您使用 Becker CPA 及中文雙語輔考課程教材，可持續展延使用期限，展延直到考上為止；您可自由任選時段於雲端看課，讓業界經驗豐富的中文 USCPA 講師，帶您入門美國商稅法、資訊科技、政府會計等會計本科都不一定修過的範疇，搭配講師系統整理之精華重點講義；您可全程在線上上課，且依個人需要隨選隨看。
                        　
                        把握 2024 考試即將大改前的黃金準備期，取得「不是工作選我，而是我來挑工作」的鍍金籌碼：準備USCPA，就是現在！
                    </div>
                </div>
            </div>
            <div className="beckertitlename mt100">捷進 Becker 產品介紹</div>
            <div className="text-center w-75 m-auto">
                點選套組下方「報名與購買」，即可查看線上報名表。<br/>
                欲購買教材並報名課程，請填寫報名表並依說明完成匯款；我們在收到表單資料後，將有專人於當日與您聯絡。
            </div>
            <div className="container">
                <div className="row mt100">
                    <div className="col-4">
                        <div className="card pdbox w-75 h-100">
                            <h5>專業方案</h5>
                            <div className="card-body">
                                <ul className="align-items-stretch">
                                    <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
                                    <li>英文線上解題 (Academic Support)</li>
                                    <li className="text-danger">考程顧問諮詢輔導</li>
                                    <li className="text-danger">CPA Final Review 軟體</li>
                                    <li className="text-danger">All In One 國際就業力課程</li>
                                    <li className="text-danger">完整四科中文課程</li>
                                    <li className="text-danger">線上導讀與解題影片</li>
                                    <li className="text-danger">中文線上解題服務</li>
                                    <li className="text-danger">CPE Select 一年份執照進修課程</li>
                                </ul>
                            </div>
                            <div className="ugbk">
                                <h6>使用效期</h6>
                                <span>24個月</span>
                            </div>
                            <div className="ugbk">
                                <h6>適用客群</h6>
                                <span>帶職、在學備考者<br/>
                                並使用中文課程與線上解題服務</span>
                            </div>
                            <div className="cash">120,000</div>
                            
                            <Link to="https://forms.gle/giXyV9tj6gQFhpu68" target="_blank" className="bt_prd">»報名與購買</Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card pdbox w-75 h-100">
                            <h5>全修方案</h5>
                            <div className="card-body">
                                <ul className="align-items-stretch">
                                    <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
                                    <li>英文線上解題 (Academic Support)</li>
                                    <li className="text-danger">考程顧問諮詢輔導</li>
                                    <li className="text-danger">CPA Final Review 軟體</li>
                                    <li className="text-danger">All In One 國際就業力課程</li>
                                    <li className="text-danger">完整四科中文課程</li>
                                    <li className="text-danger">線上導讀與解題影片</li>
                                    <li className="text-danger">中文線上解題服務</li>
                                </ul>
                            </div>
                            <div className="ugbk">
                                <h6>使用效期</h6>
                                <span>24個月</span>
                            </div>
                            <div className="ugbk">
                                <h6>適用客群</h6>
                                <span>留學生、僅須重點中文課程者</span>
                            </div>
                            <div className="cash">80,000</div>
                            
                            <Link to="https://forms.gle/giXyV9tj6gQFhpu68" target="_blank" className="bt_prd">»報名與購買</Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card pdbox w-75 h-100">
                            <h5>選修方案</h5>
                            <div className="card-body">
                                <ul className="align-items-stretch">
                                    <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
                                    <li>英文線上解題 (Academic Support)</li>
                                    <li className="text-danger">三次考程顧問諮詢輔導</li>
                                    <li className="text-danger">任選6堂中文課程</li>
                                    <li className="text-danger">CPA Final Review 軟體</li>
                                    <li className="text-danger">All In One 國際就業力課程</li>
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
                </div>
            </div>
            <div className="container">
                <div className="row mt100">
                    <div className="col-4">
                        <div className="card pdbox w-75 h-100">
                            <h5>自修方案</h5>
                            <div className="card-body">
                                <ul className="align-items-stretch">
                                    <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
                                    <li>英文線上解題 (Academic Support)</li>
                                </ul>
                            </div>
                            <div className="ugbk">
                                <h6>使用效期</h6>
                                <span>24個月</span>
                            </div>
                            <div className="ugbk">
                                <h6>適用客群</h6>
                                <span>帶職、在學備考者<br/>
                                並使用中文課程與線上解題服務</span>
                            </div>
                            <div className="cash">120,000</div>
                            
                            <Link to="https://forms.gle/giXyV9tj6gQFhpu68" target="_blank" className="bt_prd">»報名與購買</Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card pdbox w-75 h-100">
                            <h5>單科雙語</h5>
                            <div className="card-body">
                                <ul className="align-items-stretch">
                                    <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
                                    <li>英文線上解題 (Academic Support)</li>
                                    <li>單科中文課程</li>
                                </ul>
                            </div>
                            <div className="ugbk">
                                <h6>使用效期</h6>
                                <span>24個月</span>
                            </div>
                            <div className="ugbk">
                                <h6>適用客群</h6>
                                <span>留學生、僅須重點中文課程者</span>
                            </div>
                            <div className="cash">80,000</div>
                            
                            <Link to="https://forms.gle/giXyV9tj6gQFhpu68" target="_blank" className="bt_prd">»報名與購買</Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card pdbox w-75 h-100">
                            <h5>購買方式</h5>
                            <div className="card-body">
                                <ul className="align-items-stretch">
                                    <li>點選套組下方「了解更多」，即可查看線上報名表。</li>
                                    <li>欲購買教材並報名課程，請填寫報名表並依說明完成匯款；我們在收到表單資料後，將有專人於當日與您聯絡。</li>
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
                </div>
            </div>
            <div className="beckertitlename mt100">甚麼是持續展延？</div>
            <div className="text-center w-50 m-auto mb100">
            Becker 公定使用效期為24個月，到期時若有尚未通過的科目，告知 Becker，即可免費展延該科目的使用效期。每次免費展延6個月，可無限次展延，直到通過該科考試為止。
            以上加值服務之項目與內容，本公司將保留變更、終止、修改及解釋之權利。
            <div className="br mt100 mb100"></div>
            </div>
            <div className="container-fluid wt xx_pc">
                <div className="beckertitlename mt100">台灣與美國<br/>
                    購買Becker教材比較</div>
                <div className="row adt">
                    <div className="col-sm-5 cpm">
                        <div className="cpl titcp">
                            <br/> 美國/USA
                        </div>
                    </div>
                    <div className="col-sm-2 cpit cpt titcp">v.s.</div>
                    <div className="col-sm-5 cpm">
                        <div className="cpr titcp">
                            <br/> 台灣/TAIWAN
                        </div>
                    </div>
                </div>
                <div className="row cpe adt">
                    <div className="col-sm-5 cpm">
                        <div className="cpl">
                            Becker CPA Exam Review
                            <br/> 培訓軟體與四科書籍
                        </div>
                    </div>
                    <div className="col-sm-2 cpit cpt">產
                        <br/>品
                    </div>
                    <div className="col-sm-5 cpm">
                        <div className="cpr">Becker CPA Exam Review
                            <br/> 培訓軟體與四科書籍
                        </div>
                    </div>
                </div>
                <div className="row cpe eg adt">
                    <div className="col-sm-5 cpm">
                        <div className="cpl">
                            <br/> USD 2,499
                        </div>
                    </div>
                    <div className="col-sm-2 cpit epg cpt">價
                        <br/>格
                    </div>
                    <div className="col-sm-5 cpm">
                        <div className="cpr"><span className="egs">★★★★★</span>
                            <br/> NTD 113,000
                            <br/>
                            <span className="red">售價與美國同步，再贈中文加值服務</span>
                        </div>
                    </div>
                </div>
                <div className="row cpe eb adt">
                    <div className="col-sm-5 cpm">
                        <div className="cpl">
                            <br/> 美籍全英語教學
                            <br/> 四科
                        </div>
                    </div>
                    <div className="col-sm-2 cpit epb cpt">授
                        <br/>課
                        <br/>方
                        <br/>式
                    </div>
                    <div className="col-sm-5 cpm">
                        <div className="cpr"><span className="ebs">★★★★★</span>
                            <br/> 美籍全英語教學
                            <br/> 四科
                            <br/>
                            <span className="red">四科中文精華課程 + 四科中文雲端導讀與趨勢解題</span>
                        </div>
                    </div>
                </div>
                <div className="row cpe ed adt">
                    <div className="col-sm-5 cpm">
                        <div className="cpl">
                            <br/> 無
                        </div>
                    </div>
                    <div className="col-sm-2 cpit epd cpt">顧
                        <br/>問
                        <br/>諮
                        <br/>詢
                    </div>
                    <div className="col-sm-5 cpm">
                        <div className="cpr"><span className="eds">★★★★★</span>
                            <br/>
                            <span className="red">考程 3 階段顧問諮詢與文件檢核服務：<br/>
                                ◆ 學歷認證、報名考試、預約考場<br/>
                                通過考試後，依學員需求可預約：<br/>
                                ◆ 執照申請與台會抵免諮詢 (1小時 3,000元；提供備考經驗分享得免費換取)</span>
                        </div>
                    </div>
                </div>
                <div className="row cpe ex adt">
                    <div className="col-sm-5 cpm">
                        <div className="cpl">
                            <br/> Academic Support 軟體線上發問系統
                            <br/> 48小時英文解題回覆服務
                        </div>
                    </div>
                    <div className="col-sm-2 cpit epx cpt">解
                        <br/>題
                        <br/>服
                        <br/>務
                    </div>
                    <div className="col-sm-5 cpm">
                        <div className="cpr"><span className="exs">★★★★★</span>
                            <br/> Academic Support 軟體線上發問系統
                            <br/> 48小時英文解題回覆服務
                            <br/>
                            <span className="red">中文解題知識庫：進入題庫搜尋問題解析<br/>
                                中文線上發問系統：中文發問、中文回覆<br/>
                                中文雲端趨勢解題：中文講師針對Becker指標性題目預先進行題目解析
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="beckertitlename mt100 mb100" id="why">方案比較</div>
            <div className="container mb100">
                <div class="row">
                    <div class="compare" >
                        <table className="text-center">
                            <tr>
                                <td nowrap="">
                                    <div class="a1">專業方案</div>
                                </td>
                                <td nowrap="">
                                    <div class="a1">全修方案</div>
                                </td>
                                <td nowrap="">
                                    <div class="a1">選修方案</div>
                                </td>
                                <td nowrap="">
                                    <div class="a1">自修方案</div>
                                </td>
                            </tr>
                            <tr class="xxx-hide">
                                <td colspan="5">
                                    <div class="a2">適合客群</div>
                                </td>
                            </tr>
                            <tr class="xxx-hide">
                                <td class="a3" align="left" valign="top">
                                    <div>以取得執照為目標的財務會計業界人士</div>
                                </td>
                                <td class="a3" align="left" valign="top">
                                    <div>習慣搭配中文學習輔助、與同儕切磋、節省自行摸索時間、避免繁瑣手續者</div>
                                </td>
                                <td class="a3" align="left" valign="top">
                                    <div>仍在職或在學、僅需重點單元的中文課程、欲節省自行摸索時間、避免繁瑣手續者</div>
                                </td>
                                <td class="a3" align="left" valign="top">
                                    <div>有自信短期內通過考試、不需中文課程者</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">CPA Exam Review 學習軟體</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">100+ 小時美師授課影片（英字幕）</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">1300 電子閃字卡 (Flashcards)</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">6,700+ 練習題庫</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">3 套期中考 + 2 套模擬考 </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">70+ 小時美師解題影片（英文字幕）</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">四本 Exam Review 紙本教科書</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">外師線上解題服務 (英文)</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">CPA Final Review 總複習軟體</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">35+ 小時美師總複習影片（英文字幕）</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">800+ 總複習練習題庫</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">1 套全真模擬考 </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">考程顧問諮詢輔導</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">三次</div>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">中文課程（實體面授、實體數位、雲端觀看）</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">4科</div>
                                </td>
                                <td>
                                    <div class="a3">4科</div>
                                </td>
                                <td>
                                    <div class="a3">6堂</div>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">中師線上解題服務 (中文)</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">30+ 小時中師導讀與解題影片</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">All In One 國際就業力線上課程</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">執照延續進修課程 CPE 一年份訂閱</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3">✔</div>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">軟體效期</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3"><a href="#pp1">24個月</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp2">24個月</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp3">24個月</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp4">24個月</a></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3"><a href="#pp1">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp2">✔</a></div>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">方案定價</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3"><a href="#pp1">NT$120,000</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp2">NT$113,000</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp3">NT$80,000</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp4">NT$75,000</a></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="compare">
                        <table className="text-center">
                            <tr class="xxx-hide">
                                <td colspan="5">
                                    <div class="a1">Becker Taiwan 學員專屬加購功能</div>
                                </td>
                            </tr>
                            <tr>
                                <td nowrap="">
                                    <div class="a1">專業方案</div>
                                </td>
                                <td nowrap="">
                                    <div class="a1">全修方案</div>
                                </td>
                                <td nowrap="">
                                    <div class="a1">選修方案</div>
                                </td>
                                <td nowrap="">
                                    <div class="a1">自修方案</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">可換取考後申請執照顧問諮詢</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3"><a href="#pp1">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp2">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp3">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp4">✔</a></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">可加購中文課程堂數</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3"><a href="#pp1">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp2">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp3">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp4">✔</a></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">可選修加州州立大學合作學分班</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3"><a href="#pp1">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp2">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp3">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp4">✔</a></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">可加購持續展延 Unlimited Access</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp3">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp4">✔</a></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">可加購 Final Review 總複習</div>
                                </td>
                            </tr>
                            <tr>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <div class="a3"><a href="#pp3">✔</a></div>
                            </td>
                            <td>
                                <div class="a3"><a href="#pp4">✔</a></div>
                            </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="a2">購買 CMA (美國管理會計師) 享學員優惠</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="a3"><a href="#pp3">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp3">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp3">✔</a></div>
                                </td>
                                <td>
                                    <div class="a3"><a href="#pp4">✔</a></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;