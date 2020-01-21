import React from 'react';
import './buttonStyle.scss'

const MTSButton = ({
    title,
    type,
    style,
    className,
    size,
    disabled,
    fontStyle
}) => {
    return (
        <button style={style} className={`MTSBtn ${type === "Filled" ? 'MTSFilled':type === "Ghost" ? 'MTSghoot': "MTSoutline"} ${fontStyle ==="bold" ? "MTSbold":'MTSregular' } ${className} MTS${size}`} disabled={disabled} >
            {title}
        </button>
    )
}

export default MTSButton;
