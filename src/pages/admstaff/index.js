import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../login/AuthProvider";
import { admin } from '../../components/apipath';
import SwitchBox from "../../components/switchBox";
import {switchHelper} from "../../modules/helpers";

function Admstaff() {
    const { authorized } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        // 如果未登入，則重定向到後台登入頁面
        if (!authorized) {
            navigate('/adm/admlogin');
        }
    }, [authorized, navigate]);

    const [stafflist, setStafflist] = useState([]);
    const [editingStaff, setEditingStaff] = useState(null);
    const [updatedData, setUpdatedData] = useState({});
    const [newStaff, setNewStaff] = useState(null); // 用於保存新行的數據
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
    //Read 將後端staff所有員工資訊導入
    const fetchData = async () => {
        try {
            setLoading(true); // 開始加載
            const response = await axios.get(`${admin}`, {headers:{token: token}});
            setStafflist(response.data);
            setLoading(false); // 完成加載
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    //Update 設定編輯狀態
    const startEditing = (staff) => {
        setEditingStaff(staff);
        setUpdatedData(staff);
    };
    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setUpdatedData({
                admin_id: editingStaff.admin_id,
                ...updatedData,
                [name]: switchHelper(checked),
            });
        } else {
            setUpdatedData({
                admin_id: editingStaff.admin_id,
                ...updatedData,
                [name]: value,
            });
        }
    };
    //Update 將資訊依照admin_id回傳給後端
    const saveChanges = async () => {
        try {
            await axios.put(`${admin}`, updatedData, {headers:{token: token}});
            // 更新前端的 stafflist 狀態
            const updatedStaffList = stafflist.map(staff => {
                if (staff.admin_id === editingStaff.admin_id) {
                    return updatedData;
                }
                return staff;
            });
            setStafflist(updatedStaffList);
            setEditingStaff(null);
        } catch (error) {
            console.error('Error updating staff:', error);
        }
    };

    // Create 點擊新增按鈕時的處理函數
    const handleAddNew = () => {
        setNewStaff({
            name: '',
            account: '',
            password: '',
            position: '',
            status: 1,
        });
    };


    // Create 處理新行輸入的變化
    const handleNewInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setNewStaff({
                ...newStaff,
                [name]: switchHelper(checked),
            });
        } else {
            setNewStaff({
                ...newStaff,
                [name]: value,
            });
        }
    };


    // Create 保存新行
    const handleSaveNew = async () => {
        try {
            // 發送 POST 請求將新員工數據保存到後端
            const response = await axios.post(`${admin}`, newStaff, {headers:{token: token}});
            if (response.data.status === 200){
                // 新增成功，顯示成功通知
                alert('新增成功！');
                // 將新的員工數據添加到 stafflist 狀態中
                let newData = newStaff;
                newData.admin_id = response.data.data[0].insertId;
                setStafflist([...stafflist, newData]);
                // 重置 newStaff 狀態
                setNewStaff(null);
                // 跳轉到另一個頁面（例如員工列表頁）
                //navigate('/adm/admstaff'); // 請根據您的路由結構指定正確的路徑
            } else {
                console.error('Error saving new staff:', response.data.msg);
            }
            
        } catch (error) {
            console.error('Error saving new staff:', error);
        }
    };

    return (
        <>
            <div className="container mt100">
                <div className="text-end mt-2">
                    <button className="btn btn-success me-2" onClick={handleAddNew}>新增</button>
                </div>
                <div className="mt-2">
                    <table className="table border table-responsive table-striped">
                        <thead>
                            <tr>
                                <th>姓名</th>
                                <th>帳號</th>
                                <th>密碼</th>
                                <th>職稱</th>
                                <th>狀態</th>
                                <th>修改</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 渲染新行 */}
                            {newStaff && (
                                <tr>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="name"
                                            value={newStaff.name}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="account"
                                            value={newStaff.account}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="password"
                                            name="password"
                                            value={newStaff.password}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="position"
                                            value={newStaff.position}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        />
                                    </td>
                                    <td>
                                        {SwitchBox('status', newStaff.status, handleNewInputChange)}
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
                                            onClick={() => setNewStaff(null)}
                                        >
                                            取消
                                        </button>
                                    </td>
                                </tr>
                            )}
                            {stafflist.map((staff) => (
                                <tr key={staff.admin_id}>
                                    <td>
                                        {editingStaff && editingStaff.admin_id === staff.admin_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="text"
                                                name="name"
                                                value={updatedData.name}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            staff.name
                                        )}
                                    </td>
                                    <td>
                                        {editingStaff && editingStaff.admin_id === staff.admin_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="text"
                                                name="account"
                                                value={updatedData.account}
                                                onChange={handleInputChange}
                                                readOnly="readonly"
                                                disabled="disabled"
                                            />
                                        ) : (
                                            staff.account
                                        )}
                                    </td>
                                    <td>
                                        {editingStaff && editingStaff.admin_id === staff.admin_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="password"
                                                name="password"
                                                value={updatedData.password}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            null
                                        )}
                                    </td>
                                    <td>
                                        {editingStaff && editingStaff.admin_id === staff.admin_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="text"
                                                name="position"
                                                value={updatedData.position}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            staff.position
                                        )}
                                    </td>
                                    <td>
                                        {editingStaff && editingStaff.admin_id === staff.admin_id ? (
                                            SwitchBox('status', updatedData.status, handleInputChange)
                                        ) : (
                                            staff.status === 0 ? "停用" : "啟用"
                                        )}
                                    </td>
                                    <td>
                                        {editingStaff && editingStaff.admin_id === staff.admin_id ? (
                                            <>
                                                <button
                                                    className="btn btn-primary m-1"
                                                    onClick={saveChanges}
                                                >
                                                    保存
                                                </button>
                                                <button
                                                    className="btn btn-secondary m-1"
                                                    onClick={() => setEditingStaff(null)}
                                                >
                                                    取消
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className="btn btn-primary m-1"
                                                onClick={() => startEditing(staff)}
                                            >
                                                編輯
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    ); 
}

export default Admstaff;