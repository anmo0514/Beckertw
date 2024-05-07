import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import '../styles/form.scss';

function Industry() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            <div className="form-group mt-3 m-auto">
                <h3>選擇目的</h3>
                <div className="row mt-2">
                        <div className='mt-2'>
                            <input
                                type="radio"
                                id="accounting_firm"
                                name="purpose"
                                value="accounting_firm"
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="accounting_firm">會計事務所</label>
                        </div>
                        <div className='mt-2'><input
                            type="radio"
                            id="law_firm"
                            name="purpose"
                            value="law_firm"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="law_firm">法律事務所</label></div>
                        <div className='mt-2'><input
                            type="radio"
                            id="banking"
                            name="purpose"
                            value="banking"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="banking">銀行相關</label>
                        </div>
                        <div className='mt-2'><input
                            type="radio"
                            id="financial_consulting"
                            name="purpose"
                            value="financial_consulting"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="financial_consulting">金融投顧</label>
                        </div>
                        <div className='mt-2'><input
                            type="radio"
                            id="manufacturing"
                            name="purpose"
                            value="manufacturing"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="manufacturing">製造相關</label></div>
                        <div className='mt-2'><input
                            type="radio"
                            id="ecommerce"
                            name="purpose"
                            value="ecommerce"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="ecommerce">電子商務</label></div>
                        <div className='mt-2'><input
                            type="radio"
                            id="biotechnology"
                            name="purpose"
                            value="biotechnology"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="biotechnology">生物科技</label></div>
                        <div className='mt-2'><input
                            type="radio"
                            id="software_engineering"
                            name="purpose"
                            value="software_engineering"
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="software_engineering">資訊工程</label>
                        </div>
                        <div className='mt-2'>
                            <input
                                type="radio"
                                id="consulting_services"
                                name="purpose"
                                value="consulting_services"
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="consulting_services">顧問服務</label>
                        </div>
                        <div className='mb-5'>
                        <input
                            type="radio"
                            id="other"
                            name="purpose"
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