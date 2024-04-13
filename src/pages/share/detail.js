import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/detail.scss";
import { motion } from "framer-motion";
import axios from "axios";

function Detail() {
    const { artId } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3700/share/details/${artId}`);
                setDetailData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [artId]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="item col-9 w-100">
                        <ul className="nav nav-tabs yearnavbar" id="myTab1" role="tablist">
                            
                        </ul>
                        <div className="container">
                            <div className="tabcontent">
                                <div className="tab-content row" id="myTab1Content">
                                    {/* 在这里渲染详细信息 */}
                                    <h2>{detailData.title}</h2>
                                    <p>{detailData.intro}</p>
                                    {/* 其他详细信息 */}
                                </div>
                            </div>
                        </div>
                        <div className="pagination mb100">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Detail;