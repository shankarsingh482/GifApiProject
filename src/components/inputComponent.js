import React  from 'react';

const Input =(props) =>
(
    <input type={props.type} className={props.className} placeholder={props.placeholder} value={props.valueInput}
    onChange={props.onChangeFunc}/>
)

export default Input;