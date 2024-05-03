import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useAuth } from "../pages/login/AuthProvider";
import "../styles/navbar.scss";

export default function AdmNavbar() {

    const userData = localStorage.getItem('auth');
    let decodeUserData;
    if(userData) {
    try{
        decodeUserData = JSON.parse(userData);
    } catch (err){

    }
    }
    const { authorized, name, logout } = useAuth();
    
    return (
        <>
            <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#152046' }}>
                <div className="container-fluid cwd">
                    <NavLink className="navbar-brand logo" to="/adm/admh">
                        <img src="/logo/logo.svg" alt="logo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto">
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle className="nav-link" id="dropdown-website-management">
                                    網站管理
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="./admnews">最新消息</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="./admvideo">影片專區</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="./admshare">分享專區</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle className="nav-link" id="dropdown-website-management">
                                    人員管理
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="./admstaff">員工管理</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="./admteacher">老師管理</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="./admmember">學員管理</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle className="nav-link" id="dropdown-website-management">
                                    產品管理
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="./admproduct">方案管理</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="./admdiscount">優惠管理</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="./admpartner">合作管理</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Item>
                                <NavLink className="nav-link" to="./admqa">Q&A管理</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link" to="./admmemberview">學員總表</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link" to="./admreport">業績總表</NavLink>
                            </Nav.Item>
                            <li className="nav-item navicon">
                            {authorized ? (
                                <div className="text-white">
                                    {name}
                                    <div className="text-white logouttext" onClick={() => {logout(); }}>
                                        登出
                                    </div>
                                </div>
                            ) : (
                                null
                            )}
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>       
        </>
    );
}