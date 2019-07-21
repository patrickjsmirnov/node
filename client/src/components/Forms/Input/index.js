import React from 'react'
import StyledInput from '../../styled/Input'

const Input = ({ type, name, onChange, placeholder, value }) => {
    return (
        <StyledInput
            value={ value } 
            placeholder={ placeholder }
            name={ name }
            type={ type }
            onChange={ onChange } 
        />  
    )
}

export default Input;