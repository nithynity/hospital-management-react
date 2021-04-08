import {
    USER_ROLE_VALUES,
    LOGIN_USER_ROLE_CHANGE
} from '../action/login-action.js'

const initialState = {
    userRoledb: {
        value: [],
        userRoleMap: {}
    },
    userRole: 0
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case USER_ROLE_VALUES:
            return {
                ...state,
                userRoledb: action.payload
            }
        case LOGIN_USER_ROLE_CHANGE:
            return {
                ...state,
                userRole: action.payload
            }
        default:
            return state;
    }
}