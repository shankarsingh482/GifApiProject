import React  from 'react';
const  Button =props=>
(
    <button className={props.className} onClick={props.funconClick}>{props.name} </button>
)

export default Button