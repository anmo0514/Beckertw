import Form from 'react-bootstrap/Form';

function SwitchBox(name, value, onChange, label="") {
    return (
        <Form.Check 
            type="switch"
            id={`custom-switch-${name}`}
            name={name}
            defaultChecked={value ? 1 : 0}
            onChange={onChange}
            label={label}
        />
    );
}
export default SwitchBox;