import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../login/AuthProvider";
import { admin, member, member_page, member_count } from '../../components/apipath';
import SwitchBox from "../../components/switchBox";
import {switchHelper, dateHelper} from "../../modules/helpers";


function AdmMember() {
    const [memberlist, setMemberlist] = useState([]);
    const [editingMember, setEditingMember] = useState(null);
    const [updatedData, setUpdatedData] = useState({});
    const [newMember, setNewMember] = useState(null); // 用於保存新行的數據
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { token } = useAuth();
    const pageSize = 50;
    const memberStatus = ['請選擇', '在職者', "在學生", "全職考生", "待業中"];
    const userType = ['請選擇', 'CPA', 'CMA'];
    //Read 將後端 mem 所有學生資訊導入
    const fetchData = async (page=0) => {
        try {
            setLoading(true); // 開始加載
            const response = await axios.get(`${member_page(page, 50)}`, {headers:{token: token}});
            const responseCount = await axios.get(`${member_count}`, {headers:{token: token}});
            setMemberlist(response.data);
            await getPagePanel(responseCount.data[0].total);
            setLoading(false); // 完成加載
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const getPagePanel = async (count) => {
        let page = [];
        for(let i = 0, j = 0; i <= (count/pageSize*pageSize); i = i + pageSize){
            page.push(j);
            j = j + 1;
        }
    }

    //Update 設定編輯狀態
    const startEditing = (member) => {
        setEditingMember(member);
        setUpdatedData(member);
    };
    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setUpdatedData({
                mem_id: editingMember.mem_id,
                ...updatedData,
                [name]: switchHelper(checked),
            });
        } else {
            setUpdatedData({
                mem_id: editingMember.mem_id,
                ...updatedData,
                [name]: value,
            });
        }
    };

    //Update 將資訊依照mem_id回傳給後端
    const saveChanges = async () => {
        try {
            await axios.put(`${member}`, updatedData, {headers:{token: token}});
            // 更新前端的 memberlist 狀態
            const updatedMemberList = memberlist.map(member => {
                if (member.mem_id === editingMember.mem_id) {
                    return updatedData;
                }
                return member;
            });
            setMemberlist(updatedMemberList);
            setEditingMember(null);
        } catch (error) {
            console.error('Error updating member:', error);
        }
    };

    // Create 點擊新增按鈕時的處理函數
    const handleAddNew = () => {
        setNewMember({
            chinese_name: '',
            account: '',
            password: '',
            first_name: '',
            last_name: '',
            purchase_date: '',
            auth: '',
            comment: '',
            active_date: '',
            user_type: '',
            id_num: '',
            phone_num: '',
            email: '',
            address: '',
            status: '',
            school: '',
            major: '',
            grade: '',
            industry: '',
            company_name: '',
            info_way: '',
            createdate: '',
            pass: 0,
            postpone: 0,
            refund: 0,
            account_status: 1,
        });
    };

    // Create 處理新行輸入的變化
    const handleNewInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        
        if (['checkbox'].includes(type)){
            setNewMember({
                ...newMember,
                [name]: switchHelper(checked),
            });
        } else {
            setNewMember({
                ...newMember,
                [name]: value,
            });
        }
    };

    // Create 保存新行
    const handleSaveNew = async () => {
        try {
            // 發送 POST 請求將新學生數據保存到後端
            const response = await axios.post(`${member}`, newMember, {headers:{token: token}});
            if (response.data.status === 200){
                // 新增成功，顯示成功通知
                alert('新增成功！');
                // 將新的學生數據添加到 memberlist 狀態中
                let newData = newMember;
                newData.mem_id = response.data.data[0].insertId;
                setMemberlist([...memberlist, newData]);
                // 重置 newMember 狀態
                setNewMember(null);
                // 跳轉到另一個頁面（例如學生列表頁）
                //navigate('/adm/admmember'); // 請根據您的路由結構指定正確的路徑
            } else {
                console.error('Error saving new member:', response.data.msg);
            }
            
        } catch (error) {
            console.error('Error saving new member:', error);
        }
    };


    return (
        <>  
        <div className="mt100 container">
        <div className="container mt100">
                <div className="text-end mt-2">
                    <button className="btn btn-success me-2" onClick={handleAddNew}>新增</button>
                </div>
                <div className="mt-2">
                    <table className="table table-striped border table-responsive">
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
                            {/* 渲染新行 */}
                            {newMember && (
                                <tr>
                                    <td colSpan={7}>
                                        <div className="container">
                                            <div className="row g-1">
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>中文姓名</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="chinese_name"
                                                            value={newMember.chinese_name}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>帳號</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="account"
                                                            value={newMember.account}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>密碼</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="password"
                                                            name="password"
                                                            value={newMember.password}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">英文名字</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="first_name"
                                                            value={newMember.first_name}
                                                            onChange={handleNewInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">英文姓氏</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="last_name"
                                                            value={newMember.last_name}
                                                            onChange={handleNewInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">購買日期</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="date"
                                                            name="purchase_date"
                                                            value={dateHelper(newMember.purchase_date, "date")}
                                                            onChange={handleNewInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">權限</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="auth"
                                                            value={newMember.auth}
                                                            onChange={handleNewInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>用戶類別</span>
                                                        <select
                                                            className="form-select form-select-sm"
                                                            name="user_type"
                                                            value={newMember.user_type}
                                                            onChange={handleNewInputChange}
                                                            required
                                                        >
                                                            {userType.map((value, index)=>{
                                                                if (index === 0) return <option key={value} value={''}>{value}</option>
                                                                return <option key={value} value={value}>{value}</option>;
                                                            })}
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">證件號碼</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="id_num"
                                                            value={newMember.id_num}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>聯絡電話</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="phone_num"
                                                            value={newMember.phone_num}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>Email</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="email"
                                                            name="email"
                                                            value={newMember.email}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>用戶狀態</span>
                                                        <select
                                                            className="form-select form-select-sm"
                                                            onChange={handleNewInputChange}
                                                            name="status"
                                                            value={newMember.status}
                                                            required
                                                        >
                                                            {memberStatus.map((name, index)=>{
                                                                return (<option key={name} value={index}>{name}</option>);
                                                            })}
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>地址</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="address"
                                                            value={newMember.address}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">學校</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="school"
                                                            value={newMember.school}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">專業</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="major"
                                                            value={newMember.major}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">年級</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="grade"
                                                            value={newMember.grade}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">產業</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="industry"
                                                            value={newMember.industry}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">公司</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="company_name"
                                                            value={newMember.company_name}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">如何得知Becker</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            name="info_way"
                                                            value={newMember.info_way}
                                                            onChange={handleNewInputChange}
                                                            required // 必填
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">啟用日期</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="date"
                                                            name="active_date"
                                                            value={dateHelper(newMember.active_date, "date")}
                                                            onChange={handleNewInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="input-group input-group-sm">
                                                        <span className="input-group-text">備註</span>
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="textarea"
                                                            name="comment"
                                                            multiple
                                                            value={newMember.comment}
                                                            onChange={handleNewInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        {SwitchBox('pass', newMember.pass, handleNewInputChange, "已通過")}
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        {SwitchBox('postpone', newMember.postpone, handleNewInputChange, "展延")}
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        {SwitchBox('refund', newMember.refund, handleNewInputChange, "已退費")}
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                    <div className="input-group input-group-sm">
                                                        {SwitchBox('account_status', newMember.account_status, handleNewInputChange, "帳戶狀態")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {/* 保存和取消按鈕 */}
                                        <button
                                            className="btn btn-primary m-1"
                                            onClick={handleSaveNew}
                                        >
                                            保存
                                        </button>
                                        <button
                                            className="btn btn-secondary m-1"
                                            onClick={() => setNewMember(null)}
                                        >
                                            取消
                                        </button>
                                    </td>
                                </tr>
                            )}
                            {memberlist.map((member) => (
                                <tr key={member.mem_id}>
                                    {editingMember && editingMember.mem_id === member.mem_id ? (
                                        <>
                                            <td colSpan={7}>
                                                <div className="container">
                                                    <div className="row g-1">
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>中文姓名</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="chinese_name"
                                                                    value={updatedData.chinese_name}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>帳號</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="account"
                                                                    value={updatedData.account}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>密碼</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="password"
                                                                    name="password"
                                                                    value={updatedData.password}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">英文名字</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="first_name"
                                                                    value={updatedData.first_name}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">英文姓氏</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="last_name"
                                                                    value={updatedData.last_name}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">購買日期</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="date"
                                                                    name="purchase_date"
                                                                    value={dateHelper(updatedData.purchase_date, "date")}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">權限</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="auth"
                                                                    value={updatedData.auth}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>用戶類別</span>
                                                                <select
                                                                    className="form-select form-select-sm"
                                                                    name="user_type"
                                                                    onChange={handleNewInputChange}
                                                                    value={updatedData.user_type}
                                                                    required
                                                                >
                                                                    {userType.map((value, index)=>{
                                                                        if (index === 0) return <option key={value} value={''}>{value}</option>
                                                                        return <option key={value} value={value}>{value}</option>;
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>證件號碼</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="id_num"
                                                                    value={updatedData.id_num}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>聯絡電話</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="phone_num"
                                                                    value={updatedData.phone_num}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>Email</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="email"
                                                                    name="email"
                                                                    value={updatedData.email}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>用戶狀態</span>
                                                                <select
                                                                    className="form-select form-select-sm"
                                                                    onChange={handleInputChange}
                                                                    name="status"
                                                                    value={updatedData.status}
                                                                    required
                                                                >
                                                                    {memberStatus.map((name, index)=>{
                                                                        return (<option key={name} value={index}>{name}</option>);
                                                                    })}
                                                                </select>
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text"><i className="fa-solid fa-star text-danger me-1"></i>地址</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="address"
                                                                    value={updatedData.address}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">學校</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="school"
                                                                    value={updatedData.school}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">專業</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="major"
                                                                    value={updatedData.major}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">年級</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="grade"
                                                                    value={updatedData.grade}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">產業</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="industry"
                                                                    value={updatedData.industry}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">公司</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="company_name"
                                                                    value={updatedData.company_name}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">如何得知Becker</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="text"
                                                                    name="info_way"
                                                                    value={updatedData.info_way}
                                                                    onChange={handleInputChange}
                                                                    required // 必填
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">啟用日期</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="date"
                                                                    name="active_date"
                                                                    value={dateHelper(updatedData.active_date, "date")}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group input-group-sm">
                                                                <span className="input-group-text">備註</span>
                                                                <input
                                                                    className="form-control form-control-sm"
                                                                    type="textarea"
                                                                    name="comment"
                                                                    multiple
                                                                    value={updatedData.comment}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                {SwitchBox('pass', updatedData.pass, handleInputChange, "已通過")}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                {SwitchBox('postpone', updatedData.postpone, handleInputChange, "展延")}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                {SwitchBox('refund', updatedData.refund, handleInputChange, "已退費")}
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                                                            <div className="input-group input-group-sm">
                                                                {SwitchBox('account_status', updatedData.account_status, handleInputChange, "帳戶狀態")}
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>
                                                {member.chinese_name}
                                            </td>
                                            <td>
                                                {memberStatus[member.status]}
                                            </td>
                                            <td>
                                                {member.account}
                                            </td>
                                            <td>
                                                {member.phone_num}
                                            </td>
                                            <td>
                                                {member.email}
                                            </td>
                                            <td>
                                                {dateHelper(member.createtime, 'date')}
                                            </td>
                                            <td>
                                                <div>
                                                    <button className="btn btn-secondary btn-sm m-1">履歷</button>
                                                    <button className="btn btn-secondary btn-sm m-1">成績單</button>
                                                    <button className="btn btn-secondary btn-sm m-1">初談紀錄</button>
                                                </div>
                                            </td>
                                        </>
                                    )}
                                    <td>
                                        {editingMember && editingMember.mem_id === member.mem_id ? (
                                            <>
                                                <button
                                                    className="btn btn-primary m-1"
                                                    onClick={saveChanges}
                                                >
                                                    保存
                                                </button>
                                                <button
                                                    className="btn btn-secondary m-1"
                                                    onClick={() => setEditingMember(null)}
                                                >
                                                    取消
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className="btn btn-primary m-1"
                                                onClick={() => startEditing(member)}
                                            >
                                                編輯
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="m-2 p-2 text-end">Pager</div>
                </div>
            </div>
        </div>
        </>
    );
}
export default AdmMember;