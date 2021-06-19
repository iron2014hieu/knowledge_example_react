import React, { useCallback, useContext, useRef } from 'react'
import { DemoContext } from '../context'

function Function() {
  const h2Ref = useRef(null)

  const { question } = useContext(DemoContext)

  const changeColor = useCallback(() => h2Ref.current.style.color = "red", [])
  return (
    <div>
      <h2 ref={h2Ref}>{question}</h2>
      <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default Function
