export const USER_ROLE_VALUES = "[LOGIN] load user role";
export const LOGIN_USER_ROLE_CHANGE = "[LOGIN] user role change";

const loadUserRole = (payload) => {
    return ({
        type: USER_ROLE_VALUES,
        payload
    })
}
const userRoleChange = (payload) => {
    return ({
        type: LOGIN_USER_ROLE_CHANGE,
        payload
    })
}

export const fieldChange = (fieldName, value) => {
    return (dispatch, getState) => {
        if (fieldName === "userRole") {
            dispatch(userRoleChange(value));
        }
    }
}

export const loadUserRoles = () => {
    return (dispatch, getState) => {
        const url = "http://localhost:8080/hospitalsystem/userRole";
        console.log("url is" + url);
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const values = [ ...data];
                const userRoleMap = {};
                values.forEach(userRole => userRoleMap[userRole.userTypeId] = userRole.userType);
                const payload = {
                    values,
                    userRoleMap
                }
                dispatch(loadUserRole(payload));
            });

    }
}

