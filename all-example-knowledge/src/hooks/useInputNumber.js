import { useState } from 'react'

function useInputNumber(initialValue) {
  const [value, setValue] = useState(initialValue)
  const [isValidate, setIsValidate] = useState(false)

  const handleChange = e => {
    const val = e.target.value
    if (/^\d+$/.test(val) || val === "") {
      setIsValidate(false)
      setValue(val)
    }
    else setIsValidate(true)

  }
  const styles = {
    valid: {
      borderColor: "white"
    },
    inValid: {
      borderColor: "red"
    }
  }
  const reset = () => setValue(initialValue)
  const bind = {
    style: isValidate ? styles.inValid : styles.valid,
    value: value,
    onChange: e => handleChange(e)
  }

  return [value, reset, bind]
}

export default useInputNumber
