import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../login/AuthProvider";
import { discount } from '../../components/apipath';
import SwitchBox from "../../components/switchBox";
import {switchHelper, dateHelper} from "../../modules/helpers";

function AdmDiscount() {
    const [discountlist, setDiscountlist] = useState([]);
    const [editingDiscount, setEditingDiscount] = useState(null);
    const [updatedData, setUpdatedData] = useState({});
    const [newDiscount, setNewDiscount] = useState(null); // 用於保存新行的數據
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { token } = useAuth();
    //Read 將後端discount所有折扣資訊導入
    const fetchData = async () => {
        try {
            setLoading(true); // 開始加載
            const response = await axios.get(`${discount}`, {headers:{token: token}});
            setDiscountlist(response.data.data);
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
    const startEditing = (discount) => {
        setEditingDiscount(discount);
        setUpdatedData(discount);
    };
    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setUpdatedData({
                discount_id: editingDiscount.discount_id,
                ...updatedData,
                [name]: switchHelper(checked),
            });
        } else {
            setUpdatedData({
                discount_id: editingDiscount.discount_id,
                ...updatedData,
                [name]: value,
            });
        }
    };
    //Update 將資訊依照discount_id回傳給後端
    const saveChanges = async () => {
        try {
            await axios.put(`${discount}`, updatedData, {headers:{token: token}});
            // 更新前端的 discountlist 狀態
            const updatedDiscountList = discountlist.map(discount => {
                if (discount.discount_id === editingDiscount.discount_id) {
                    return updatedData;
                }
                return discount;
            });
            setDiscountlist(updatedDiscountList);
            setEditingDiscount(null);
        } catch (error) {
            console.error('Error updating discount:', error);
        }
    };

    // Create 點擊新增按鈕時的處理函數
    const handleAddNew = () => {
        setNewDiscount({
            name: '',
            discount: '',
            due_date: '',
            memo: '',
            status: 1,
        });
    };


    // Create 處理新行輸入的變化
    const handleNewInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setNewDiscount({
                ...newDiscount,
                [name]: switchHelper(checked),
            });
        } else {
            setNewDiscount({
                ...newDiscount,
                [name]: value,
            });
        }
    };


    // Create 保存新行
    const handleSaveNew = async () => {
        try {
            // 發送 POST 請求將新折扣數據保存到後端
            const response = await axios.post(`${discount}`, newDiscount, {headers:{token: token}});
            if (response.data.status === 200){
                // 新增成功，顯示成功通知
                alert('新增成功！');
                // 將新的折扣數據添加到 discountlist 狀態中
                let newData = newDiscount;
                newData.discount_id = response.data.data[1][0].insertId;
                setDiscountlist([...discountlist, newData]);
                // 重置 newDiscount 狀態
                setNewDiscount(null);
                // 跳轉到另一個頁面（例如折扣列表頁）
                //navigate('/adm/admdiscount'); // 請根據您的路由結構指定正確的路徑
            } else {
                console.error('Error saving new discount:', response.data.msg);
            }
            
        } catch (error) {
            console.error('Error saving new discount:', error);
        }
    };
    return (
        <>
            <div className="mt100 container">
                <div className="text-end mt-2">
                    <button className="btn btn-success me-2" onClick={handleAddNew}>新增</button>
                </div>
                <div className="mt-2">
                    <table className="table table-striped border table-responsive">
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
                            {/* 渲染新行 */}
                            {newDiscount && (
                                <tr>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="name"
                                            value={newDiscount.name}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="number"
                                            name="discount"
                                            value={newDiscount.discount}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        />
                                    </td>
                                    
                                    <td>
                                        {SwitchBox('status', newDiscount.status, handleNewInputChange)}
                                    </td>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="date"
                                            name="due_date"
                                            value={dateHelper(newDiscount.due_date, 'date')}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="textarea"
                                            name="memo"
                                            value={newDiscount.memo}
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
                                            onClick={() => setNewDiscount(null)}
                                        >
                                            取消
                                        </button>
                                    </td>
                                </tr>
                            )}
                            {discountlist.map((discount) => (
                                <tr key={discount.discount_id}>
                                    <td>
                                        {editingDiscount && editingDiscount.discount_id === discount.discount_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="text"
                                                name="name"
                                                value={updatedData.name}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            discount.name
                                        )}
                                    </td>
                                    <td>
                                        {editingDiscount && editingDiscount.discount_id === discount.discount_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="number"
                                                name="discount"
                                                value={updatedData.discount}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            discount.discount
                                        )}
                                    </td>
                                    <td>
                                        {editingDiscount && editingDiscount.discount_id === discount.discount_id ? (
                                            SwitchBox('status', updatedData.status, handleInputChange)
                                        ) : (
                                            discount.status === 1 ? "啟用" : "關閉" 
                                        )}
                                    </td>
                                    <td>
                                        {editingDiscount && editingDiscount.discount_id === discount.discount_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="date"
                                                name="due_date"
                                                value={dateHelper(updatedData.due_date, 'date')}
                                                onChange={handleInputChange}
                                                required // 必填
                                            />
                                        ) : (
                                            dateHelper(discount.due_date, 'date')
                                        )}
                                    </td>
                                    <td>
                                        {editingDiscount && editingDiscount.discount_id === discount.discount_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="textarea"
                                                name="memo"
                                                value={updatedData.memo}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            discount.memo
                                        )}
                                    </td>
                                    <td>
                                        {editingDiscount && editingDiscount.discount_id === discount.discount_id ? (
                                            <>
                                                <button
                                                    className="btn btn-primary m-1"
                                                    onClick={saveChanges}
                                                >
                                                    保存
                                                </button>
                                                <button
                                                    className="btn btn-secondary m-1"
                                                    onClick={() => setEditingDiscount(null)}
                                                >
                                                    取消
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className="btn btn-primary m-1"
                                                onClick={() => startEditing(discount)}
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
export default AdmDiscount;