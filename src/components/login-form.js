import React from 'react';

const loginForm = () => {
    return (
        <div className="loginPage">
            <hl className="margin-top: 80px">Login</hl><br></br>
            <label className="inputdefault">UserName</label>
            <input className="inputdefault" name="username"></input><br></br>
            <label>Password</label>
            <input className="inputdefault" name="password"></input><br></br>
            <label>UserType</label>
            <input className="inputdefault" name="userTye"></input><br></br>
            <button className="inputdefault">Login</button>
        </div>
    );
}

export default loginForm;