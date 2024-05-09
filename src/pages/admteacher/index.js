import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../login/AuthProvider";
import { teacher } from '../../components/apipath';
import SwitchBox from "../../components/switchBox";
import {switchHelper} from "../../modules/helpers";

function AdmTeacher() {
    const [teacherlist, setTeacherlist] = useState([]);
    const [editingTeacher, setEditingTeacher] = useState(null);
    const [updatedData, setUpdatedData] = useState({});
    const [newTeacher, setNewTeacher] = useState(null); // 用於保存新行的數據
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { token } = useAuth();

    //Read 將後端 Teacher 所有員工資訊導入
    const fetchData = async () => {
        try {
            setLoading(true); // 開始加載
            const response = await axios.get(`${teacher}`, {headers:{token: token}});
            setTeacherlist(response.data);
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
    const startEditing = (teacher) => {
        setEditingTeacher(teacher);
        setUpdatedData(teacher);
    };
    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setUpdatedData({
                teacher_id: editingTeacher.teacher_id,
                ...updatedData,
                [name]: switchHelper(checked),
            });
        } else {
            setUpdatedData({
                teacher_id: editingTeacher.teacher_id,
                ...updatedData,
                [name]: value,
            });
        }
    };
    //Update 將資訊依照teacher_id回傳給後端
    const saveChanges = async () => {
        try {
            await axios.put(`${teacher}`, updatedData, {headers:{token: token}});
            // 更新前端的 teacherlist 狀態
            const updatedTeacherList = teacherlist.map(teacher => {
                if (teacher.teacher_id === editingTeacher.teacher_id) {
                    return updatedData;
                }
                return teacher;
            });
            setTeacherlist(updatedTeacherList);
            setEditingTeacher(null);
        } catch (error) {
            console.error('Error updating teacher:', error);
        }
    };

    // Create 點擊新增按鈕時的處理函數
    const handleAddNew = () => {
        setNewTeacher({
            name: '',
            email: '',
            password: '',
            subject: '',
            xtype: '',
            subject2: '',
            xtype2: '',
            status: 1,
        });
    };


    // Create 處理新行輸入的變化
    const handleNewInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setNewTeacher({
                ...newTeacher,
                [name]: switchHelper(checked),
            });
        } else {
            setNewTeacher({
                ...newTeacher,
                [name]: value,
            });
        }
    };

    // Create 保存新行
    const handleSaveNew = async () => {
        try {
            // 發送 POST 請求將新員工數據保存到後端
            const response = await axios.post(`${teacher}`, newTeacher, {headers:{token: token}});
            if (response.data.status === 200){
                // 新增成功，顯示成功通知
                alert('新增成功！');
                // 將新的員工數據添加到 teacherlist 狀態中
                let newData = newTeacher;
                newData.teacher_id = response.data.data[0].insertId;
                setTeacherlist([...teacherlist, newData]);
                // 重置 newTeacher 狀態
                setNewTeacher(null);
                // 跳轉到另一個頁面（例如員工列表頁）
                //navigate('/adm/admteacher'); // 請根據您的路由結構指定正確的路徑
            } else {
                console.error('Error saving new teacher:', response.data.msg);
            }
            
        } catch (error) {
            console.error('Error saving new teacher:', error);
        }
    };

    return (
        <>
            <div className="mt100 container">
            <div className="text-end mt-2">
                <button className="btn btn-success me-2" onClick={handleAddNew}>新增</button>
            </div>
            <div className="mt-2 container">
                <table className="table table-striped border table-responsive">
                    <thead>
                        <tr className="text-center">
                            <th>姓名</th>
                            <th>信箱</th>
                            <th>密碼</th>
                            <th>類別</th>
                            <th>分類</th>
                            <th>類別2</th>
                            <th>分類2</th>
                            <th>狀態</th>
                            <th>功能</th>
                            <th>修改</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {/* 渲染新行 */}
                        {newTeacher && (
                            <tr>
                                <td>
                                    <input
                                        className="border border-primary form-control form-control-sm"
                                        type="text"
                                        name="name"
                                        value={newTeacher.name}
                                        onChange={handleNewInputChange}
                                        required // 必填
                                    />
                                </td>
                                <td>
                                    <input
                                        className="border border-primary form-control form-control-sm"
                                        type="text"
                                        name="email"
                                        value={newTeacher.email}
                                        onChange={handleNewInputChange}
                                        required // 必填
                                    />
                                </td>
                                <td>
                                    <input
                                        className="border border-primary form-control form-control-sm"
                                        type="password"
                                        name="password"
                                        value={newTeacher.password}
                                        onChange={handleNewInputChange}
                                        required // 必填
                                    />
                                </td>
                                <td>
                                    <input
                                        className="border border-primary form-control form-control-sm"
                                        type="text"
                                        name="subject"
                                        value={newTeacher.subject}
                                        onChange={handleNewInputChange}
                                        required // 必填
                                    />
                                </td>
                                <td>
                                    <input
                                        className="border border-primary form-control form-control-sm"
                                        type="text"
                                        name="xtype"
                                        value={newTeacher.xtype}
                                        onChange={handleNewInputChange}
                                        required // 必填
                                    />
                                </td>
                                <td>
                                    <input
                                        className="border border-primary form-control form-control-sm"
                                        type="text"
                                        name="subject2"
                                        value={newTeacher.subject2}
                                        onChange={handleNewInputChange}
                                        required // 必填
                                    />
                                </td>
                                <td>
                                    <input
                                        className="border border-primary form-control form-control-sm"
                                        type="text"
                                        name="xtype2"
                                        value={newTeacher.xtype2}
                                        onChange={handleNewInputChange}
                                        required // 必填
                                    />
                                </td>
                                <td>
                                    {SwitchBox('status', newTeacher.status, handleNewInputChange)}
                                </td>
                                <td>
                                    <div>
                                        <button className="btn btn-secondary btn-sm m-1">履歷</button>
                                        <button className="btn btn-secondary btn-sm m-1">試教影片</button>
                                        <button className="btn btn-secondary btn-sm m-1">合約</button>
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
                                        onClick={() => setNewTeacher(null)}
                                    >
                                        取消
                                    </button>
                                </td>
                            </tr>
                        )}
                        {teacherlist.map((teacher) => (
                            <tr key={teacher.teacher_id}>
                                <td>
                                    {editingTeacher && editingTeacher.teacher_id === teacher.teacher_id ? (
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="name"
                                            value={updatedData.name}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        teacher.name
                                    )}
                                </td>
                                <td>
                                    {editingTeacher && editingTeacher.teacher_id === teacher.teacher_id ? (
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="email"
                                            value={updatedData.email}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        teacher.email
                                    )}
                                </td>
                                <td>
                                    {editingTeacher && (editingTeacher.teacher_id === teacher.teacher_id) ? (
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
                                    {editingTeacher && editingTeacher.teacher_id === teacher.teacher_id ? (
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="subject"
                                            value={updatedData.subject}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        teacher.subject
                                    )}
                                </td>
                                <td>
                                    {editingTeacher && editingTeacher.teacher_id === teacher.teacher_id ? (
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="xtype"
                                            value={updatedData.xtype}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        teacher.subject
                                    )}
                                </td>
                                <td>
                                    {editingTeacher && editingTeacher.teacher_id === teacher.teacher_id ? (
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="subject2"
                                            value={updatedData.subject2}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        teacher.subject2
                                    )}
                                </td>
                                <td>
                                    {editingTeacher && editingTeacher.teacher_id === teacher.teacher_id ? (
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="xtype2"
                                            value={updatedData.xtype2}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        teacher.xtype2
                                    )}
                                </td>
                                <td>
                                    {editingTeacher && editingTeacher.teacher_id === teacher.teacher_id ? (
                                        SwitchBox('status', updatedData.status, handleInputChange)
                                    ) : (
                                        teacher.status === 0 ? "停用" : "啟用"
                                    )}
                                </td>
                                <td>
                                    <div>
                                        <button className="btn btn-secondary m-1">履歷</button>
                                        <button className="btn btn-secondary m-1">試教影片</button>
                                        <button className="btn btn-secondary m-1">合約</button>
                                    </div>
                                </td>
                                <td>
                                    {editingTeacher && editingTeacher.teacher_id === teacher.teacher_id ? (
                                        <>
                                            <button
                                                className="btn btn-primary m-1"
                                                onClick={saveChanges}
                                            >
                                                保存
                                            </button>
                                            <button
                                                className="btn btn-secondary m-1"
                                                onClick={() => setEditingTeacher(null)}
                                            >
                                                取消
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            className="btn btn-primary m-1"
                                            onClick={() => startEditing(teacher)}
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
export default AdmTeacher;