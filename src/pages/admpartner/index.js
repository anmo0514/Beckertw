import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"

function AdmPartner() {
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
                            <th>折扣</th>
                            <th>狀態</th>
                            <th>備註</th>
                            <th>修改</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <th>name</th>
                            <th>discount</th>
                            <th>status</th>
                            <th>memo</th>
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
        </>
    );
}
export default AdmPartner;