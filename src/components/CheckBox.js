
import React from 'react'

export const CheckBox = props => {
    return (
        <div>
       <input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.label}
    </div>
    )
}

export default CheckBox