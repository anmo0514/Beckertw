import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "../styles/home.scss";
import axios from "axios";


function Sharearea(props) {
    const [groupedData, setGroupedData] = useState({});

    //share區域
    useEffect(() => {
        // 一開始就顯示2024年的資料
        handleButtonClick(2023);
    }, []);
    const handleButtonClick = async (year) => {
        try {
            const cateId = getCateIdByYear(year);
            const response = await axios.get(`http://localhost:3700/home/selectShareByYear/${cateId}`);
            setGroupedData(response.data);
            setCurrentPage(1); 
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getCateIdByYear = (year) => {
        switch (year) {
            case 2020:
                return 59;
            case 2021:
                return 60;
            case 2022:
                return 69;
            case 2023:
                return 73;
            case 2024:
                return 79;
            default:
                return null;
        }
    };

    const years = [2020, 2021, 2022, 2023, 2024];
    
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;
    const totalCards = Object.values(groupedData).flat().length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = Array.isArray(groupedData) ? groupedData.slice(startIndex, endIndex) : [];
    const getPageNumbersToShow = () => {
        const maxPageNumbersToShow = 10;
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

    return (
        <>
            {/* share */}
            <div className="container">
                <div className="row">
                    <div className="title col-3">Shares</div>
                    <div className="item col-9">
                        <ul className="nav nav-tabs" id="myTab1" role="tablist">
                            {years.reverse().map((year) => (
                                <li className="nav-item" role="presentation" key={year}>
                                    <button className="nav-link" type="button" onClick={() => handleButtonClick(year)}>{year}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                        <div className="tabcontent">
                            <div className="tab-content row">
                                {currentCards.map((item, index) => (
                                    <div className="card sharecard m-2" key={`${index}-${item.art_id}`}>
                                        <div className="card-body">
                                            <h5 className="card-title" >{item.title}</h5>
                                            <div ></div>
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: item.intro }}></p>
                                            <Link to={`/share/detail/${item.art_id}`} className="btn btn-primary">more</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            <div className="pagination mb100">
                {getPageNumbersToShow().map((number) => (
                    <button className="page-link" key={number} onClick={() => setCurrentPage(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </>
    );
}
export default Sharearea;