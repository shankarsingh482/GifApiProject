import React  from 'react';
import propTypes from 'prop-types';
const Input =(props) =>
(
    <input type={props.type} className={props.className} placeholder={props.placeholder} value={props.valueInput}
    onChange={props.onChangeFunc}/>
    
)

Input.propTypes={
    valueInput:propTypes.string,
    onChangeFunc:propTypes.func
}
export default Input;