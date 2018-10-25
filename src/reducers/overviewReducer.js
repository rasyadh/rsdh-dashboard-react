import { FETCH_OVERVIEWS, UPDATE_OVERVIEWS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_OVERVIEWS:
            return { ...state, ...action.payload };
        case UPDATE_OVERVIEWS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}