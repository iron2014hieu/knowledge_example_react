import logo from './assets/img/group.jpg'
import styles from './App.module.css'
// import useInputNumber from './hooks/useInputNumber.js'
// import Function from './components/Function'
// import usePrevious from './hooks/usePrevious'
// import DemoContextProvider from './context'
// import useInputText from './hooks/useInputText'
// import { useReducer, useState } from 'react'
import TodoList from './components/TodoList'
import styled from 'styled-components'

import { useReducer } from 'react'

export const types = {
  ADD_TODO: "ADD_TODO",
  CLEAR_TODO: "CLEAR_TODO"
}
const H1 = styled.h1`
color: blue;
font-weight: 200;
`
const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          title: action.payload,
          id: new Date().toISOString(),
        }
      ]
    case types.CLEAR_TODO:
      return state.filter(todo => todo.id !== action.payload)

    default:
      return state;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  // const [todos, setTodos] = useState([])

  // const prevValue = usePrevious(value)

  // const clearTodo = (id) => {
  //   setTodos(todos => {
  //     return todos.filter(todo => todo.id !== id)
  //   })
  // }



  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <H1>HelloWorld</H1>

        <img src={logo} className={styles.app_logo} alt="logo" />
        <TodoList
          todos={todos}
          dispatch={dispatch} />
        {/* <Function /> */}
      </header>
    </div>
  )
}

export default App
