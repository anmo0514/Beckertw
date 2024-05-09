import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import { motion } from 'framer-motion';
import './styles/form.scss';
import { Link } from 'react-router-dom';
import Purpose from './components/purpose';
import Industry from './components/industry';

function Form() {
    const [currentStep, setCurrentStep] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        ssn: '',
        location: '',
        region: '',
        occupation: '',
        industry: '',
        exp: '',
        otherInput: '',
        purpose: '',
        reasonInput: '',
        file: null,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('Name:', name, 'Value:', value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleIndustryChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            industry: value,
        }));
    };

    const handlePurposeChange = (purpose) => {
        setFormData((prevData) => ({
            ...prevData,
            purpose,
        }));
    };
    
    const handleOtherInputChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            otherInput: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            file,
        }));
    };

    // 驗證第一步
    const validateStep1 = () => {
        const errors = {};
        console.log(errors)
        if (!formData.name.trim()) {
            errors.name = '請填寫名字';
        }

        if (!formData.phone.trim()) {
            errors.phone = '請填寫手機號碼';
        } else if (!/^\d{10}$/.test(formData.phone)) { // 假设手机号是10位数字
            errors.phone = '手機號碼格式不正確';
        }

        if (!formData.email.trim()) {
            errors.email = '請填寫電子信箱';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = '電子信箱格式不正確';
        }

        if (!formData.ssn) {
            errors.ssn = '請選擇是否持有 SSN';
        }

        if (!formData.location.trim()) {
            errors.location = '請選擇所在地';
        }
        
        if (['東南亞', '歐洲'].includes(formData.location) && !formData.region.trim()) {
            errors.region = '請填寫詳細地區';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // 驗證第二步
    const validateStep2 = () => {
        const errors = {};

        if (!formData.occupation) {
            errors.occupation = '請選擇目前身份';
        }

        if (!formData.industry) {
            errors.industry = '請選擇職業類別';
        }
        if (!formData.exp) {
            errors.exp = '請選擇工作經驗';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // 驗證第三步
    const validateStep3 = () => {
        const errors = {};

        if (!formData.reasonInput.trim()) {
            errors.reasonInput = '請輸入考試緣由';
        }

        if (!formData.file) {
            errors.file = '請上傳檔案';
        }

        if (formData.industry === 'other' && !formData.otherInput.trim()) {
            errors.otherInput = '請輸入其他選項';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // 處理下一步
    const handleNext = () => {
        let isValid = false;
        console.log(isValid)
        // 根據目前步驟走驗證
        if (currentStep === 0) {
            isValid = validateStep1();
        } else if (currentStep === 1) {
            isValid = validateStep2();
        }

        // 通過就往下一步驟走
        if (isValid) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    // 上一步
    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    // 表單提交處理
    const handleSubmit = (e) => {
        e.preventDefault();

        // 驗證第三步
        if (validateStep3()) {
            // 如果验证通过，您可以在此处执行提交表单的逻辑
            console.log('表单提交成功:', formData);
            // 执行提交表单逻辑，例如发送数据到后端 API
        }
    };

    const options = ['台灣', '美國', '加拿大', '澳洲', '紐西蘭', '香港', '東南亞', '歐洲'];
    
    return (
        <>
            <section className="multi_step_form">
                <form id="msform" onSubmit={handleSubmit}>
                    <div className="title">
                        <h2>報考資格免費評估</h2>
                        <p>請完成資料以便顧問分析</p>
                    </div>

                    <ul id="progressbar">
                        <li className={currentStep >= 0 ? 'active' : ''}>基本資料</li>
                        <li className={currentStep >= 1 ? 'active' : ''}>職場經驗</li>
                        <li className={currentStep >= 2 ? 'active' : ''}>考照展望</li>
                    </ul>

                    {/* 第一步：基本資料 */}
                    {currentStep === 0 && (
                        <motion.fieldset
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4>請填寫基本資料</h4>
                            <div className="form-row just mt-5">
                                <div className="form-group col-md-8 m-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="請填寫名字"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                                </div>

                                <div className="form-group col-md-8 m-auto">
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="請填寫手機號碼"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
                                </div>

                                <div className="form-group col-md-8 m-auto">
                                    <input
                                        type="email"
                                        className="form-control mt-3"
                                        placeholder="請填寫電子信箱"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                                </div>

                                <div className="dropdown mt-3 col-md-8 m-auto">
                                    <select
                                        className="form-select"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>請選擇所在地</option>
                                        {options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {formErrors.location && <div className="text-danger">{formErrors.location}</div>}

                                    {['東南亞', '歐洲'].includes(formData.location) && (
                                        <div className="input-group mt-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="請敘述國家名稱"
                                                name="region"
                                                value={formData.region}
                                                onChange={handleChange}
                                            />
                                            {formErrors.region && <div className="text-danger">{formErrors.region}</div>}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-group mt-3 m-auto">
                                <label>是否持有 SSN (美國社會安全號碼)？</label>
                                <div className="mt-2">
                                    <input
                                        type="radio"
                                        id="yes"
                                        name="ssn"
                                        value="1"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="yes">是</label>

                                    <input
                                        type="radio"
                                        id="no"
                                        name="ssn"
                                        value="0"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="no">否</label>

                                    {formErrors.ssn && <div className="text-danger">{formErrors.ssn}</div>}
                                </div>
                            </div>

                            <div className="action-buttons mt-5 m-auto">
                                <Link to="/">
                                    <button type="button" className="action-button previous_button">
                                        取消
                                    </button>
                                </Link>

                                <button type="button" className="action-button" onClick={handleNext}>
                                    下一步
                                </button>
                            </div>
                        </motion.fieldset>
                    )}

                    {/* 第二步：職場經驗 */}
                    {currentStep === 1 && (
                        <motion.fieldset
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4>職場經驗</h4>
                            <div className="form-group mt-5 m-auto">
                                <label>目前身份</label>
                                <div className="mt-2 mb-5">
                                    <input
                                        type="radio"
                                        id="student"
                                        name="occupation"
                                        value="1"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="student">在學生</label>

                                    <input
                                        type="radio"
                                        id="incumbent"
                                        name="occupation"
                                        value="2"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="incumbent">在職者</label>

                                    <input
                                        type="radio"
                                        id="unemployed"
                                        name="occupation"
                                        value="3"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="unemployed">待業中</label>

                                    <input
                                        type="radio"
                                        id="army"
                                        name="occupation"
                                        value="4"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="army">服役中</label>

                                    {formErrors.occupation && <div className="text-danger">{formErrors.occupation}</div>}
                                </div>
                                <div className='mb-5'>
                                    <Industry onChange={handleIndustryChange} />
                                    {formErrors.industry && <div className="text-danger">{formErrors.industry}</div>}
                                </div>
                                
                                {/* 是否持有一年以上財務會計、審計、或稅務工作經驗？ */}
                                <label>是否持有一年以上財務會計、審計、或稅務工作經驗？</label>
                                <div className="mt-2 mb-5">
                                    <input
                                        type="radio"
                                        id="none"
                                        name="exp"
                                        value="1"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="none">否</label>

                                    <input
                                        type="radio"
                                        id="1"
                                        name="exp"
                                        value="2"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="1">1年以內</label>

                                    <input
                                        type="radio"
                                        id="2"
                                        name="exp"
                                        value="3"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="2">1-3年</label>

                                    <input
                                        type="radio"
                                        id="3"
                                        name="exp"
                                        value="4"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="3"> 3-5年</label>

                                    <input
                                        type="radio"
                                        id="4"
                                        name="exp"
                                        value="5"
                                        className="m-2"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="4"> 5年以上</label>

                                    {formErrors.exp && <div className="text-danger">{formErrors.exp}</div>}
                                </div>
                            </div>

                            <div className="action-buttons mb-5 m-auto">
                                <button type="button" className="action-button previous_button" onClick={handlePrevious}>
                                    上一步
                                </button>

                                <button type="button" className="action-button" onClick={handleNext}>
                                    下一步
                                </button>
                            </div>
                        </motion.fieldset>
                    )}

                    {/* 第三步：考照展望 */}
                    {currentStep === 2 && (
                        <motion.fieldset
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Purpose
                                onPurposeChange={handlePurposeChange}
                                onOtherInputChange={handleOtherInputChange}
                            />
                            {formErrors.reasonInput && <div className="text-danger">{formErrors.reasonInput}</div>}
                            <div className="form-group mt-5 m-auto">
                                <h3>您希望投入 U.S. CPA 考試準備的緣由為何？</h3>
                                <span className="text-danger">
                                    請簡述個人求學背景、職涯規劃、生活目標等，為在後續的免費30分鐘初談時間內，我們能精準地回答你的問題。
                                </span>
                                <input
                                    type="text"
                                    id="reasonInput"
                                    name="reasonInput"
                                    className="form-control mt-3"
                                    placeholder="請輸入考試緣由"
                                    value={formData.reasonInput}
                                    onChange={handleChange}
                                />
                                {formErrors.reasonInput && <div className="text-danger">{formErrors.reasonInput}</div>}
                            </div>

                            {/* 上傳檔案 */}
                            <h3 className='mt-5'>請上傳檔案</h3>
                            <h6>填畢報考資格評估資料表後，請上傳您大學 (及以上) 的成績單，我們將依您的報考目的與學分狀況，給您適合州別選擇建議。</h6>
                            <div className="input-group m-auto justify-content-center">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="upload"
                                        onChange={handleFileChange}
                                    />
                                    <label className="custom-file-label" htmlFor="upload">
                                        選擇檔案
                                    </label>
                                </div>
                                <div className="">
                                    (請上傳圖片檔 例如:.jpg, .png ,.gif 檔案)
                                    <br />
                                    (若有多個圖檔，請壓縮成一個壓縮檔案 例如: .zip, .rar, .7z, .gz)
                                    <br />
                                    {formErrors.file && <div className="text-danger">{formErrors.file}</div>}
                                </div>
                                
                            </div>

                            <div className="action-buttons mb-5 m-auto">
                                <button type="button" className="action-button previous_button" onClick={handlePrevious}>
                                    上一步
                                </button>

                                <button type="submit" className="action-button">
                                    提交
                                </button>
                            </div>
                        </motion.fieldset>
                    )}
                </form>
            </section>
        </>
    );
}

export default Form;