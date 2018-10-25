import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './userReducer';
import OverviewReducer from './overviewReducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: UserReducer,
    overview: OverviewReducer
});

export default rootReducer;