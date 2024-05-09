import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import '../styles/form.scss';

const Industry = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        // 调用父组件传递的回调函数，将选择的值传递给父组件
        onChange(selectedValue);
    };
    
    return (
        <>
            <div className="form-group mt-3 m-auto">
                <h3>選擇職業類別</h3>
                <div className="row mt-2">
                        <div className='mt-2'>
                            <input
                                type="radio"
                                id="accounting_firm"
                                name="industry"
                                value="accounting_firm"
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="accounting_firm">會計事務所</label>
                        </div>
                        <div className='mt-2'><input
                            type="radio"
                            id="law_firm"
                            name="industry"
                            value="law_firm"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="law_firm">法律事務所</label></div>
                        <div className='mt-2'><input
                            type="radio"
                            id="banking"
                            name="industry"
                            value="banking"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="banking">銀行相關</label>
                        </div>
                        <div className='mt-2'><input
                            type="radio"
                            id="financial_consulting"
                            name="industry"
                            value="financial_consulting"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="financial_consulting">金融投顧</label>
                        </div>
                        <div className='mt-2'><input
                            type="radio"
                            id="manufacturing"
                            name="industry"
                            value="manufacturing"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="manufacturing">製造相關</label></div>
                        <div className='mt-2'><input
                            type="radio"
                            id="ecommerce"
                            name="industry"
                            value="ecommerce"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="ecommerce">電子商務</label></div>
                        <div className='mt-2'><input
                            type="radio"
                            id="biotechnology"
                            name="industry"
                            value="biotechnology"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="biotechnology">生物科技</label></div>
                        <div className='mt-2'><input
                            type="radio"
                            id="software_engineering"
                            name="industry"
                            value="software_engineering"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="software_engineering">資訊工程</label>
                        </div>
                        <div className='mt-2'>
                            <input
                                type="radio"
                                id="consulting_services"
                                name="industry"
                                value="consulting_services"
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="consulting_services">顧問服務</label>
                        </div>
                        <div>
                        <input
                            type="radio"
                            id="other"
                            name="industry"
                            value="other"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="other">其他</label>
                        </div>
                    </div>
                </div>

                {/* 根据选中的选项条件渲染输入框 */}
                {selectedOption === 'other' && (
                    <div className="row mt-2 mb-5">
                        <div className="col-md-12">
                            <input
                                type="text"
                                id="other_input"
                                name="other_input"
                                className="form-control"
                                placeholder="請輸入其他目的"
                            />
                        </div>
                    </div>
                )}
        </>
    );
}

export default Industry;