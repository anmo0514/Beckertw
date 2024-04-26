import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "../styles/navbar.scss";

const userData = localStorage.getItem('auth');
let decodeUserData;
if(userData) {
    try{
        decodeUserData = JSON.parse(userData);
    } catch (err){

    }
}

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#152046'}}>
                <div className="container-fluid">
                    <div className="cwd">
                        <NavLink className="navbar-brand logo" to="/adm/admh">
                            <img src="/logo/logo.svg" alt=""/>
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll"
                            aria-controls="navbarScroll"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul
                                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                                // style="--bs-scroll-height: 500px"
                            >
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="./home">網站管理</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="./admstaff">員工管理</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="./admteacher">老師管理</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="./admmember">學員管理</NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./admqa">Q&A管理</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./admproduct">產品管理</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./admdiscount">優惠管理</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./admpartner">合作管理</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./admmemberview">學員總表</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./admcrm">客戶關係管理</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./admreport">業績總表</Link>
                                </li>
                                
                                <Link to="/member">
                                    <li className="nav-item navicon">
                                        張兆軒
                                    </li>
                                </Link>
                                /
                                <Link to="/consult">
                                    <li className="nav-item navicon">
                                        登出
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}