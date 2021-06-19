import React from 'react'
import PropsTypes from 'prop-types'
function Input({ type = 'text', onChange, value, ...props }) {
    const handleChange = e => {
        const val = e.target.value
        if (type === 'number') {
            if (/^\d+$/.test(val) || val === '') {
                onChange(val)
            }
        } else onChange(val)
    }
    return (
        <input
            type={type === 'number' ? 'text' : type}
            value={value}
            onChange={handleChange}
            {...props}
        />
    )
}
Input.PropsTypes = {
    value: PropsTypes.oneOfType([PropsTypes.string,
    PropsTypes.number]).isRequired,
    onChange: PropsTypes.func.isRequired,
    type: PropsTypes.string
}
export default Input
