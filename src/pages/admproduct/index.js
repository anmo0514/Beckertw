import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"

function AdmDiscount() {
    return (
        <>
            <div className="text-end mt-2">
                <button className="btn btn-success me-2">新增</button>
            </div>
            <div className="mt-2">
                <table className="table border">
                    <thead>
                        <tr>
                            <th>名稱</th>
                            <th>分類</th>
                            <th>顯示</th>
                            <th>價錢</th>
                            <th>編輯</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <th>name</th>						
                            <th>core_id</th>
                            <th>displ_id</th>
                            <th>price</th>
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
export default AdmDiscount;