import React, { useContext } from 'react'
import { StoreContext } from '../app/context';
import { types } from '../app/reducer';

export default function Home() {
    const { state, dispatch } = useContext(StoreContext);

    console.log(state.isLogged)

    const handleLogged = type => () => {
        dispatch({ type: type })
    }
    return (
        <div>
            <h1>Home</h1>
            {state.isLogged
                ? <button onClick={handleLogged(types.LOG_OUT)}>Logout</button>
                : <button onClick={handleLogged(types.LOG_IN)}>Register</button>}
        </div>
    )
}
