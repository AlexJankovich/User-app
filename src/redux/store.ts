import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {postsReducer} from "./PostsReducer";

const RootState = combineReducers({
    posts:postsReducer
});

export type RootStateType = ReturnType<typeof RootState>

export const store = configureStore({
    reducer: RootState,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
});