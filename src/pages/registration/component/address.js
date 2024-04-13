import React from "react";
import swal from "sweetalert2";
import {ZipCodeTW} from "zipcode-tw-react"

class Address extends React.Component {

constructor(props) {
super(props);

this.state = {
    displayType: 'text',
    county: '台北市',
    district: '大安區',
    zipCode: '100',
    address: ''
}
}

handleChange = (e) =>{
this.setState({[e.target.name]: e.target.value});
}

// 變更地址資訊
handleZipCodeChange = (e) =>{
const {countyFieldName, countyValue, districtFieldName, districtValue, zipFieldName, zipValue} = e;
this.setState({
    [zipFieldName]: zipValue,
    [countyFieldName]: countyValue,
    [districtFieldName]: districtValue,
});
}

// 處理郵遞區號不存在
handleZipCodeNotExists = (e) =>{
const {countyFieldName, countyValue, districtFieldName, districtValue, zipFieldName, zipValue, origZipValue} = e;
this.setState({
    [zipFieldName]: zipValue,
    [countyFieldName]: countyValue,
    [districtFieldName]: districtValue
});

swal('郵遞區號不存在: ' + origZipValue, '', 'error');
}

render() {
let addressShow = this.state.displayType === 'display' ? 'none' : 'inline';

return (
    <>
        <div className="form-group">
            <div className="form-inline mb-2" style={{display:'flex'}}>
                <ZipCodeTW displayType={this.state.displayType}
                            countyValue={this.state.county}
                            districtValue={this.state.district}
                            zipCodeValue={this.state.zipCode}
                            handleChangeCounty={this.handleZipCodeChange}
                            handleChangeDistrict={this.handleZipCodeChange}
                            handleChangeZipCode={this.handleZipCodeChange}
                            handleBlurZipCode={this.handleZipCodeChange}
                            handleZipCodeNotExists={this.handleZipCodeNotExists}
                />
            </div>
                <input name="address" value={this.state.address}
                        className="form-control"
                        placeholder="輸入地址"
                        style={{width: '100%', display: addressShow}}
                        onChange={this.handleChange}
                />
        </div>
    </>
);
}
}

export default Address;