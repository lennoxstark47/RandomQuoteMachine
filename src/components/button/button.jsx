import React from 'react'

const Button = ({displayName, handleClick}) => {
    return (
        <button onClick={handleClick}>{displayName}</button>
    )
}

export default Button;