import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/registration.scss";
import { motion } from "framer-motion"

function Registration() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleNextButtonClick = (e) => {
        if (!isChecked) {
            e.preventDefault(); // 阻止點擊事件的默認行為
            alert("請先勾選已詳閱並且了解");
        }
    };
    return (
        <>
            {/* <!-- banner --> */}
            {/* <div className="banner">
                <motion.div
                        initial={{ opacity: 0, x:-100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                        }}>
                    <img src="./serviceImg/servicebanner.jpg" alt=""/>
                </motion.div>
            </div> */}
            {/* <!-- USCPA 方案線上報名表 --> */}
            <div className="container mb100 mt100">
                <div className="beckertitlename mb100 mt100">Becker CPA方案</div>
                <div class="card w-75 p-5 m-auto">
                <h5 class="card-title text-black text-center">Becker 方案購買須知與相關規定  (請務必詳閱)</h5>
                <div className="br mb-5 mt-3"></div>
                    <div class="card-body">
                        <p class="card-text m-auto">
                            <div>
                            <ol>
                                <li>
                                    <div className="font-weight-bold">
                                    購買教材者，須填妥本訂購單資料表，完整審閱同意事項後，完成付費，方符合訂購程序。繳費前，請先確認購買產品內容與費用。
                                    </div>
                                    <ul>
                                        <li>購買前請確認完整審閱此份購買須知與相關規定，審閱期已達五日。</li>
                                        <li>教材（軟體登入權限與教科書），將於購買者所選之中文面授課程開課日當日提供。</li>
                                        <li>學員之個人教材軟體帳號經首次登入後，教材恕不退費，亦不得要求暫停效期。</li>
                                        <li>學員領取帳號後，應妥善保管其登入密碼，確保不為他人得知，因非可歸責於Becker Taiwan (捷進)之事由導致登入密碼外洩時， Becker Taiwan (捷進)除提供必要協助外，不負任何法律上責任。</li>
                                    </ul>
                                </li>
                                <li className="text-black">學員資料表 E-mail信箱資訊，有效期限必須達二十四個月以上，購買後請自行定期收信，本軟體服務及一切相關資訊將以該 E-mail信箱為聯繫方式，若因學員未定期收信導致權益受影響，學員應自負其責。
                                    <ul>
                                        <li>Becker CMA Exam Review 使用權限效期以第一次登入軟體當日起算二十四個月後終止。(Your Becker CMA Exam Review license will expire 24 months from the date of first login.)</li>
                                        <li>購買自修方案者，方案無包含紙本教科書。</li>
                                        <li>為提升服務品質及確保學員正確使用本教材，Becker Professional Education與 Becker Taiwan (捷進)將蒐集、處理並分析系列產品使用帳號之軟體登錄時間、網路位址 (IP address) 等相關資訊。在任何情況下，系統若發現有多人登錄同一帳號情況，Becker Taiwan (捷進)有權中止該帳號之軟體權限。</li>
                                        <li>若遇書籍取用完畢，需等待國際郵務寄達台灣，無法指定取書時間。</li>
                                    </ul>
                                </li>
                                <li>Becker CMA Exam Review系列為美國進口原版教材與軟體，限購買者個人使用，不得轉贈、轉讓及分享。</li>
                                <li>
                                    學雜費用退費標準：
                                    <ul>
                                        <li>因故未能開班上課，全額退還已繳之學雜費用。</li>
                                        <li>
                                            學員完成報名繳費後，倘因個人因素無法上課時，依下列標準退還學雜費用：
                                            <ul>
                                                <li>學員自報名繳費後至實際上課日前退費者，退還已繳學費、雜費等各項費用之九成。</li>
                                                <li>自實際上課日起未逾全期三分之一且已啟用軟體者，扣除軟體教材費用後，退還學費、雜費等各項費用之半數。</li>
                                                <li>自實際上課日起未逾全期三分之一而尚未啟用軟體者，退還學費、雜費等各項費用之半數。</li>
                                                <li>若已逾全期三分之一者，不予退還。</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Becker Taiwan (捷進) 各項產品說明與限制：
                                    <ul>
                                        <li>各方案可能包含之中文課程等在地中文加值服務有效期限與軟體效期一致。</li>
                                        <li>菁英方案之面授課程，學員可以所持時數額度，選擇以面授、直播、線上隨選隨看型式使用，依逐次使用時數扣除額度，使用後不得要求變更、轉讓以及重複行使權益。
                                            <ul>
                                                <li>菁英方案學員得免費使用之中文課程總時數額度為軟體有效期限內任一期 Part 1 與 Part 2 面授時數，加上額外一倍小時補課複習時數。以單期兩科共60小時為例，補課複習時數為額外60小時。</li>
                                                <li>菁英方案學員選擇直播課程者，得於軟體效期內選擇一期之該科直播課程，於預約後完整參加。</li>
                                                <li>菁英方案學員選擇直播課程者，得於軟體效期內選擇一期之該科直播課程，於預約後完整參加。</li>
                                                <li>Becker Taiwan (捷進) 保有直播課程開課日期之決定權，依各期實際開課公告認定，學員不得異議。</li>
                                            </ul>
                                        </li>
                                        <li>學員之軟體使用效期結束、或通過全科考試時，若未使用完畢中文課程時數，剩餘時數等同失效，不得異議。</li>
                                        <li>面授、直播、線上隨選隨看課程中不得針對內容進行任何錄音、錄影等側錄行為。</li>
                                        <li>購買自修方案者，不得要求索取中文課程之各項研習講義、文件資料。</li>
                                        <li>Becker Taiwan (捷進) 保有各項加值服務與教室座位分配之決定權，學員欲使用上開服務均須提前來電或來信預約，以確認辦公室與教室空間服務狀態與起迄時間。</li>
                                    </ul>
                                </li>
                                <li>Becker Taiwan (捷進) 基於本訂購單履約之目的，蒐集、處理並利用您的個人資料，未經您的同意，Becker Taiwan (捷進)不會將您的個人資料提供給第三人或作不當利用，您享有個人資料保護法及相關法令之一切權利。</li>
                                <li>購買者之報考資格應以考試指定之認證機構以及報名審查官方機構出具之審查結果為準。</li>
                                <li>賣方保留任何因賣方代理原廠停產因素而停止供貨的權利，賣方亦保留任何因賣方代理原廠更改貨品規格而更改之權利並對此不負擔責任。</li>
                                <li>捷進顧問有限公司 (Becker Taiwan) 已依照台北市短期補習班管理規則之規定立案登記 (許可證書編號：北市補習班證字第7620號)，並已加入中華民國補教業品保協會辦理之補習服務聯合連帶保證協定 (品保協會會員編號：020267)。</li>
                            </ol>
                        </div>
                    </p>
                    <div className="text-center">
                        <label>
                            <input className="m-2" type="checkbox" value="read" checked={isChecked} onChange={handleCheckboxChange} required />
                            <span>我已詳閱並且了解</span>
                        </label>
                        <Link to="./plan" className="btn btn-primary m-3" onClick={handleNextButtonClick}>下一步</Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Registration;