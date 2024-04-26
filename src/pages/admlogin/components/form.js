import React,{ useState } from 'react';
import  { Navigate } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        try {
            result = await axios.post("http://localhost:3700/login/employee", document.getElementById("form"));
            if(result.data.status === 200) {
                localStorage.setItem('auth', result.data);
                return window.location.href="/adm/home";
            }
            else {
                document.getElementById("error").innerText = "帳號密碼錯誤";
                return false;
            }
        } catch (err) {
            document.getElementById("error").innerText = err;
        }
    }
    return (
        <form onSubmit={handleSubmit} id='form'>
            <label>帳號</label>
            <input className='form-control' name="account" type="text" onChange={(e) => setAccount(e.target.value)} value={account} />
            <label className=' mt-5'>密碼</label>
            <input className='form-control' name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <input className='btn btn-primary mt-5' type="submit" value="登入" />
            <label id='error'></label>
        </form>
    )
}

export default Form;