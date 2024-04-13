import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/plan.scss";

function Plan() {
    const initialCards = [
        { 
            id: "far-left", 
            title: "專業方案", 
            body: `<ul className="align-items-stretch">
            <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
            <li>英文線上解題 (Academic Support)</li>
            <li className="text-danger">考程顧問諮詢輔導</li>
            <li className="text-danger">CPA Final Review 軟體</li>
            <li className="text-danger">All In One 國際就業力課程</li>
            <li className="text-danger">完整四科中文課程</li>
            <li className="text-danger">線上導讀與解題影片</li>
            <li className="text-danger">中文線上解題服務</li>
            <li className="text-danger">CPE Select 一年份執照進修課程</li>
            </ul>`,
            ugbk1: "使用效期",
            ugbk2: "24個月",
            ugbk3: "適用客群",
            ugbk4: "帶職、在學備考者並使用中文課程與線上解題服務",
            price: "120,000" 
        },
        { 
            id: "left", 
            title: "全修方案", 
            body: `<ul className="align-items-stretch">
            <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
            <li>英文線上解題 (Academic Support)</li>
            <li className="text-danger">考程顧問諮詢輔導</li>
            <li className="text-danger">CPA Final Review 軟體</li>
            <li className="text-danger">All In One 國際就業力課程</li>
            <li className="text-danger">完整四科中文課程</li>
            <li className="text-danger">線上導讀與解題影片</li>
            <li className="text-danger">中文線上解題服務</li>
            </ul>`,
            ugbk1: "使用效期",
            ugbk2: "24個月",
            ugbk3: "適用客群",
            ugbk4: "留學生、僅須重點中文課程者",
            price: "80,000" 
        },
        { 
            id: "center", 
            title: "選修方案", 
            body: `<ul className="align-items-stretch">
            <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
            <li>英文線上解題 (Academic Support)</li>
            <li className="text-danger">三次考程顧問諮詢輔導</li>
            <li className="text-danger">任選6堂中文課程</li>
            <li className="text-danger">CPA Final Review 軟體</li>
            <li className="text-danger">All In One 國際就業力課程</li>
            </ul>`,
            ugbk1: "使用效期",
            ugbk2: "24個月",
            ugbk3: "適用客群",
            ugbk4: "留學生",
            price: "46,000" 
        },
        { 
            id: "right", 
            title: "自修方案", 
            body: `<ul className="align-items-stretch">
            <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
            <li>英文線上解題 (Academic Support)</li>
            </ul>`,
            ugbk1: "使用效期",
            ugbk2: "24個月",
            ugbk3: "適用客群",
            ugbk4: "帶職、在學備考者",
            price: "120,000" 
        },
        { 
            id: "far-right", 
            title: "單科雙語", 
            body: `<ul className="align-items-stretch">
            <li>CPA Exam Review 軟體與四本教科書 (含 Flashcards)</li>
            <li>英文線上解題 (Academic Support)</li>
            <li>單科中文課程</li>
            </ul>`,
            ugbk1: "使用效期",
            ugbk2: "24個月",
            ugbk3: "適用客群",
            ugbk4: "留學生、僅須重點中文課程者",
            price: "80,000" 
        }
    ];

    const [cards, setCards] = useState(initialCards);
    const handleClick = (clickedId) => {
        const updatedCards = cards.map((card) => {
            switch (card.id) {
                case "far-left":
                    return { ...card, id: "left" };
                case "left":
                    return { ...card, id: "center" };
                case "center":
                    return { ...card, id: "right" };
                case "right":
                    return { ...card, id: "far-right" };
                case "far-right":
                    return { ...card, id: "far-left" };
                default:
                    return card;
            }
        });
        setTimeout(()=>{
            setCards(updatedCards);
        },50)
    };

    return (
        <>
            <div className="beckertitlename mt100">請確認購買方案</div>
            <div className="carousel-container">
                <div className="mt100">
                    {cards.map((card) => (
                        <div key={card.id} id={card.id} className={`col-4 carousel-card ${card.id} `} onClick={() => handleClick(card.id)}>
                            <div className="card pdbox planh">
                                <h5>{card.title}</h5>
                                <div className="card-body"dangerouslySetInnerHTML={{ __html: card.body }}></div>
                                <div className="ugbk"><h6>{card.ugbk1}</h6><span>{card.ugbk2}</span></div>
                                <div className="ugbk"><h6>{card.ugbk3}</h6><span>{card.ugbk4}</span></div>
                                <div className="cash">{card.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="nextstep">
                    <Link to="../registration/payinfo" className="btn btn-primary mb-5">下一步</Link>
                </div>
            </div>
            
        </>
    );
}

export default Plan;