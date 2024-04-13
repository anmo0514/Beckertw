import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/faq.scss";
import Faqcpa from "./component/faqcpa";
import Faqcma from "./component/faqcma";

function Faq() {
    // 使用状态来跟踪当前选定的组件，默认为 "cpa"
    const [selectedComponent, setSelectedComponent] = useState("cpa");

    // 点击事件处理程序，根据点击的目标更新选定的组件
    const handleComponentChange = (component) => {
        setSelectedComponent(component);
    };
    return (
        <>
            {/* banner */}
            <div className="banner">
                <img src="./faqImg/faq.jpg" alt=""/>
                <div className="bannerttitle">
                    FAQ
                </div>
            </div>
            <div className="faq">
                <div className="faqsubnav col-3">
                    <div className="faqcpa" onClick={() => handleComponentChange("cpa")}>
                        CPA<br/>
                        <div className="fs-2">常見問題</div>
                    </div>
                    <div className="faqcma" onClick={() => handleComponentChange("cma")}>
                        CMA<br/>
                        <div className="fs-2">常見問題</div>
                    </div>
                </div>
                <div className="col-9 mt-5 mb-5">
                    <div className="question">
                        {selectedComponent === "cpa" ? <Faqcpa /> : <Faqcma />}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Faq;