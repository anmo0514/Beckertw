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
                                        Q： IMA®是甚麼機構、以及CMA®目前在全球推廣情況如何?
                                    </button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A：<br/>美國管理會計師協會（The Institute of Management Accountants,簡稱IMA®)成立於1919年，是全球領先的國際管理會計師組織，為企業內部的財務專業人士提供最具含金量的資格認證和高品質服務。作為全球規模最大、最受推崇的專業協會之一。IMA®至今已創會超過100年，在全球130多個國家擁有超過140,000名會員，360多個專業分會。目前全球總共有10個代表處，透過世界各地代表處為會員提供服務。IMA®會員遍佈產業界、學術界、政府部門以及各類非營利組織，這些會員憑藉其領先財務理念、精準策略思考、卓越管理能力與嚴格道德準則，不斷推進企業和機構整體績效的提升。IMA®旗下的美國註冊管理會計師認證（Certified Management Accountant，簡稱CMA®）是對會計和財務專業人士的權威鑒定，是目前全球針對管理會計及財務管理領域唯一的證照。目前全球遍布100國家，超過40,000位會計及財務管理專業人員取得CMA認證。其所側重的財務規劃、績效與分析、策略財務分析等內容與當今財務專業人員在工作中所應用的專業知識、技能與能力保持一致，在全球被企業財務高管所廣泛認可。CMA認證以最為嚴格的測評標準保證權威性，以極其實用的知識體系培養管理會計精英，被譽為全球財務的黃金標準。  
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                        Q： 取得美國或澳洲會計師 (CPA) 執照者，是否能免考 CMA 其中一考科？
                                    </button>
                                </h2>
                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    CMA 考試目前無提供任何會計執照、證照、或大學修課證明去抵免任何部分的考試。<br/>
                                    CMA 考試共兩個科目，每位在學考生、在職考生皆須應考並通過這兩科。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        Q： CMA考試對於是否為會計本科系影響如何，一般需要準備多長時間？
                                    </button>
                                </h2>
                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    CMA是一個管理性質的工作，主要是著重於企業財務管理、策略、風險控管的性質，因此過去主要是吸引許多企業主管加以進修，因此並非只有會計本科系，應該說假如是從事企業管理與財管及企業策略有關之工作性質的人皆適合學習。通常約8-12個月的時間就可以完成CMA考試，備考半年即通過CMA考試兩個科目也大有人在。<br/>相關知識掌握程度。若讀大學修過成管會相關學分、研習財務管理等課程，那麼考CMA會相對輕鬆，若過去未曾修習過，透過教材及面授課程的引導，並加以練習也是可以習得相關知識。
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
                                        Q： 準備CMA時涉及哪些專業？對未來有何幫助？
                                    </button>
                                </h2>
                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    CMA有二門學習及考試科目—
                                    PART1 財務規劃、執行與分析：內容針對企業內部運營成本規劃、預算及目標管理、績效管理、內部控制及運用科技技術提升企業利潤。
                                    PART2 財務策略管理：針對企業財報、公司理財、風險管理、投資決策等涉及會計、管理、策略、市場、金融等多方知識之學習與應用。
                                    認證取得者皆在各行各業有傑出之表現，其中還有許多外商之CFO也是持證者，根據全球之統計數據，取得CMA的人平均薪資同性質非持證者多出57%，可以視為CFO之專業訓練。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        Q： 英文考試的用字是否會十分困難?
                                    </button>
                                </h2>
                                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    英文測驗的用字主要要熟悉專有名詞之使用，之後並配合模擬考題加以練習；其他敘述性的英文並不會是十分艱澀的用字，商用英文程度應能加以應付。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading7">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                        Q： CMA考試是否需參加培訓課程，課程後還要多少時間準備才夠充裕?
                                    </button>
                                </h2>
                                <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    CMA英文考試時間每年較為固定，分別是1月/2月，5月/6月，9月/10月。考生可以在各個窗口期內自由選擇具體CMA考試時間。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading8">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                        Q： 我需要在多長時間內通過兩門考試？
                                    </button>
                                </h2>
                                <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    所有 CMA 考生必須在三年內通過所有 CMA 考試，起始時間自購買考試准入費之日起計算。 如果未能在三年內通過所有考試，已經通過的考試將失效，必須重新報考。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading9">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                        Q： CMA 管理會計師考試通過率 & 通過後有甚麼證書申請資格？
                                    </button>
                                </h2>
                                <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    CMA 考試共考二科，單科總分500分，360分以上即為通過考試。亞洲區英文考試單科通過率約50%。考試成績大約在考試結束後6～8週郵寄給考生，並上傳到考生的 IMA 官網會員專區。
                                    欲取得 CMA 證書 (certificate)，考生需要通過全部 CMA 考試，並取得大學 (或以上) 之學歷、與二年相關工作經驗的認證。
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading10">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                        Q： 通過 CMA 考試之後，多久時間內必須申請證照？
                                    </button>
                                </h2>
                                <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    A：<br/>
                                    通過 CMA 兩科考試後，考生有七年的緩衝時間，可累積申請證照 (CMA certificate) 規定要求的兩年工作經驗。
                                    一旦考生取得兩年工作經驗，即可透過電郵聯繫 ICMA (Institute Of Certified Management Accountants) 申請並取得證照。
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    );
};

export default Faqcpa;
