import React from 'react'
import { NavLink, Route, Switch, useParams } from 'react-router-dom'
import { paths } from '../../App'

const ProfileOne = () => <h3>ProfileOne</h3>
const ProfileTwo = () => <h3>ProfileTwo</h3>
const ProfileThree = () => {
    const param = useParams()
    console.log('useParams ', param)
    return <h3>ProfileThree</h3>
}

function Profile() {
    return (
        <div>
            <ul>
                <li><NavLink to={paths.profile1}>Profile 1</NavLink></li>
                <li><NavLink to={paths.profile2}>Profile 2</NavLink></li>
                <li><NavLink to={paths.profile + '/3/12'}>Profile 3</NavLink></li>

            </ul>
            <Switch>
                <Route path={paths.profile1} component={ProfileOne} />
                <Route path={paths.profile2} component={ProfileTwo} />
                <Route path={paths.profile3} component={ProfileThree} />
            </Switch>
        </div>
    )
}

export default Profile
