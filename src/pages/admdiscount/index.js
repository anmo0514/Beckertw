import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion"

function AdmDiscount() {
    return (
        <>
            <div className="mt100 container">
                <div className="text-end mt-2">
                    <button className="btn btn-success me-2">新增</button>
                </div>
                <div className="mt-2">
                    <table class="table table-striped border">
                        <thead>
                            <tr>
                                <th scope="col">名稱</th>
                                <th scope="col">折扣</th>
                                <th scope="col">狀態</th>
                                <th scope="col">到期日</th>
                                <th scope="col">備註</th>
                                <th scope="col">修改</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div>
                                        <button className="btn btn-primary me-2">編輯</button>
                                        <button className="btn btn-danger">刪除</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div>
                                        <button className="btn btn-primary me-2">編輯</button>
                                        <button className="btn btn-danger">刪除</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div>
                                        <button className="btn btn-primary me-2">編輯</button>
                                        <button className="btn btn-danger">刪除</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default AdmDiscount;