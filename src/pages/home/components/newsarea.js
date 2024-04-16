import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/home.scss";

function Newsarea({ groupedData }) {
    const [newsData, setNewsData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    
    const cardsPerPage = 8;

    useEffect(() => {
        newsButtonClick("公告"); // 初始加载公告分类的新闻
    }, []);

    const newsButtonClick = async (cate) => {
        try {
            const art_type = getNewsCate(cate);
            const response = await axios.get(`http://localhost:3700/home/newsselect/${art_type}`);
            setNewsData(response.data);
            setCurrentPage(1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getNewsCate = (cate) => {
        switch (cate) {
            case "公告":
                return 1;
            case "近期講座":
                return 2;
            case "課程資訊":
                return 3;
            case "公司聲明":
                return 4;
            case "人才招募":
                return 5;
            case "考生分享":
                return 6;
            case "社企部門":
                return 7;
            default:
                return null;
        }
    };

    const getPageNumbersToShow = () => {
        const maxPageNumbersToShow = 10;
        const totalCards = Object.values(newsData).flat().length;
        const totalPages = Math.ceil(totalCards / cardsPerPage);
        const middlePage = currentPage;
        const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

        let startPage = middlePage - halfMaxPageNumbersToShow;
        let endPage = middlePage + halfMaxPageNumbersToShow;

        if (startPage <= 0) {
            startPage = 1;
            endPage = Math.min(totalPages, maxPageNumbersToShow);
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentNews = Object.values(newsData).flat().slice(startIndex, endIndex);

    
    return (
        <div className="container">
            <div className="row">
                <div className="title col-3">News</div>
                <div className="nav nav-tabs">
                    {["公告", "近期講座", "課程資訊", "公司聲明", "人才招募", "考生分享", "社企部門"].map((cate) => (
                        <li className="nav-item" role="presentation" key={cate}>
                            <button className="nav-link" type="button" role="tab" aria-controls="news" aria-selected="false" onClick={() => newsButtonClick(cate)}>{cate}</button>
                        </li>
                    ))}
                </div>
                <div className="tabcontent">
                    <div className="news" id="myTabContent">
                        {currentNews.map((item, index) => (
                            <ul className="tab-pane list-group list-group-flush" key={`${index}-${item.art_id}`}>
                                <Link to={`/home/newdetail/${item.new_id}`}><li className="list-group-item">{item.title}</li></Link>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="pagination mb100">
                    {getPageNumbersToShow().map((number) => (
                        <button className="page-link" key={number} onClick={() => setCurrentPage(number)}>
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Newsarea;