import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import '../styles/form.scss';

function Purpose() {



    // 使用 useState 控制 "其他" 狀態
    const [isOtherChecked, setIsOtherChecked] = useState(false);

    // 選 "其他" 跳input框 
    const handleOtherChange = (event) => {
        setIsOtherChecked(event.target.checked);
    };
    return (
        <>
            <div className="form-group mt-5 m-auto mb-5">
                <h4>選擇目的</h4>
                <div className="row mt-4">
                    <div className="mt-2">
                    <input
                        type="checkbox"
                        id="cpa_exam"
                        name="purpose"
                        value="cpa_exam"
                    />
                    <label htmlFor="cpa_exam">抵免台灣會計師考試</label>
                    </div>

                    <div className="mt-2">
                    <input
                        type="checkbox"
                        id="foreign_company"
                        name="purpose"
                        value="foreign_company"
                    />
                    <label htmlFor="foreign_company">進外商公司</label>
                    </div>

                    <div className="mt-2">
                    <input
                        type="checkbox"
                        id="career_competition"
                        name="purpose"
                        value="career_competition"
                    />
                    <label htmlFor="career_competition">增加職場競爭力</label>
                    </div>

                    <div className="mt-2">
                    <input
                        type="checkbox"
                        id="promotion"
                        name="purpose"
                        value="promotion"
                    />
                    <label htmlFor="promotion">升遷、加薪籌碼</label>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="mt-2">
                    <input
                        type="checkbox"
                        id="practice_demand"
                        name="purpose"
                        value="practice_demand"
                    />
                    <label htmlFor="practice_demand">執業需求</label>
                    </div>

                    <div className="mt-2">
                    <input
                        type="checkbox"
                        id="study_abroad"
                        name="purpose"
                        value="study_abroad"
                    />
                    <label htmlFor="study_abroad">計劃一年內出國留學</label>
                    </div>

                    <div className="mt-2">
                    <input
                        type="checkbox"
                        id="immigration"
                        name="purpose"
                        value="immigration"
                    />
                    <label htmlFor="immigration">計畫移民</label>
                    </div>

                    <div className="mt-2">
                    <input
                        type="checkbox"
                        id="other"
                        name="purpose"
                        value="other"
                        onChange={handleOtherChange}
                    />
                    <label htmlFor="other">其他</label>
                    </div>
                </div>

                {/* 其他輸入框 */}
                {isOtherChecked && (
                    <div className="row mt-2 justify-content-center">
                    <div className="col-md-6">
                        <input
                        type="text"
                        id="otherInput"
                        name="other_input"
                        className="form-control"
                        placeholder="請輸入其他目的"
                        />
                    </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Purpose;