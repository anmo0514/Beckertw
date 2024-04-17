import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

function Memberregister() {
    const [formData, setFormData] = useState({
        chinese_name: "",
        account: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // 在此處進行表單驗證
        if (!formData.chinese_name || !formData.account || !formData.password) {
            return Swal.fire({
                imageUrl: '/member_img/logo.svg',
                confirmButtonColor: '#224040',
                title: '糟糕！',
                color:"#224040",
                text: "資料填寫不完整",
            });
        }
    
        if (!validateEmail(formData.account)) {
            return Swal.fire({
                imageUrl: '/member_img/logo.svg',
                confirmButtonColor: '#224040',
                title: '糟糕！',
                color:"#224040",
                text: "電子郵件不符合格式",
            });
        }
    
        try {
            const response = await axios.post("http://localhost:3700/join/register", formData);
            
            if (response.data.code === "200") {
                Swal.fire({
                    imageUrl: '/member_img/logo.svg',
                    confirmButtonColor: '#224040',
                    color:"#224040",
                    text: "註冊成功",
                })
                // 如果註冊成功，導航至登入頁面
                navigate("/member/memberlogin");
                window.location.reload();
            } else {
                // 在此處處理其他錯誤情況，例如帳號已存在
                Swal.fire({
                    imageUrl: '/member_img/logo.svg',
                    confirmButtonColor: '#224040',
                    title: '糟糕！',
                    color:"#224040",
                    text: response.data.message,
                });
            }
        } catch (error) {
            console.error("Error:", error);
            // 在此處處理其他錯誤情況，例如網絡錯誤
            Swal.fire({
                imageUrl: '/member_img/logo.svg',
                confirmButtonColor: '#224040',
                title: '糟糕！',
                color:"#224040",
                text: "網路錯誤",
            });
        }
    };

    const validateEmail = (email) => {
        const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test(String(email).toLowerCase());
    };

    return (
        <form className="forms_form" onSubmit={handleSubmit}>
            <fieldset className="forms_fieldset">
                <div className="forms_field">
                    <input type="text" id="chinese_name" placeholder="Full Name" className="forms_field-input" value={formData.chinese_name} onChange={handleChange} required />
                </div>
                <div className="forms_field">
                    <input type="email" id="account" placeholder="Email" className="forms_field-input" value={formData.account} onChange={handleChange} required />
                </div>
                <div className="forms_field">
                    <input type="password" id="password" placeholder="Password" className="forms_field-input" value={formData.password} onChange={handleChange} required />
                </div>
            </fieldset>
            <div className="forms_buttons">
                <input type="submit" value="Sign up" className="forms_buttons-action"/>
            </div>
        </form>
    );
}

export default Memberregister;