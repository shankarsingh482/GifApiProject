import React  from 'react';
import propTypes from 'prop-types';

const  Button =props=>
(
    <button className={props.className} onClick={props.funconClick}>{props.name} </button>
)
Button.prototypes=
{
    name:propTypes.string,
    funconClick:propTypes.func,
    className:propTypes.string
}
export default Button