import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../login/AuthProvider";
import { product } from '../../components/apipath';
import SwitchBox from "../../components/switchBox";
import {switchHelper} from "../../modules/helpers";

function Admproduct() {
    const [productlist, setProductlist] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [updatedData, setUpdatedData] = useState({});
    const [newProduct, setNewProduct] = useState(null); // 用於保存新行的數據
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { token } = useAuth();
    //Read 將後端product所有產品資訊導入
    const fetchData = async () => {
        try {
            setLoading(true); // 開始加載
            const response = await axios.get(`${product}`, {headers:{token: token}});
            setProductlist(response.data.data);
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
    const startEditing = (product) => {
        setEditingProduct(product);
        setUpdatedData(product);
    };
    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setUpdatedData({
                product_id: editingProduct.product_id,
                ...updatedData,
                [name]: switchHelper(checked),
            });
        } else {
            setUpdatedData({
                product_id: editingProduct.product_id,
                ...updatedData,
                [name]: value,
            });
        }
    };
    //Update 將資訊依照product_id回傳給後端
    const saveChanges = async () => {
        try {
            await axios.put(`${product}`, updatedData, {headers:{token: token}});
            // 更新前端的 productlist 狀態
            const updatedProductList = productlist.map(product => {
                if (product.product_id === editingProduct.product_id) {
                    return updatedData;
                }
                return product;
            });
            setProductlist(updatedProductList);
            setEditingProduct(null);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Create 點擊新增按鈕時的處理函數
    const handleAddNew = () => {
        setNewProduct({
            name: '',
            parent_id: '',
            price: '',
            status: 1,
        });
    };


    // Create 處理新行輸入的變化
    const handleNewInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (['checkbox'].includes(type)){
            setNewProduct({
                ...newProduct,
                [name]: switchHelper(checked),
            });
        } else {
            setNewProduct({
                ...newProduct,
                [name]: value,
            });
        }
    };


    // Create 保存新行
    const handleSaveNew = async () => {
        try {
            // 發送 POST 請求將新產品數據保存到後端
            const response = await axios.post(`${product}`, newProduct, {headers:{token: token}});
            if (response.data.status === 200){
                // 新增成功，顯示成功通知
                alert('新增成功！');
                // 將新的產品數據添加到 productlist 狀態中
                let newData = newProduct;
                newData.product_id = response.data.data[1][0].insertId;
                setProductlist([...productlist, newData]);
                // 重置 newProduct 狀態
                setNewProduct(null);
                // 跳轉到另一個頁面（例如產品列表頁）
                //navigate('/adm/admproduct'); // 請根據您的路由結構指定正確的路徑
            } else {
                console.error('Error saving new product:', response.data.msg);
            }
            
        } catch (error) {
            console.error('Error saving new product:', error);
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
                            <th scope="col">分類</th>
                            <th scope="col">顯示</th>
                            <th scope="col">價錢</th>
                            <th scope="col">編輯</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 渲染新行 */}
                        {newProduct && (
                                <tr>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="text"
                                            name="name"
                                            value={newProduct.name}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        />
                                    </td>
                                    <td>
                                        <select
                                            className="form-select form-select-sm"
                                            name="parent_id"
                                            value={newProduct.parent_id}
                                            onChange={handleNewInputChange}
                                            required // 必填
                                        >
                                            <option value={'0'}>請選擇</option>
                                            <option value={'1'}>CPA</option>
                                            <option value={'2'}>CMA</option>
                                        </select>
                                    </td>
                                    <td>
                                        {SwitchBox('status', newProduct.status, handleNewInputChange)}
                                    </td>
                                    <td>
                                        <input
                                            className="border border-primary form-control form-control-sm"
                                            type="number"
                                            name="price"
                                            value={newProduct.price}
                                            onChange={handleNewInputChange}
                                            required // 必填
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
                                            onClick={() => setNewProduct(null)}
                                        >
                                            取消
                                        </button>
                                    </td>
                                </tr>
                            )}
                            {productlist.map((product) => (
                                <tr key={product.product_id}>
                                    <td>
                                        {editingProduct && editingProduct.product_id === product.product_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="text"
                                                name="name"
                                                value={updatedData.name}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            product.name
                                        )}
                                    </td>
                                    <td>
                                        {editingProduct && editingProduct.product_id === product.product_id ? (
                                            <select
                                                className="form-select form-select-sm"
                                                name="parent_id"
                                                value={updatedData.parent_id}
                                                onChange={handleInputChange}
                                                required // 必填
                                            >
                                                <option value={'0'}>請選擇</option>
                                                <option value={'1'}>CPA</option>
                                                <option value={'2'}>CMA</option>
                                            </select>
                                        ) : (
                                            product.parent_id
                                        )}
                                    </td>
                                    <td>
                                        {editingProduct && editingProduct.product_id === product.product_id ? (
                                            SwitchBox('status', updatedData.status, handleInputChange)
                                        ) : (
                                            product.status === 1 ? "顯示" : "不顯示" 
                                        )}
                                    </td>
                                    <td>
                                        {editingProduct && editingProduct.product_id === product.product_id ? (
                                            <input
                                                className="border border-primary form-control form-control-sm"
                                                type="number"
                                                name="price"
                                                value={updatedData.price}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            product.price
                                        )}
                                    </td>
                                    <td>
                                        {editingProduct && editingProduct.product_id === product.product_id ? (
                                            <>
                                                <button
                                                    className="btn btn-primary m-1"
                                                    onClick={saveChanges}
                                                >
                                                    保存
                                                </button>
                                                <button
                                                    className="btn btn-secondary m-1"
                                                    onClick={() => setEditingProduct(null)}
                                                >
                                                    取消
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className="btn btn-primary m-1"
                                                onClick={() => startEditing(product)}
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
export default Admproduct;