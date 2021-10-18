import { AnyAction, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux'; // useSelector 커스텀
import todo from './todo'; // 실제 export default 이름은 reducer인데, 이름만 바꾼 것

const rootReducer = combineReducers({ todo: todo.reducer });

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };
    if (state.todo.todos.length) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore = () => {
  return configureStore({ reducer, devTools: true });
};

export const wrapper = createWrapper(initStore);
