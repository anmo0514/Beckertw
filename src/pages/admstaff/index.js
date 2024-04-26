import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"

function Admh() {
    return (
        <>
            <div className="text-end mt-2">
                <button className="btn btn-success me-2">新增</button>
            </div>
            <div className="mt-2">
                <table className="table border">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>帳號</th>
                            <th>狀態</th>
                            <th>職稱</th>
                            <th>修改</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <th>name</th>
                            <th>account</th>
                            <th>--status--</th>
                            <th>-----</th>
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
export default Admh;