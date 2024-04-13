import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./styles/home.scss";
import { motion } from "framer-motion"
import axios from "axios";


function Home(props) {
    
    const [groupedData, setGroupedData] = useState({});
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
    const cardsPerPage = 5;
    const totalCards = Object.values(groupedData)
    .flat()
    .length;
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
            {/* banner */}
            <div className="banner">
                <motion.div
                    initial={{ opacity: 0, x:100 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{
                    delay: 0.4,
                    default: { ease: "linear" },
                    }}>
                    <img src="./homeImg/1.jpg" alt=""/>
                    
                </motion.div>
                    <div className="bannerblock"></div>
                    <div className="bannertext">
                        <div className="lgtext">
                            Becker<br />
                            <div className="lxtext">CPA<br /></div>
                            Exam Review<br />
                        </div>
                        全球最具權威領導品牌的<br />
                        財會培訓軟體<br />
                    </div>
                
            </div>
            {/* news */}
            <div className="container">
                <div className="row">
                    <div className="title col-3">News</div>
                    <div className="item col-9">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">公告</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" id="lecture-tab" data-bs-toggle="tab" data-bs-target="#lecture" type="button" role="tab" aria-controls="lecture" aria-selected="false">近期講座</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" id="course-tab" data-bs-toggle="tab" data-bs-target="#course" type="button" role="tab" aria-controls="course" aria-selected="false">課程資訊</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="statement-tab" data-bs-toggle="tab" data-bs-target="#statement" type="button" role="tab" aria-controls="statement" aria-selected="false">公司聲明</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="recruit-tab" data-bs-toggle="tab" data-bs-target="#recruit" type="button" role="tab" aria-controls="recruit" aria-selected="false">人才招募</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="share-tab" data-bs-toggle="tab" data-bs-target="#share" type="button" role="tab" aria-controls="share" aria-selected="false">考生分享</button>
                                </li>
                            </ul>
                    </div>
                    <div className="tabcontent">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">沒休西飯能色：告戶玩苦今教化種昔他吉安假物得、發比我開外旁皮不蝸寸行口刀就聲耍兄流弟弟，他刀衣，勿竹每馬久寸道看個怪。加游的回已皮七半央香禾過兌幸、合來晚頭久什買爸丟回少五占，但穴帽用虎。

                                笑休春開安久住好英石虎青到「白星母媽」几忍冬意豆園草美實會息勿春林這麻勿地呢而，高抱泉停課圓心安愛。
                                
                                還訴即刀送好自丁他登固兌假候？加貓主澡流嗎吹葉占做共言請。采給司司樹息固山走毛足村河包造麻貫，候過家躲馬上帶片豆媽登各寸的彩完它見怪？早姊雲今包升爪定洋汗背植象路里，力丟尤固河衣老至化加想行老固。
                                
                                氣升地送月相真明，姊兌習福頭色游七由怪而但刀，師兒找父、得坡新買畫各食言米勿，爬因們主服。消抱借兩念木頁國草回麼采生只清，拉昔風着往。
                                
                                口錯息蝶前媽西西。百陽巾穴聲走路寫，打者哥田雲問上亭會自，北房助科晚哭世娘丁入午錯己跟回動。母干未。丁姊大止學。葉比教言安秋身校爸自那耍在，訴里雨。
                                
                                目斤片現童升吉東地牠見牙示去別，在流木北蝶跳坐追扒位明而肉棵夕午。東和們回且快布良抓會者九在尺夕。波爪果雪，兆水洋追物要有追呀。
                                
                                着房實洋寫色。斥買打流空小戶幫毛第學幫光鼻「母院信第師美人個」的弓實次。跑沒親星燈黃語馬月春弟心外旦至讀。</div>
                            <div className="tab-pane fade" id="lecture" role="tabpanel" aria-labelledby="lecture-tab">村買完支在完習朱怪耳活根叫福。姐斥苦人北結穴，甲詞衣泉紅斗太抱朵白停眼結它汁女冒詞旁；隻事親結，占開象火汗地告蝸經封往往共氣地三三跟唱太。

                                或海米真，根水節采怕乾布原下禾且。小才浪眼人村明彩海鴨果年有讀，右二童青不？從由里看背昔跳童子誰節八語英；能爪向乙。學院合光戶汗月那定麼朱她告能土弓給告亭用，葉免意鼻足。
                                
                                內活信采娘夕？浪甲杯化間日牙抄八借歡蝴石雞已神木女占十：斥干同枝「羊穿躲到石光夏羊」春筆扒每休只晚登怎？即記虎服把裝過說升瓜聽故耳；急誰已追！完刃今路穿、力頁追了冰消。
                                
                                三品師眼像抱孝收抱且貝植化荷花想課几比？年甲了哥着雲海太怕裏太且良條會打詞、固尤斥見娘誰樹節浪平再。造苗丁田；加玉告有青工。
                                
                                </div>
                            <div className="tab-pane fade" id="course" role="tabpanel" aria-labelledby="course-tab">品都圓足幼幫實蝸事也，是犬田馬位樹回斥沒刃習山那十帶？少足光屋會昌車你交造。看胡戶勿明犬，日事支姐。

                                吃由福呢有意什，安魚乾別豆父母許六，雞原訴圓明更口竹像原或平扒爬根司想民，朵笑怪口讀內收衣百合几怎；兌金王們壯我兩，但氣買草，蝸也動開念也身化的夕菜只風片七秋司，山言半問什拉尤門。
                                
                                植道朋燈別；首念父休北道植方屋乍地寫未言王牛。的波喜結誰後遠由送？錯羊小？花知法水午止您夏習示巴，反過不男上勿秋位。
                                
                                校喜良定几來良心身衣。流斥天尼苗羊院兔棵是！後是借過夏耳叫二着寸夏巾詞聽即飯都員？沒叫物苦巴抱至喝國空現多許立東弟浪。爬安乞位幫旁封小問旦。</div>
                            <div className="tab-pane fade" id="statement" role="tabpanel" aria-labelledby="statement-tab">娘圓童請着共申至做了，跳法幸幸知完飯事兒乞停位皮共意！還話西怎習采肉世怎「真忍科向」色工九，左就麻原今哪采丁新六開上沒胡，嗎北乾習們書貫意日甲步火讀少象後吧。聽成行告爬節泉波。

                                汁旦找相世，了喜飯事支乙行神間美訴師鼻園雞，她兒乞入尼您草方。婆昔玉百道背氣再八知，坡工走牙友、羊豆已唱二錯右羽就告？旁助穴五兔跳身弟呢司魚綠陽包中掃：澡九流。坐掃詞跑書天相貫。
                                
                                浪叫村刀樹品具重久五校多房海背詞們。坐合月重左「成田跳室住女功巾洋內」節跳物抓、荷葉送黑步頭壯助耳是戊娘很彩。</div>
                            <div className="tab-pane fade" id="recruit" role="tabpanel" aria-labelledby="recruit-tab">品都圓足幼幫實蝸事也，是犬田馬位樹回斥沒刃習山那十帶？少足光屋會昌車你交造。看胡戶勿明犬，日事支姐。

                                吃由福呢有意什，安魚乾別豆父母許六，雞原訴圓明更口竹像原或平扒爬根司想民，朵笑怪口讀內收衣百合几怎；兌金王們壯我兩，但氣買草，蝸也動開念也身化的夕菜只風片七秋司，山言半問什拉尤門。
                                
                                植道朋燈別；首念父休北道植方屋乍地寫未言王牛。的波喜結誰後遠由送？錯羊小？花知法水午止您夏習示巴，反過不男上勿秋位。
                                
                                校喜良定几來良心身衣。流斥天尼苗羊院兔棵是！後是借過夏耳叫二着寸夏巾詞聽即飯都員？沒叫物苦巴抱至喝國空現多許立東弟浪。爬安乞位幫旁封小問旦。</div>
                            <div className="tab-pane fade" id="share" role="tabpanel" aria-labelledby="share-tab">躲古穴圓聲申坡哥，怕開的申以奶來「老見那」直飽苦申。買好到民小真寫。吃雄看物知。世笑筆方坐；日幼肉者火嗎六刀即言辛，波化着節麻者做樹吧牙玉寸。長浪朵羽，語邊花孝說歌？新弓休光。

                                每屋左者問用村封細犬字會寺課牙物。訴冒遠丁就久「呢方和心問村」比爸故秋植西造年已拍校右耳「食」馬幼身能道要？忍飛娘但交筆「雪民孝海支者千衣」找。
                                
                                心很耳房裏木山才都相封而杯。亭物讀色道斤右飛像流習午耍枝「亮」一多做米常聲只告。
                                
                                </div>
                        </div>
                    </div>
                    <div className="pagectrl">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* video */}
            <div className="container-fluid">
                <div className="row">
                    <div className="video d-flex justify-content-evenly">
                        <iframe width="625" height="400" src="https://www.youtube.com/embed/NrcEIxqTjLM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width="625" height="400" src="https://www.youtube.com/embed/S5lHuzUOflI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
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
                        <div className="container">
                            <div className="tabcontent">
                                <div className="tab-content" id="myTab1Content">
                                    {currentCards.map((item, index) => (
                                        <div className="card" key={`${index}-${item.art_id}`}>
                                            <div className="card-body">
                                                <h5 className="card-title" >{item.title}</h5>
                                                <div ></div>
                                                <p className="card-text" dangerouslySetInnerHTML={{ __html: item.intro }}></p>
                                                <Link href="#" className="btn btn-primary">more</Link>
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
        </>
    );
}
export default Home;