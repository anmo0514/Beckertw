import { useState, useEffect } from "react";
import "./styles/adm.scss";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../login/AuthProvider';

function AdmMemberView() {
    
    const { authorized } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        // 如果未登入，則重定向到後台登入頁面
        if (!authorized) {
            navigate('/adm/admlogin');
        }
    }, [authorized, navigate]);

    return (
        <>
            <div className="container mt100">
                <div className="input-group input-group-sm">
                    <div className="input-group-prepend m-2">
                        <label class="input-group-text" for="inputGroupSelect01">年度</label>
                    </div>
                    <select className="custom-select col-1" id="inputGroupSelect01">
                        <option selected>請選擇</option>
                        <option value="1">2024</option>
                        <option value="2">2023</option>
                        <option value="3">2022</option>
                        <option value="4">2021</option>
                        <option value="5">2020</option>
                    </select>
                    <div className="input-group-prepend m-2">
                        <label className="input-group-text" for="inputGroupSelect01">方案</label>
                    </div>
                    <select className="custom-select col-1" id="inputGroupSelect01">
                        <option selected>請選擇</option>
                        <option value="1">菁英方案</option>
                        <option value="2">全修方案</option>
                        <option value="3">選修方案</option>
                        <option value="4">自修方案</option>
                        <option value="5">單科雙語</option>
                    </select>
                    <div className="input-group-prepend m-2">
                        <label className="input-group-text" for="inputGroupSelect02">科目</label>
                    </div>
                    <select className="custom-select col-1" id="inputGroupSelect02">
                        <option selected>請選擇</option>
                        <option value="1">CPA</option>
                        <option value="2">CMA</option>
                    </select>
                    <div className="align-middle m-2">
                        <input type="checkbox"></input>
                        <label>已通過</label>
                    </div>
                    <div className="align-middle m-2">
                        <input type="checkbox"></input>
                        <label>已退費</label>
                    </div>
                    <div className="align-middle m-2">
                        <input type="checkbox" className=""></input>
                        <label>展延</label>
                    </div>
                    <div className="text-end mt-2">
                        <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping">學員搜尋</span>
                            </div>
                            <input type="text" className="form-control" placeholder="搜尋" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
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
                                    <button className="btn btn-danger">刪除</button>
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
                                    <button className="btn btn-danger">刪除</button>
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
export default AdmMemberView;