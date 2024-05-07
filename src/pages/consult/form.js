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
    const [animating, setAnimating] = useState(false);

    // 表單狀況
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        ssn: '',
        occupation: '',
        industry: '',
        exp: '',
        otherInput: '',
        reasonInput: '',
        file: null,
    });

    // 表單驗證
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            file,
        }));
    };

    const validateForm = () => {
        const errors = {};

        // 验证名字
        if (!formData.name.trim()) {
            errors.name = '請填寫名字';
        }

        // 验证手机号
        if (!formData.phone.trim()) {
            errors.phone = '請填寫手機號碼';
        } else if (!/^\d+$/.test(formData.phone)) {
            errors.phone = '手機號碼格式不正確';
        }

        // 验证电子邮箱
        if (!formData.email.trim()) {
            errors.email = '請填寫電子信箱';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = '電子信箱格式不正確';
        }

        // 验证 SSN
        if (!formData.ssn) {
            errors.ssn = '請選擇是否持有 SSN';
        }

        // 验证职业类别
        if (!formData.occupation) {
            errors.occupation = '請選擇職業類別';
        }

        // 验证工作经验
        if (!formData.exp) {
            errors.exp = '請選擇工作經驗';
        }

        // 验证理由
        if (!formData.reasonInput.trim()) {
            errors.reasonInput = '請輸入考試緣由';
        }

        // 验证文件上传
        if (!formData.file) {
            errors.file = '請上傳檔案';
        }

        // 如果选择了“其他”，验证对应的输入框
        if (formData.industry === 'other' && !formData.otherInput.trim()) {
            errors.otherInput = '請輸入其他選項';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNext = () => {
        if (animating) return;

        // 在进入下一步之前进行验证
        if (validateForm()) {
            setAnimating(true);
            setCurrentStep((prevStep) => prevStep + 1);
            setAnimating(false);
        }
    };

    const handlePrevious = () => {
        if (animating) return;
        setAnimating(true);
        setCurrentStep((prevStep) => prevStep - 1);
        setAnimating(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 提交表单之前进行验证
        if (validateForm()) {
            // 如果验证通过，您可以在此处执行提交表单的逻辑
            console.log('表单提交成功:', formData);
        }
    };
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('所在地');
    const [region, setRegion] = useState('');

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setRegion(''); 
        setIsOpen(false); 
    };
    const options = ['台灣', '美國', '加拿大', '澳洲', '紐西蘭', '香港', '東南亞', '歐洲'];



    // 使用 useState 控制 "其他" 狀態
    const [isOtherChecked, setIsOtherChecked] = useState(false);

    // 選 "其他" 跳input框 
    const handleOtherChange = (event) => {
        setIsOtherChecked(event.target.checked);
    };


    
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
                                    {/* 錯誤訊息 */}
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
                                    {/* 錯誤訊息 */}
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
                                    {/* 錯誤訊息 */}
                                    {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                                </div>
                                <div className="dropdown mt-3 col-md-8 m-auto">
                                    <button
                                        className="btn btn-secondary dropdown-toggle col-md-8"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded={isOpen}
                                        onClick={toggleDropdown}
                                    >
                                        {selectedOption}
                                    </button>

                                    {isOpen && (
                                        <ul className="dropdown-menu col-md-8">
                                            {options.map((option) => (
                                                <li key={option}>
                                                    <button
                                                        className="dropdown-item"
                                                        onClick={() => handleOptionClick(option)}
                                                    >
                                                        {option}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {(selectedOption === '東南亞' || selectedOption === '歐洲') && (
                                        <div className="input-group mt-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="請敘述國家名稱"
                                                value={region}
                                                onChange={(e) => setRegion(e.target.value)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-group mt-3 m-auto">
                                是否持有 SSN (美國社會安全號碼)？
                                <div className='mt-2'>
                                    <input type="radio" id="yes" name="drone" value="1" className='m-2'/>
                                    <label for="huey">是</label>
                                    <input type="radio" id="no" name="drone" value="0" className='m-2'/>
                                    <label for="huey">否</label>
                                </div>
                            </div>
                            <div className='mt-5 m-auto'>
                                <Link>
                                <button type="button" className="action-button previous_button">
                                    取消
                                </button>
                                </Link>
                                
                                <button type="button" className="next action-button" onClick={handleNext}>
                                    下一步
                                </button>
                            </div>
                        </motion.fieldset>
                    )}
                    {/* 第2步驟 */}
                    {currentStep === 1 && (
                        <motion.fieldset
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4>職場經驗</h4>
                            <div className="form-group mt-5 m-auto">
                                職業類別
                                <div className='mt-2 mb-5'>
                                    <input type="radio" id="student" name="occupation" value="1" className='m-2'/>
                                    <label for="student">在學生</label>

                                    <input type="radio" id="incumbent" name="occupation" value="2" className='m-2'/>
                                    <label for="incumbent">在職者</label>

                                    <input type="radio" id="unemployed" name="occupation" value="3" className='m-2'/>
                                    <label for="unemployed">待業中</label>

                                    <input type="radio" id="army" name="occupation" value="4" className='m-2'/>
                                    <label for="army">服役中</label>
                                </div>
                                <Industry/>
                                是否持有一年以上財務會計、審計、或稅務工作經驗？
                                <div className='mt-2 mb-5'>
                                    <input type="radio" id="none" name="exp" value="1" className='m-2'/>
                                    <label for="none">否</label>

                                    <input type="radio" id="1" name="exp" value="2" className='m-2'/>
                                    <label for="1">1年以內</label>

                                    <input type="radio" id="2" name="exp" value="3" className='m-2'/>
                                    <label for="2">1-3年</label>

                                    <input type="radio" id="3" name="exp" value="4" className='m-2'/>
                                    <label for="3"> 3-5年</label>

                                    <input type="radio" id="4" name="exp" value="5" className='m-2'/>
                                    <label for="4"> 5年以上</label>
                                </div>
                            </div>
                            
                            <div className='mb-5 m-auto'>
                                <button type="button" className="action-button previous_button" onClick={handlePrevious}>
                                    上一步
                                </button>
                                <button type="button" className="next action-button" onClick={handleNext}>
                                    下一步
                                </button>
                            </div>
                        </motion.fieldset>
                    )}
                    {currentStep === 2 && (
                        <motion.fieldset
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Purpose/>
                                <div className="form-group mt-5 m-auto">
                                <h3>您希望投入 U.S. CPA 考試準備的緣由為何？</h3>
                                <span className='text-danger'>請簡述個人求學背景、職涯規劃、生活目標等，為在後續的免費30分鐘初談時間內、我們能精準地回答你的問題。</span>
                                <input
                                        type="text"
                                        id="reasonInput"
                                        name="reasonInput"
                                        className="form-control mb-5 mt-3"
                                        placeholder="請輸入考試緣由"
                                        />
                            </div>
                            
                            <h3>請上傳檔案</h3>
                            <h6>填畢報考資格評估資料表後，請上傳您大學 (及以上) 的成績單，我們將依您的報考目的與學分狀況，給您適合州別選擇建議。</h6>
                            
                            <div className="input-group m-auto justify-content-center">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="upload" />
                                    <label className="custom-file-label" htmlFor="upload">選擇檔案
                                    </label>
                                </div>
                                <div className=''>
                                    (請上傳圖片檔 例如:.jpg, .png ,.gif檔案)<br/>
                                    (若有多個圖檔，請壓縮成一個壓縮檔案 例如: .zip, .rar, .7z, .gz")<br/>
                                </div>
                                
                            </div>
                            <div className='mb-5 m-auto'>
                                <button type="button" className="action-button previous_button" onClick={handlePrevious}>
                                    上一步
                                </button>
                                <button type="button" className="next action-button" onClick={handleNext}>
                                    下一步
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