import { useState, useRef } from "react";
import { useAuth } from "../../login/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


function Login() {

    //登入
    const [myform, setMyform] = useState({
        account: "",
        password: "",
    });
    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;

        setMyform({ ...myform, [id]: val });
    };
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(myform);
        // TODO: 欄位檢查

        fetch("http://localhost:3700/join/login", {
            method: "POST",
            body: JSON.stringify(myform),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((r) => r.json())
            .then((result) => {
                if (result.success) {
                    localStorage.setItem("auth", JSON.stringify(result.data));
                    Swal.fire({
                        imageUrl: '/member_img/logo.svg',
                        confirmButtonColor: '#224040',
                        color:"#224040",
                        text: "登入成功",
                        })
                    console.log({ ...result.data });
                    setAuth({
                        ...result.data,
                        authorized: true,
                    });
                    navigate("/member");
                } else if (result.code === 401) {
                    
                    Swal.fire({
                        imageUrl: '/member_img/logo.svg',
                        confirmButtonColor: '#224040',
                        title: '糟糕！',
                        color:"#224040",
                        text: "查無此帳號，請先申請會員",
                        })
                } else {
                    
                    Swal.fire({
                        imageUrl: '/member_img/logo.svg',
                        confirmButtonColor: '#224040',
                        title: '糟糕！',
                        color:"#224040",
                        text: "帳號或密碼錯誤",
                        })
                }
            });
            
    };

    return (
        <>
            <form className="forms_form" onSubmit={handleSubmit}>
                <fieldset className="forms_fieldset">
                    <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" id="account" value={myform.account} onChange={changeFields} required autoFocus />
                    </div>
                    <div className="forms_field">
                        <input type="password" placeholder="Password" id="password" name="password" className="forms_field-input" value={myform.password}  onChange={changeFields} required />
                    </div>
                </fieldset>
                <div className="forms_buttons">
                    <button type="button" className="forms_buttons-forgot">忘記密碼?</button>
                    <input type="submit" value="Log In" className="forms_buttons-action"/>
                </div>
            </form>
        </>
    );
}

export default Login;