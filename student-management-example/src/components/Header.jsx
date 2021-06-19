import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { paths } from '../App'

export default function Header() {
    const history = useHistory()
    /*
        1. redirect 1 new pages
        2. go a page you just back.( home --> u back profile ->  home)
        3. back one page trước đó
        history.location only run 1 times when component render
    */
    // const location = useLocation()// checking when you next page
    // useEffect(() => {
    //     console.log('Location ', location)
    // }, [location]);
    // const onRedirect = () => history.push('/profile')
    // const goBack = () => history.goBack()
    const goForward = () => history.goForward()
    return (
        <div>
            <ul>
                <li><NavLink to={paths.home}>Home</NavLink></li>
                <li><NavLink to={paths.register}>Register</NavLink></li>
                <li><NavLink to={paths.student + '?page=1&limit=3'}>Student</NavLink></li>
                <li><NavLink to={paths.profile}>Profile</NavLink></li>
                <button onClick={goForward}>Redirect Profile</button>
            </ul>
        </div>
    )
}
