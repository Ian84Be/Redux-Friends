import axios from 'axios';

export const LOGIN_FETCH = 'LOGIN_FETCH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginFetch = cred => dispatch => {
    dispatch({ type: LOGIN_FETCH });
    return axios.post('http://localhost:5000/api/login', cred)
        .then(res => {
            console.log(res.data.payload);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
        })
        .catch(err => {
            console.log(err);
            dispatch({type:LOGIN_FAIL, payload:err.message});
        });
  };