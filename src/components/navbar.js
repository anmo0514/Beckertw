import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import "../styles/navbar.scss";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#152046'}}>
                <div className="container-fluid">
                    <div className="cwd">
                        <NavLink className="navbar-brand logo" to="/">
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
                                    <NavLink className="nav-link" aria-current="page" to="/about"
                                        >關於捷進
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="./becker">美國 Becker</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        id="navbarScrollingDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        服務項目
                                    </Link>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="navbarScrollingDropdown"
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/cpa">
                                                CPA美國會計證照
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/cma">
                                                CMA美國會計證照
                                            </Link>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <Link className="dropdown-item" to="/chservice">
                                                中文加值服務
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">成功案例</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">影音專區</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">FAQ</Link>
                                </li>
                                <li className="nav-item navicon">
                                    <i className="fa-solid fa-user"></i>
                                </li>
                                <li className="nav-item navicon">
                                    <i className="fa-solid fa-comment"></i>
                                </li>
                                <li className="nav-item navicon">
                                    <i className="fa-solid fa-headphones"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}