import { useState, useEffect } from "react";
import "./styles/payinfo.scss";
import { motion } from "framer-motion"
import Address from "./component/address";


function Payinfo() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        // idIdentity: "",
        // school: "",
        // isExpressDelivery: false,
        // selectedSubjects: [],
        // hasPurchasedBecker: false,
        // howToKnowBecker: [],
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        idIdentity: "",
    });



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

    // 更新表單數據
    setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
    }));

    // 檢查必填欄位
    // if (!value && name !== "isExpressDelivery" && name !== "selectedSubjects" && name !== "hasPurchasedBecker" && name !== "howToKnowBecker") {
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         [name]: `此欄位是必填`,
    //     }));
    // } else {
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         [name]: "",
    //     }));
    // }
    };

    const validateTWID = (id) => {
        const letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
        const regex = /^[A-Z][12]\d{8}$/;

        if (!regex.test(id)) {
            return false; // 格式不符合
        }

        const firstLetter = id.charAt(0);
        const index = letters.indexOf(firstLetter) + 10;
        const n1 = Math.floor(index / 10);
        const n2 = index % 10;

        const numbers = [n1, n2, ...id.substr(1).split('').map(Number)];
        const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i] * weights[i];
        }

        return sum % 10 === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formValid = true;
        const newErrors = { ...errors };

        // 檢查必填欄位
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = `此欄位是必填欄位`;
                formValid = false;
            } else {
                newErrors[key] = "";
            }
        });

        // 電子郵件驗證
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = "請輸入正確的信箱";
            formValid = false;
        }

        // 電話號碼驗證
        const phoneRegex = /^(\+?886\-?|0)?9\d{8}$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            newErrors.phone = "請輸入正確的電話號碼";
            formValid = false;
        }

        // 身分證字號驗證
        const isValidTWID = validateTWID(formData.idIdentity);
        if (formData.idIdentity && !isValidTWID) {
            newErrors.idIdentity = "請輸入正確的身分證號碼";
            formValid = false;
        }
        
        // 更新錯誤狀態
        setErrors(newErrors);

        if (formValid) {
            // 表單驗證通過後的操作
            console.log("Form submitted successfully");
            window.location.href = "./pay";

        } else {
            console.log("Form has errors");

            // 找到第一個出現錯誤的欄位
            const firstErrorField = Object.keys(newErrors)[0];
            const errorFieldElement = document.getElementById(firstErrorField);

            // 如果找到錯誤欄位，則滾動到該欄位
            if (errorFieldElement) {
                const yOffset = errorFieldElement.offsetTop; 
                window.scrollTo({ top: yOffset, behavior: 'smooth' }); 
            }
            
        }
    };

    return (
        <>
            {/* <!-- banner --> */}
            {/* <div className="banner">
                <motion.div
                        initial={{ opacity: 0, x:-100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{
                        delay: 0.4,
                        default: { ease: "linear" },
                        }}>
                    <img src="./serviceImg/servicebanner.jpg" alt=""/>
                </motion.div>
            </div> */}
            {/* <!-- USCPA 方案線上報名表 --> */}
            
            <div className="container mb100 mt100">
                <div className="beckertitlename mt100 mb-5">請填購買資料</div>
                <div className="card w-75 p-5 m-auto">
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-4">
                            <label htmlFor="name" className="mb-2">中文全名</label>
                            <input type="text" className={`form-control ${errors.name && "is-invalid"}`} id="name" name="name" value={formData.name} onChange={handleChange} />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        
                                <small id="nameHelp" className="form-text text-muted">例：王大明</small>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">英文拼音全名</label><br/>
                                <div className="row">
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="First name"/>
                                    </div>
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name"/>
                                    </div>
                                </div>
                                <small id="enameHelp" className="form-text text-muted">同護照上顯示之英文名，例：Da-Ming, Wang</small>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="phone" className="mb-2">聯絡電話</label>
                                <input type="tel" className={`form-control ${errors.phone && "is-invalid"}`} id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="mb-2">電子郵件</label>
                                <input type="email" className={`form-control ${errors.email && "is-invalid"}`} id="email" name="email" value={formData.email} onChange={handleChange} />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                <small id="emailHelp" className="form-text text-muted">將依此註冊您的 Becker 教材帳號。若您曾經購買或試用過任何 Becker 產品，請提供「尚未用來註冊過 Becker」的電子郵件住址</small>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="idIdentity" className="mb-2">身分證字號</label>
                                <input type="text" className={`form-control ${errors.idIdentity && "is-invalid"}`} id="idIdentity" name="idIdentity" value={formData.idIdentity} onChange={handleChange}/>
                                {errors.idIdentity && <div className="invalid-feedback">{errors.idIdentity}</div>}
                                <small id="idHelp" className="form-text text-muted">將依此註冊您的中文「雲端導讀與解題」觀看帳號</small>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">所屬(或畢業)學校與科系</label>
                                <input type="text" className="form-control" id="school"/>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">目前職業</label>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="incumbent" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="incumbent">在職者</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="student" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="student">在學生</label>
                                    <input type="radio" id="candidates" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="candidates">全職考生</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="unemployed" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="unemployed">待業中</label>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">是否需快遞寄送紙本教科書？(或可自取)</label>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="book1" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customRadioInline1">是，需快遞寄送</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="book2" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customRadioInline2">否，我要自取</label>
                                </div>
                                <small id="bookHelp" className="form-text text-muted">快遞計費方式：單箱最多可裝 2 科書籍，每箱快遞費 TWD 100 元。</small>
                            </div>
                            <label  className="mb-2">(承上題) 選擇「是，需要快遞寄送」者，近期欲領取 (快遞收取) 哪些科目？請註明。</label>
                            <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="aud"/>
                                <label className="custom-control-label m-2" for="aud">AUD</label>
                                
                                <input type="checkbox" className="custom-control-input" id="far"/>
                                <label className="custom-control-label m-2" for="far">FAR</label>
                                
                                <input type="checkbox" className="custom-control-input" id="reg"/>
                                <label className="custom-control-label m-2" for="reg">REG</label>
                                
                                <input type="checkbox" className="custom-control-input" id="isc"/>
                                <label className="custom-control-label m-2" for="isc">ISC</label>
                                
                                <input type="checkbox" className="custom-control-input" id="tcp"/>
                                <label className="custom-control-label m-2" for="tcp">TCP</label>
                                
                                <input type="checkbox" className="custom-control-input" id="bar"/>
                                <label className="custom-control-label m-2" for="bar">BAR</label>
                            </div>
                            <small id="majorHelp" className="form-text text-muted ">建議您先領取「近期會準備的科目」。其他科目則待未來開始準備時，再與我們聯繫領取當下最更新的版本。</small>
                            <div className="form-group mb-4 mt-4">
                                <label  className="mb-2">發票/紙本教科書郵寄地址</label>
                                <Address/>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">發票開立統一編號與抬頭</label>
                                <input type="text" className="form-control mb-2" id="invoice" placeholder="統一編號"/>
                                <input type="text" className="form-control" id="invoice2" placeholder="公司抬頭"/>
                                <small id="invoiceHelp" className="form-text text-muted">留白則為一般二聯式發票</small>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">選擇「專業/全修/選修」方案者，欲參加中文課的方式：</label><br/>
                                <small id="invoiceHelp" className="form-text text-muted">依照個人需求，可複選。</small>
                                <div className="custom-control custom-checkbox mb-2">
                                    <input type="checkbox" className="custom-control-input" id="onside"/>
                                    <label className="custom-control-label m-2" for="onside">現場面授</label>
                                    
                                    <input type="checkbox" className="custom-control-input" id="online"/>
                                    <label className="custom-control-label m-2" for="online">雲端教室 (線上看課)</label>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label  className="mb-2">是否買曾向 Becker Taiwan 購買過教材？</label>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="bought" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customRadioInline1">是</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="nbought" name="customRadioInline1" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customRadioInline2">否</label>
                                </div>
                            </div>
                            <label  className="mb-2">您是從何處得知 Becker Taiwan (捷進)</label>
                            <div className="custom-control custom-checkbox mb-2">
                                <input type="checkbox" className="custom-control-input" id="google"/>
                                <label className="custom-control-label m-2" for="google">Google</label>
                                
                                <input type="checkbox" className="custom-control-input" id="facebook"/>
                                <label className="custom-control-label m-2" for="facebook">Facebook</label>
                                
                                <input type="checkbox" className="custom-control-input" id="instagram"/>
                                <label className="custom-control-label m-2" for="instagram">Instagram</label>
                                
                                <input type="checkbox" className="custom-control-input" id="line"/>
                                <label className="custom-control-label m-2" for="line">LINE</label>
                                
                                <input type="checkbox" className="custom-control-input" id="edm"/>
                                <label className="custom-control-label m-2" for="edm">EDM</label>
                                
                                <input type="checkbox" className="custom-control-input" id="friend"/>
                                <label className="custom-control-label m-2" for="friend">親友同事介紹</label>
                                
                                <input type="checkbox" className="custom-control-input" id="lecture"/>
                                <label className="custom-control-label m-2" for="lecture">校園講座</label>
                                
                                <input type="checkbox" className="custom-control-input" id="accounting"/>
                                <label className="custom-control-label m-2" for="accounting">事務所內部宣傳</label>
                                
                                <input type="checkbox" className="custom-control-input" id="mrt"/>
                                <label className="custom-control-label m-2" for="mrt">捷運廣告</label>
                                
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>送出</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payinfo;