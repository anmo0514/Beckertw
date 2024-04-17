import { useState, useRef } from "react";
import "./styles/memarea.scss";
import { motion } from "framer-motion";

function Memarea() {

    return (
        <>
            {/* banner */}
            <div className="banner">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, default: { ease: "linear" } }}
                >
                    <img src="/memberImg/login_banner.jpg" alt="" />
                </motion.div>
            </div>
            {/* <!-- USCPA 方案線上報名表 --> */}
            <div className="container mb100 mt100">
                <div className="beckertitlename mt100 mb-5">會員基本資料</div>
                <div className="card w-75 p-5 m-auto">
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-4">
                            <label htmlFor="name" className="mb-2">中文全名</label>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">英文拼音全名</label><br/>
                                <div className="row">
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="phone" className="mb-2">聯絡電話</label>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="mb-2">電子郵件</label>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="idIdentity" className="mb-2">身分證字號</label>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">所屬(或畢業)學校與科系</label>
                                
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">目前職業</label>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="incumbent" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="incumbent">在職者</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="student" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="student">在學生</label>
                                    <input type="radio" id="candidates" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="candidates">全職考生</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="unemployed" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="unemployed">待業中</label>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">是否需快遞寄送紙本教科書？(或可自取)</label>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="book1" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customRadioInline1">是，需快遞寄送</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="book2" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customRadioInline2">否，我要自取</label>
                                </div>
                                <small id="bookHelp" className="form-text text-muted">快遞計費方式：單箱最多可裝 2 科書籍，每箱快遞費 TWD 100 元。</small>
                            </div>
                            <label  className="mb-2">(承上題) 選擇「是，需要快遞寄送」者，近期欲領取 (快遞收取) 哪些科目？請註明。</label>
                            <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="aud"/>
                                <label className="custom-control-label m-2" for="aud">AUD</label>
                                
                                <input type="checkbox" className="custom-control-input" id="far"/>
                                <label className="custom-control-label m-2" for="far">FAR</label>
                                
                                <input type="checkbox" className="custom-control-input" id="reg"/>
                                <label className="custom-control-label m-2" for="reg">REG</label>
                                
                                <input type="checkbox" className="custom-control-input" id="isc"/>
                                <label className="custom-control-label m-2" for="isc">ISC</label>
                                
                                <input type="checkbox" className="custom-control-input" id="tcp"/>
                                <label className="custom-control-label m-2" for="tcp">TCP</label>
                                
                                <input type="checkbox" className="custom-control-input" id="bar"/>
                                <label className="custom-control-label m-2" for="bar">BAR</label>
                            </div>
                            <div className="form-group mb-4 mt-4">
                                <label  className="mb-2">發票/紙本教科書郵寄地址</label>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">發票開立統一編號與抬頭</label>
                                <input type="text" className="form-control mb-2" id="invoice" placeholder="統一編號"/>
                                <input type="text" className="form-control" id="invoice2" placeholder="公司抬頭"/>
                                <small id="invoiceHelp" className="form-text text-muted">留白則為一般二聯式發票</small>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">選擇「專業/全修/選修」方案者，欲參加中文課的方式：</label><br/>
                                <small id="invoiceHelp" className="form-text text-muted">依照個人需求，可複選。</small>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="onside"/>
                                    <label className="custom-control-label m-2" for="onside">現場面授</label>
                                    
                                    <input type="checkbox" className="custom-control-input" id="online"/>
                                    <label className="custom-control-label m-2" for="online">雲端教室 (線上看課)</label>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">是否買曾向 Becker Taiwan 購買過教材？</label>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="bought" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customRadioInline1">是</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="nbought" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customRadioInline2">否</label>
                                </div>
                            </div>
                            <label  className="mb-2">您是從何處得知 Becker Taiwan (捷進)</label>
                            <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="google"/>
                                <label className="custom-control-label m-2" for="google">Google</label>
                                
                                <input type="checkbox" className="custom-control-input" id="facebook"/>
                                <label className="custom-control-label m-2" for="facebook">Facebook</label>
                                
                                <input type="checkbox" className="custom-control-input" id="instagram"/>
                                <label className="custom-control-label m-2" for="instagram">Instagram</label>
                                
                                <input type="checkbox" className="custom-control-input" id="line"/>
                                <label className="custom-control-label m-2" for="line">LINE</label>
                                
                                <input type="checkbox" className="custom-control-input" id="edm"/>
                                <label className="custom-control-label m-2" for="edm">EDM</label>
                                
                                <input type="checkbox" className="custom-control-input" id="friend"/>
                                <label className="custom-control-label m-2" for="friend">親友同事介紹</label>
                                
                                <input type="checkbox" className="custom-control-input" id="lecture"/>
                                <label className="custom-control-label m-2" for="lecture">校園講座</label>
                                
                                <input type="checkbox" className="custom-control-input" id="accounting"/>
                                <label className="custom-control-label m-2" for="accounting">事務所內部宣傳</label>
                                
                                <input type="checkbox" className="custom-control-input" id="mrt"/>
                                <label className="custom-control-label m-2" for="mrt">捷運廣告</label>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Memarea;