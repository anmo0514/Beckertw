import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../styles/faq.scss";

const Faqcpa = (props) => {
    useEffect(() => {
        // 初始化手琴琴功能
        const accordions = document.querySelectorAll('.accordion-button');
        accordions.forEach(accordion => {
            accordion.addEventListener('click', function () {
                const target = this.getAttribute('data-bs-target');
                const collapse = document.querySelector(target);
                if (collapse.classList.contains('show')) {
                    collapse.classList.remove('show');
                } else {
                    collapse.classList.add('show');
                }
            });
        });
    }, []);
    return (
        <>
            <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                        Q： 獲得哪些科目的學分可通過美國CPA考試資格審核？
                                    </button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A：<br/>常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、
                                        審計學、審計法規、高等審計、會計資訊系統等。<br/>
                                        常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。<br/>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                        Q： 為何要考取美國會計師？
                                    </button>
                                </h2>
                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    擁有USCPA資格至外商應徵通常可獲CFO或財務主管優先錄用資格。美國會計師證照國際發展效益大，可於美國執業、並大幅提升美國名校申請、技術移民成功率。考試準備時短、具彈性，每年每科最多可考四次。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        Q： 要怎麼辦理簽證去美國考試？
                                    </button>
                                </h2>
                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    美國已於2012年宣布台灣加入免簽證計畫，原則上持有台灣護照者，可赴美從事觀光或商務達90天，無需簽證。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Q： 為什麼要選擇 Becker CPA 準備美國會計師考試？
                                    </button>
                                </h2>
                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    高通過率、成立歷史最久加上完全針對考試設計的課程，已得到無數的肯定與回饋，是各界有目共睹的國際口碑。捷進每位學員都可以在自己的電腦上下載 Becker 軟體，其中包含美國老師授課影片、e-book、 Skills Practice、 情境模擬題組simulation、全真模擬試題以及其他貼心內容，是最方便有效的課程及教材。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        Q： Final Review 的內容題目跟與課本有何不同？
                                    </button>
                                </h2>
                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    Final Review 為考前衝刺使用，統整各科單元重點，幫助學員融會貫通考試觀念，另有題目與講解影片，練習機會更多更完整，迅速吸收記憶更清晰。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        Q： 課後有問題該怎麼辦?
                                    </button>
                                </h2>
                                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    軟體提供各題詳解，e-book 可搜尋自己需要的資訊外，Becker 學員可隨時於 Academic Support 系統上向 Becker 美國解題老師群發問，美籍老師們將在48小時內回覆。台灣學員可以利用捷進官網學員線上專區之中文發問系統，以中文向授課老師提問，由授課老師線上回覆 ; 專區內亦累積歷年來學員的發問與解答，供學員查詢使用。2017年起新增中文雲端趨勢解題，係中文授課老師針對Becker題庫指標性題目，預做觀念解析。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading7">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                        Q： Becker 中文輔助服務方式？
                                    </button>
                                </h2>
                                <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    捷進無論是中文課程或是自修學員都使用美國原裝進口Becker CPA Exam Review教材，台灣在地化培訓課程另有專業Becker台灣講師以面授或數位課程進行實務經驗解題、考點趨勢講解，同時提供您和參與考試的學員互相切磋交流的機會。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading8">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                        Q： 我需要多久時間準備考試、報名程序？
                                    </button>
                                </h2>
                                <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    準備考試所需時間視個人狀況而不同，一般來說3~18個月。報名程序包含了學歷認證，考試報名及預約考場等步驟，進度及所需時間亦因機構而異，一般來說約3~6個月。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading9">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                        Q： 是否必須一次報考四個科目？有無通過的時間限制？
                                    </button>
                                </h2>
                                <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    美國CPA考試並不要求一次報考全部四個科目，因此可以分科分次考完，每考過一科可以保留有效期限18個月，超過期限則該科成績自動失效，也就是說您需在18個月內將四個科目全數通過。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading10">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                        Q： 美國會計師考試在何時何地舉行？
                                    </button>
                                </h2>
                                <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    考試開放時間為全年期間之每週一至週五，早上八點、中午十二點半各為一個考試時段。考場遍及美國的領土或屬地，你不一定要前往你報考的州應考，可以在美國境內任何一個考場應考。美國境外另設有多個國際考場，但僅限當地居民或是美國居民可以使用。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading11">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                        Q： 英文程度不好，是否適用Becker CPA培訓課程，並完成考試？
                                    </button>
                                </h2>
                                <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    當然可以！對母語非英語的人而言，這個自修教材實際上可以幫助你改進英文技巧，並使你對美國會計專用術語更加瞭解。 Becker 教材已順利輔導許多國際應考人通過考試，且捷進的雲端解題、精華研習有講師講解概念、重點整理，對以華語為母語的 Becker CPA 國際學員，可在雙語的加強教學下，大幅提升考國際證照的準備效率。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading12">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                        Q： 報考前是否需要有實習經驗或會計相關工作經驗？
                                    </button>
                                </h2>
                                <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    美國會計師考試不像許多國家的會計師應考要求，美國會計師的外國應考者不需要在考試前就具有會計相關工作經驗，也無實習要求， 任何相關工作經驗都可在通過考試後再取得。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading13">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                        Q： 報考美國會計師考試是否一定要碩士學位或需會計系畢業的學士學位？
                                    </button>
                                </h2>
                                <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    美國會計師考試應考門檻依各州法不同條件要求亦不同，大部分州要求須具備學士學位，少部分州允許取得學位前報考；而各州對於總學分數、會計相關學分數及商業相關學分數的要求也有所不同。總括學位與學分數目前最低要求門檻為具學士學位和15個會計學分即可(歡迎上捷進官網報名免費報考資格評估) 。
                                    </div>
                                </div>
                            </div>
                            {/* Add other accordion items similarly */}
                        </div>
        </>
    );
};

export default Faqcpa;
