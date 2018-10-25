import {FETCH_USER, CREATE_USER} from './types';

export const fetchUser = (email, callback) => dispatch => {
    dispatch({
        type: FETCH_USER,
        payload: email,
        callback
    });
}

export const createUser = (newUser, callback) => dispatch => {
    dispatch({
        type: CREATE_USER,
        payload: newUser,
        callback
    });
}

