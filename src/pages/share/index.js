import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/share.scss";
import { motion } from "framer-motion"
import axios from "axios";

function Share() {

    const [groupedData, setGroupedData] = useState([]);
    const [sharesEssence, setSharesEssence] = useState([]);
    const [selectedCard, setSelectedCard] = useState([]);

    useEffect(() => {
        // 一開始就顯示2024年的資料
        handleButtonClick(2023);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3700/share/sharesEssence`);
                setSharesEssence(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();

    }, []);

    const handleButtonClick = async (year) => {
        try {
            const cateId = getCateIdByYear(year);
            const response = await axios.get(`http://localhost:3700/share/selectShareByYear/${cateId}`);
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
    //more按鈕資料
    const handleMoreClick = (item) => {
        setSelectedCard(item);
    };
    return (
        <>
            {/* banner */}
            <div className="banner">
                <motion.div
                        initial={{ opacity: 0, x:-100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                        }}>
                    <img src="./shareImg/share.jpg" alt=""/>
                </motion.div>
                <div className="bannerttitle">
                    SHARE
                </div>
            </div>
            {/* share */}
            <div className="container">
                <div className="title text-center mb100">精選成功案例</div>
                <div className="tabcontent mb100">
                    <div className="container">
                        <div className="tabcontent">
                            <div className="tab-content row" id="myTab1Content">
                                {sharesEssence.map((item, index) => (
                                    <div className="card sharecard col-3 m-2" key={`${index}-${item.art_id}`}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <div ></div>
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: item.intro }}></p>
                                            <Link to={`/share/detail/${item.art_id}`} className="btn btn-primary" onClick={() => handleMoreClick(item)}>more</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title text-center mb100">歷年心得分享</div>
                {/* share */}
                <div className="container">
                        <div className="row">
                            <div className="item col-9 w-100">
                                <ul className="nav nav-tabs yearnavbar" id="myTab1" role="tablist">
                                    {years.reverse().map((year) => (
                                        <li className="nav-item" role="presentation" key={year}>
                                            <button className="nav-link" type="button" onClick={() => handleButtonClick(year)}>{year}</button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="container">
                                    <div className="tabcontent">
                                        <div className="tab-content row" id="myTab1Content">
                                            {currentCards.map((item, index) => (
                                                <div className="card sharecard col-3 m-2" key={`${index}-${item.art_id}`}>
                                                    <div className="card-body">
                                                        <h5 className="card-title" >{item.title}</h5>
                                                        <div ></div>
                                                        <p className="card-text" dangerouslySetInnerHTML={{ __html: item.intro }}></p>
                                                        <Link to={`/share/detail/${item.art_id}`} className="btn btn-primary" onClick={() => handleMoreClick(item)}>more</Link>
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
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}
export default Share;