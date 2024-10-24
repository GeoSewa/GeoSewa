import { combineReducers, } from '@reduxjs/toolkit';
import common from '../slices/common';
import loader from '../slices/loader';
const rootReducer = combineReducers({
    common,
    loader,
});
export default rootReducer;
