import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/faq.scss";

function Faq() {
    return (
        <>
            {/* banner */}
            <div class="banner">
                <img src="./faqImg/faq.jpg" alt=""/>
                <div class="bannerttitle">
                    FAQ
                </div>
            </div>
            <div class="faq">
                <div class="faqsubnav col-3">
                    <div class="faqcpa">
                        CPA<br/>
                        <div class="fs-2">常見問題</div>
                    </div>
                    <div class="faqcma">
                        CMA<br/>
                        <div class="fs-2">常見問題</div>
                    </div>
                </div>
                <div class="col-9 mt-5 mb-5">
                    <div class="question">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Q： 獲得哪些科目的學分可通過美國CPA考試資格審核？
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        A：<br/>
                                        常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、審計學、審計法規、高等審計、會計資訊系統等。
                                        常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。
                                    </div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Q： 為何要考取美國會計師？
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        A：<br/>
                                        常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、審計學、審計法規、高等審計、會計資訊系統等。
                                        常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。
                                    </div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Q： 要怎麼辦理簽證去美國考試？
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        A：<br/>
                                        常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、審計學、審計法規、高等審計、會計資訊系統等。
                                        常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Q： 為什麼要選擇 Becker CPA 準備美國會計師考試？
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            A：<br/>
                                            常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、審計學、審計法規、高等審計、會計資訊系統等。
                                            常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Q： 為什麼要選擇 Becker CPA 準備美國會計師考試？
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            A：<br/>
                                            常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、審計學、審計法規、高等審計、會計資訊系統等。
                                            常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Q： 為什麼要選擇 Becker CPA 準備美國會計師考試？
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            A：<br/>
                                            常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、審計學、審計法規、高等審計、會計資訊系統等。
                                            常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Q： 為什麼要選擇 Becker CPA 準備美國會計師考試？
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            A：<br/>
                                            常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、審計學、審計法規、高等審計、會計資訊系統等。
                                            常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Q： 為什麼要選擇 Becker CPA 準備美國會計師考試？
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            A：<br/>
                                            常被認證通過的會計學分為：初級會計、中級會計、高級會計、成本會計、管理會計、高等管會、會計理論、政府會計、銀行會計、稅法、稅務法規、稅務會計、財報分析、審計學、審計法規、高等審計、會計資訊系統等。
                                            常被認證通過的商業學分為：商事法、商業統計學、管理學、投資學、經濟學、財政學、行銷學、財務管理、貨幣銀行、公司理財、或其他商業、財務、金融、管理方面的課程。
                                        </div>
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
export default Faq;