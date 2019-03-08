import {
    LOGIN_FETCH,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions';

const initialState = {
    error: '',
    friends: [],
    loggedIn: false,
    waiting: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FETCH:
            return {
                ...state,
                waiting:true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn:true,
                waiting:false,
            }

        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                waiting:false,
            }

        default: return state;
    }
};

export default reducer;