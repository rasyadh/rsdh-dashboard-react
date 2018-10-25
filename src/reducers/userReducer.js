import { FETCH_USER, CREATE_USER } from '../actions/types';

let initialState = {
    'rasyadhabdulaziz@gmail.com': {
        name: 'Rasyadh Abdul Aziz',
        email: 'rasyadhabdulaziz@gmail.com',
        password: '18081996'
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            if (Object.keys(state).includes(action.payload)) {
                action.callback(state[action.payload]);
            }
            else {
                action.callback(false);
            }
            return { ...state };
        case CREATE_USER:
            if (Object.keys(state).includes(action.payload.email)) {
                action.callback(false);
                return { ...state }
            }
            else {
                action.callback(true);
                return { ...state, [action.payload.email]: action.payload };
            }
        default:
            return state;
    }
}