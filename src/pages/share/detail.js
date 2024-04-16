import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/detail.scss";
import axios from "axios";

function Detail() {
    const { artId } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3700/share/detail/${artId}`);
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
                <div className="tabcontent">
                {Object.keys(detailData).map((key, index) => (
                    <div className="mt100" key={`${index}-${key}`}>
                        <div className="w-100">
                            <h5 className="title text-center mb-5">{detailData[key].title}</h5>
                            {/* <p className="m-auto text-center" dangerouslySetInnerHTML={{ __html: detailData[key].intro }}></p> */}
                            <p className="m-auto mb-5" dangerouslySetInnerHTML={{ __html: detailData[key].content }}></p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default Detail;