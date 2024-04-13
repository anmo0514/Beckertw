import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "./styles/pay.scss";
import { motion } from "framer-motion"
import Address from "./component/address";


function Pay() {
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
                <div className="beckertitlename mt100 mb-5">付款資訊</div>
                <div className="card w-75 p-5 m-auto">
                    <div className="card-body">
                        付費購買匯款資訊<br/>
                        【在台購買】<br/>
                        收款人戶名：捷進顧問有限公司<br/>
                        受款銀行：華南商業銀行信維分行 (代碼：008 )<br/>
                        收款人帳號：149-10-010062-0<br/><br/>

                        匯款金額：以新台幣付費，依各方案價格 (若需快遞書籍，請加上運費)<br/>
                        快遞計費方式：單箱最多可裝 2 科書籍，每箱快遞費 TWD 100 元。<br/>
                        __________________<br/><br/>

                        【海外購買】<br/>
                        Recipient Name: Direct Line Consulting Co.<br/>
                        Account Number: 149-10-010062-0<br/><br/>

                        Bank: Hua Nan Commercial Bank Ltd.<br/>
                        Branch: Hsin-Wei Branch<br/>
                        SWIFT Code (Bank ID): 
                        <br/><br/>
                        HNBKTWTP149<br/>


                        Bank Address: 2F, No.6, Xinyi Rd. Sec. 4, Da'an Dist., 106 Taipei City, Taiwan<br/><br/>

                        匯款金額：以新台幣付費，依各方案價格 (全額到匯)
                    </div>
                    <form>
                        <div className="form-group mb-4">
                            <label  className="mb-2">繳費金額</label>
                            <input type="text" className="form-control" id="payment" />
                            <small id="nameHelp" className="form-text text-muted">請填入您已匯款/轉帳之金額</small>
                        </div>
                        <div className="form-group mb-4">
                            <label  className="mb-2">匯款 / 轉帳日期</label>
                            <input type="date" className="form-control" id="payment" />
                            <small id="nameHelp" className="form-text text-muted">Becker Taiwan 將依此核對確認您的款項</small>
                        </div>
                        <div className="form-group mb-4">
                            <label  className="mb-2">匯款 (存款) 人姓名、或轉出帳戶後五碼</label>
                            <input type="text" className="form-control" id="payer" />
                        </div>
                    </form>
                <Link to="../registration/success"><button type="submit" className="btn btn-primary">送出</button></Link>
                </div>
            </div>
        </>
    );
}
export default Pay;