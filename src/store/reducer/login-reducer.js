import {
    USER_ROLE_VALUES,
    LOGIN_USER_ROLE_CHANGE,
    LOGIN_PASSWORD_CHANGE,
    LOGIN_USER_NAME_CHANGE,
    LOGIN_IS_AUTHENTICATION
} from '../action/login-action.js'

const initialState = {
    userRoledb: {
        values: [],
        userRoleMap: {}
    },
    userRole: 0,
    user: '',
    password: '',
    auntheticated: false
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
        case LOGIN_USER_NAME_CHANGE:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_PASSWORD_CHANGE:
            return {
                ...state,
                password: action.payload
            }
        case LOGIN_IS_AUTHENTICATION:
            return {
                ...state,
                auntheticated: action.payload
            }
        default:
            return state;
    }
}