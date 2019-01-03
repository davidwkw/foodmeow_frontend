
import React from 'react'

export const CheckBox = props => {
    return (
        <div>
            <input key={props.id} onClick={props.handleCheckChildElement} type="radio" checked={props.isChecked} value={props.value} /> {props.label}
        </div>
    )
}

export default CheckBox