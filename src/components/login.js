import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadUserRoles,fieldChange} from '../store/action/login-action';

const Login = (props) => {
    const loginState = useSelector(state => state.login);
    console.log("userrole"+loginState.userRole);
    const dispatch = useDispatch();
    useEffect(
        () => dispatch(loadUserRoles()),
        []
    );
    function handleChange(event) {
        dispatch(fieldChange(event.target.name, event.target.value));
    }
    return (
        <div className="loginPage">
            <hl className="margin-top: 80px">Login</hl><br></br>
            <label className="inputdefault">UserName</label>
            <input className="inputdefault" name="username"></input><br></br>
            <label>Password</label>
            <input className="inputdefault" name="password"></input><br></br>
            <label>UserType</label>
            <select id="userRole"
                name="userRole"
                value={loginState.userRole} onChange={handleChange}>
                {
                    loginState.userRoledb.values.map((item, i) => {
                        return (
                            <option key={i} value={item.userTyprId}>{item.userType}</option>
                        )
                    })
                }
            </select><br></br>
            <button className="inputdefault">Login</button>
        </div>
    );
}
export default Login;