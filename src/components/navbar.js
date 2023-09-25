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
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="./cpa">服務項目</NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./share">成功案例</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./video">影音專區</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./faq">FAQ</Link>
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