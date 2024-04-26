import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"

function AdmMemberView() {
    return (
        <>
            <div className="text-center mt-5">
                <button className="btn btn-primary me-2">年度</button>
                <button className="btn btn-primary me-2">方案</button>
                <button className="btn btn-primary me-2">科目</button>
                <button className="btn btn-primary me-2">已通過</button>
                <button className="btn btn-primary me-2">已退費</button>
                <button className="btn btn-primary me-2">展延</button>
            </div>
            <div className="text-end mt-2">
                <label>學員管理</label>
                <input type="text" className="form-input w-25 ms-5" value={"搜尋"}></input>
                
                <button className="btn btn-success me-2">新增</button>
            </div>
            <div className="mt-2">
                <table className="table border">
                    <thead>
                        <tr className="text-center">
                            <th>姓名</th>
                            <th>狀態</th>
                            <th>帳號</th>
                            <th>手機</th>
                            <th>信箱</th>
                            <th>創建日期</th>
                            <th>功能</th>
                            <th>編輯</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <th>name</th>				
                            <th>status</th>
                            <th>account</th>
                            <th>phone_num</th>
                            <th>email</th>
                            <th>createdate</th>
                            <th>
                                <div>
                                    <button className="btn btn-secondary me-2">履歷</button>
                                    <button className="btn btn-secondary me-2">成績單</button>
                                    <button className="btn btn-secondary">初談紀錄</button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <button className="btn btn-primary me-2">編輯</button>
                                    <button className="btn btn-secondary me-2">停用</button>
                                    <button className="btn btn-danger">刪除</button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </>
    );
}
export default AdmMemberView;