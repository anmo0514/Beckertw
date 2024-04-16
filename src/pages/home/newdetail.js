import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/newdetail.scss";
import axios from "axios";

function Newdetail() {
    const { new_id } = useParams();
    const [detailData, setDetailData] = useState({});
    console.log(detailData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3700/home/newdetail/${new_id}`);
                setDetailData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching new detail:', error);
            }
        };
        fetchData();
    }, [new_id]);
    
    return (
        <>
            <div className="container">
                <div className="tabcontent">
                {Object.values(detailData).map((item, index) => (
                    <div className="mt100" key={index}>
                        <div className="w-100">
                            <h5 className="title text-center mb-5">{item.title}</h5>
                            <p className="m-auto mb-5" dangerouslySetInnerHTML={{ __html: item.intro }}></p>
                            <p className="m-auto mb-5" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default Newdetail;