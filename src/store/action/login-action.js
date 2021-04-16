export const USER_ROLE_VALUES = "[LOGIN] load user role";
export const LOGIN_USER_ROLE_CHANGE = "[LOGIN] user role change";
export const LOGIN_USER_NAME_CHANGE = "[LOGIN] user name change";
export const LOGIN_PASSWORD_CHANGE = "[LOGIN] user password change";
export const LOGIN_IS_AUTHENTICATION = "[LOGIN] user authentication verify";

const loadUserRole = (payload) => {
    return ({
        type: USER_ROLE_VALUES,
        payload
    })
}
const setAuthentication = (payload) => {
    return ({
        type: LOGIN_IS_AUTHENTICATION,
        payload
    })
}
const userRoleChange = (payload) => {
    return ({
        type: LOGIN_USER_ROLE_CHANGE,
        payload
    })
}
const userNameChange = (payload) => {
    return ({
        type: LOGIN_USER_NAME_CHANGE,
        payload
    })
}
const passwordChange = (payload) => {
    return ({
        type: LOGIN_PASSWORD_CHANGE,
        payload
    })
}

export const fieldChange = (fieldName, value) => {
    return (dispatch, getState) => {
        if (fieldName === "userRole") {
            dispatch(userRoleChange(value));
        }
        if (fieldName === "username") {
            dispatch(userNameChange(value));
        }
        if (fieldName === "password") {
            dispatch(passwordChange(value));
        }
    }
}

export const loadUserRoles = () => {
    return (dispatch, getState) => {
        const url = "http://localhost:8080/hospitalsystem/userRole";
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const values = [{ "userId": "0", "userType": "select" }, ...data];
                const userRoleMap = {};
                values.forEach(userRole => userRoleMap[userRole.userTypeId] = userRole);
                const payload = {
                    values,
                    userRoleMap
                }
                dispatch(loadUserRole(payload));
            });

    }
}

export const validateLogin = () => {
    return (dispatch, getState) => {
        let userName = getState().login.user;
        let password = getState().login.password;
        let userRole = getState().login.userRole;
        let userdropdown = getState().login.userRoledb.values;
        const url = `http://localhost:8080/hospitalsystem/authentication/${userName}/${password}?userType=${encodeURIComponent(userRole)}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let authentication = data.authenticated;
                dispatch(setAuthentication(authentication));
            });

    }
}