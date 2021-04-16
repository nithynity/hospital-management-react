import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserRoles, fieldChange, validateLogin } from '../store/action/login-action';

const Login = (props) => {
    const loginState = useSelector(state => state.login);
    const dispatch = useDispatch();
    useEffect(
        () => dispatch(loadUserRoles()),
        []
    );
    function handleChange(event) {
        dispatch(fieldChange(event.target.name, event.target.value));
    }
    function authentication() {
        dispatch(validateLogin());
    }


    return (
        <div className="loginPage">
            <h1>Login</h1><br></br>
            <label className="inputdefault">UserName</label>
            <input className="inputdefault" name="username" onChange={handleChange}></input><br></br>
            <label>Password</label>
            <input className="inputdefault" name="password" onChange={handleChange}></input><br></br>
            <label>UserType</label>
            <select id="userRole"
                name="userRole"
                value={loginState.userRole} onChange={handleChange}>
                {
                    loginState.userRoledb.values.map((item, i) => {
                        return (
                            <option key={i} value={item.userTypeId}>{item.userType}</option>
                        )
                    })
                }
            </select><br></br>
            <button className="button" onClick={authentication}>Login</button>
        </div>
    );
}
export default Login;