import React from 'react'
import PropsTypes from 'prop-types'
import { Message } from './errorMessage.style'
export default function ErrorMessage({ errors, name }) {
  const error = errors[name]
  return <Message>{error && error.message}</Message>
}

ErrorMessage.propTypes = {
  errors: PropsTypes.object,
  name: PropsTypes.string
}
