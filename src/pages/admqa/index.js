import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"

function Admqa() {
    return (
        <>
            <div className="text-center mt-5 subselect">
                <button className="btn btn-primary me-2">CPA</button>
                <button className="btn btn-primary me-2">CMA</button>
            </div>
            <div className="mt100 container">
                <div className="text-end mt-2">
                    <button className="btn btn-success me-2">搜尋</button>
                    <button className="btn btn-success me-2">新增</button>
                </div>
                <div className="mt-2">
                    <table className="table table-striped border">
                        <thead>
                            <tr>
                                <th>編號</th>
                                <th>題目</th>
                                <th>問題</th>
                                <th>解答</th>
                                <th>老師</th>
                                <th>發問次數</th>
                                <th>狀態</th>
                                <th>發問日期</th>
                                <th>編輯</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                                <th>qa_id</th>						
                                <th>subject</th>
                                <th>xtype</th>
                                <th>reply</th>
                                <th>teacher_id</th>
                                <th>my_question</th>
                                <th>reply_status</th>
                                <th>create_date</th>
                                <th>
                                    <div>
                                        <button className="btn btn-primary me-2">編輯</button>
                                        <button className="btn btn-danger">刪除</button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th></th>						
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                    <div>
                                        <button className="btn btn-primary me-2">編輯</button>
                                        <button className="btn btn-danger">刪除</button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th></th>						
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                    <div>
                                        <button className="btn btn-primary me-2">編輯</button>
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
export default Admqa;