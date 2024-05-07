import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../login/AuthProvider";
import { discount, partner } from '../../components/apipath';
import SwitchBox from "../../components/switchBox";
import {switchHelper, dateHelper} from "../../modules/helpers";

function AdmPartner() {
    const { authorized } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        // 如果未登入，則重定向到後台登入頁面
        if (!authorized) {
            navigate('/adm/admlogin');
        }
    }, [authorized, navigate]);

    const [partnerlist, setPartnerlist] = useState([]);
    const [editingPartner, setEditingPartner] = useState(null);
    const [updatedData, setUpdatedData] = useState({});
    const [newPartner, setNewPartner] = useState(null); // 用於保存新行的數據
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
    //Read 將後端partner所有合作夥伴資訊導入
    const fetchData = async () => {
        try {
            setLoading(true); // 開始加載
            const response = await axios.get(`${partner}`, {headers:{token: token}});
            setPartnerlist(response.data.data);
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
    const startEditing = (partner) => {
        setEditingPartner(partner);
        setUpdatedData(partner);
    };
    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setUpdatedData({
                partner_id: editingPartner.partner_id,
                ...updatedData,
                [name]: switchHelper(checked),
            });
        } else {
            setUpdatedData({
                partner_id: editingPartner.partner_id,
                ...updatedData,
                [name]: value,
            });
        }
    };
    //Update 將資訊依照partner_id回傳給後端
    const saveChanges = async () => {
        try {
            await axios.put(`${partner}`, updatedData, {headers:{token: token}});
            // 更新前端的 partnerlist 狀態
            const updatedPartnerList = partnerlist.map(partner => {
                if (partner.partner_id === editingPartner.partner_id) {
                    return updatedData;
                }
                return partner;
            });
            setPartnerlist(updatedPartnerList);
            setEditingPartner(null);
        } catch (error) {
            console.error('Error updating partner:', error);
        }
    };

    // Create 點擊新增按鈕時的處理函數
    const handleAddNew = () => {
        setNewPartner({
            name: '',
            discount: '',
            memo: '',
            status: 1,
        });
    };


    // Create 處理新行輸入的變化
    const handleNewInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setNewPartner({
                ...newPartner,
                [name]: switchHelper(checked),
            });
        } else {
            setNewPartner({
                ...newPartner,
                [name]: value,
            });
        }
    };


    // Create 保存新行
    const handleSaveNew = async () => {
        try {
            // 發送 POST 請求將新合作夥伴數據保存到後端
            const response = await axios.post(`${partner}`, newPartner, {headers:{token: token}});
            if (response.data.status === 200){
                // 新增成功，顯示成功通知
                alert('新增成功！');
                // 將新的合作夥伴數據添加到 partnerlist 狀態中
                let newData = newPartner;
                newData.partner_id = response.data.data[1][0].insertId;
                setPartnerlist([...partnerlist, newData]);
                // 重置 newPartner 狀態
                setNewPartner(null);
                // 跳轉到另一個頁面（例如合作夥伴列表頁）
                //navigate('/adm/admpartner'); // 請根據您的路由結構指定正確的路徑
            } else {
                console.error('Error saving new partner:', response.data.msg);
            }
            
        } catch (error) {
            console.error('Error saving new partner:', error);
        }
    };
    return (
        <>
        <div className="container mt100">
            <div className="text-end mt-2">
                <button className="btn btn-success me-2" onClick={handleAddNew}>新增</button>
            </div>
            <div className="mt-2">
            <table className="table table-striped border table-responsive">
                <thead>
                    <tr>
                        <th scope="col">姓名</th>
                        <th scope="col">折扣</th>
                        <th scope="col">狀態</th>
                        <th scope="col">備註</th>
                        <th scope="col">修改</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 渲染新行 */}
                    {newPartner && (
                    <tr>
                        <td>
                            <input
                                className="border border-primary form-control form-control-sm"
                                type="text"
                                name="name"
                                value={newPartner.name}
                                onChange={handleNewInputChange}
                                required // 必填
                            />
                        </td>
                        <td>
                            <input
                                className="border border-primary form-control form-control-sm"
                                type="number"
                                name="discount"
                                value={newPartner.discount}
                                onChange={handleNewInputChange}
                                required // 必填
                            />
                        </td>
                        <td>
                            {SwitchBox('status', newPartner.status, handleNewInputChange)}
                        </td>
                        <td>
                            <input
                                className="border border-primary form-control form-control-sm"
                                type="textarea"
                                name="memo"
                                value={newPartner.memo}
                                onChange={handleNewInputChange}
                            />
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
                                onClick={() => setNewPartner(null)}
                            >
                                取消
                            </button>
                        </td>
                    </tr>
                )}
                {partnerlist.map((partner) => (
                    <tr key={partner.partner_id}>
                        <td>
                            {editingPartner && editingPartner.partner_id === partner.partner_id ? (
                                <input
                                    className="border border-primary form-control form-control-sm"
                                    type="text"
                                    name="name"
                                    value={updatedData.name}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                partner.name
                            )}
                        </td>
                        <td>
                            {editingPartner && editingPartner.partner_id === partner.partner_id ? (
                                <input
                                    className="border border-primary form-control form-control-sm"
                                    type="number"
                                    name="discount"
                                    value={updatedData.discount}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                partner.discount
                            )}
                        </td>
                        <td>
                            {editingPartner && editingPartner.partner_id === partner.partner_id ? (
                                SwitchBox('status', updatedData.status, handleInputChange)
                            ) : (
                                partner.status === 1 ? "啟用" : "關閉" 
                            )}
                        </td>
                        <td>
                            {editingPartner && editingPartner.partner_id === partner.partner_id ? (
                                <input
                                    className="border border-primary form-control form-control-sm"
                                    type="textarea"
                                    name="memo"
                                    value={updatedData.memo}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                partner.memo
                            )}
                        </td>
                        <td>
                            {editingPartner && editingPartner.partner_id === partner.partner_id ? (
                                <>
                                    <button
                                        className="btn btn-primary m-1"
                                        onClick={saveChanges}
                                    >
                                        保存
                                    </button>
                                    <button
                                        className="btn btn-secondary m-1"
                                        onClick={() => setEditingPartner(null)}
                                    >
                                        取消
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="btn btn-primary m-1"
                                    onClick={() => startEditing(partner)}
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
export default AdmPartner;