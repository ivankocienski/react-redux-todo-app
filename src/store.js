import {configureStore} from '@reduxjs/toolkit';
import itemReducer from './todo-slice';

export default configureStore({
    reducer: { item: itemReducer }
});