import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"

function AdmTeacher() {
    return (
        <>
            <div className="mt100 container">
            <div className="text-end mt-2">
                <button className="btn btn-success me-2">新增</button>
            </div>
            <div className="mt-2">
                <table className="table table-striped border">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>信箱</th>
                            <th>狀態</th>
                            <th>類別</th>
                            <th>分類</th>
                            <th>功能</th>
                            <th>修改</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>status</th>
                            <th>subject</th>
                            <th>xtype</th>
                            <th>
                                <div>
                                    <button className="btn btn-secondary me-2">履歷</button>
                                    <button className="btn btn-secondary me-2">試教影片</button>
                                    <button className="btn btn-secondary">合約</button>
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
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>status</th>
                            <th>subject</th>
                            <th>xtype</th>
                            <th>
                                <div>
                                    <button className="btn btn-secondary me-2">履歷</button>
                                    <button className="btn btn-secondary me-2">試教影片</button>
                                    <button className="btn btn-secondary">合約</button>
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
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>status</th>
                            <th>subject</th>
                            <th>xtype</th>
                            <th>
                                <div>
                                    <button className="btn btn-secondary me-2">履歷</button>
                                    <button className="btn btn-secondary me-2">試教影片</button>
                                    <button className="btn btn-secondary">合約</button>
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
            </div>
        </>
    );
}
export default AdmTeacher;