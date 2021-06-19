import React from 'react'
import { types } from '../App'
import useInputText from '../hooks/useInputText'


function TodoList({ todos, dispatch }) {

    const [value, reset, bind] = useInputText('')

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: types.ADD_TODO, payload: value })
        reset()
    }
    return (
        <>
            <p>Simple TodoList</p>
            <form onSubmit={onSubmit}>
                <input type="text" {...bind} />
            </form>

            <ul>
                {todos.map(({ id, title }) =>
                    <li
                        key={id}>
                        <span>{title}</span>
                        <button
                            onClick={() => dispatch({ type: types.CLEAR_TODO, payload: id })}>Delete</button>
                    </li>)}
            </ul>
        </>
    )
}

export default TodoList
