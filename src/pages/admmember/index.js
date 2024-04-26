import { useState, useEffect, createElement } from "react";
import {Link} from "react-router-dom";
import "./styles/adm.scss";
import { motion } from "framer-motion";
import axios from "axios";





function AdmMember() {
    return (
        <>  
        <div className="mt100 container">
        <div className="container mt100">
                <div className="text-end mt-2">
                    <button className="btn btn-success me-2">新增</button>
                </div>
                <div className="mt-2">
                    <table class="table table-striped border">
                        <thead>
                            <tr>
                                <th scope="col">姓名</th>
                                <th scope="col">狀態</th>
                                <th scope="col">帳號</th>
                                <th scope="col">手機</th>
                                <th scope="col">信箱</th>
                                <th scope="col">創建日期</th>
                                <th scope="col">功能</th>
                                <th scope="col">編輯</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div>
                                        <button className="btn btn-secondary me-2">履歷</button>
                                        <button className="btn btn-secondary me-2">成績單</button>
                                        <button className="btn btn-secondary">初談紀錄</button>
                                    </div>
                                </td>
                                <td>
                                <div>
                                    <button className="btn btn-primary me-2">編輯</button>
                                    <button className="btn btn-secondary me-2">停用</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>
                                    <div>
                                        <button className="btn btn-secondary me-2">履歷</button>
                                        <button className="btn btn-secondary me-2">成績單</button>
                                        <button className="btn btn-secondary">初談紀錄</button>
                                    </div>
                                </td>
                                <td>
                                <div>
                                    <button className="btn btn-primary me-2">編輯</button>
                                    <button className="btn btn-secondary me-2">停用</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>
                                    <div>
                                        <button className="btn btn-secondary me-2">履歷</button>
                                        <button className="btn btn-secondary me-2">成績單</button>
                                        <button className="btn btn-secondary">初談紀錄</button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <button className="btn btn-primary me-2">編輯</button>
                                        <button className="btn btn-secondary me-2">停用</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}
export default AdmMember;