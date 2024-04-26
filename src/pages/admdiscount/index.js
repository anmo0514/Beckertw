import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"

function AdmProduct() {
    return (
        <>
            {/* <!-- banner --> */}
            <div className="text-end mt-2">
                <button className="btn btn-success me-2">新增</button>
            </div>
            <div className="mt-2">
                <table className="table border">
                    <thead>
                        <tr>
                            <th>名稱</th>
                            <th>折扣</th>
                            <th>狀態</th>
                            <th>到期日</th>
                            <th>備註</th>
                            <th>修改</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <th>name</th>				
                            <th>discount</th>
                            <th>status</th>
                            <th>due_date</th>
                            <th>memo</th>
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
export default AdmProduct;