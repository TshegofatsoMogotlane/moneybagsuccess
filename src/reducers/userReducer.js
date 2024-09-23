import { USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST } from "../types/userTypes";

export const userSignupReducer = (state={}, action)=>{
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {loading:true}
        case USER_SIGNUP_FAIL:
            return {loading:false, error:action.payload}
        case USER_SIGNUP_SUCCESS:
            return {loading:false, userInfo:action.payload}
        default:
            return state;
    }
}