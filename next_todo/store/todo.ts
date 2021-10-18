import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../types/todo';

// ! 1. 액션 타입 생성
// export const SET_TODO_LIST = 'todos/SET_TODO_TEST';

// ! 2. 액션 생성자 함수 생성
// export const setTodo =
// (payload: TodoType[]) => {
//   return { type: SET_TODO_LIST, payload };
// };

// ! 4. 리덕스 상태 타입 인터페이스 생성
export interface ITodoReduxState {
  todos: TodoType[];
}

// ! 5. 초기값 집어넣기
const initState: ITodoReduxState = { todos: [] };

const todo = createSlice({
  name: 'todo',
  initialState: initState,
  reducers: {
    setTodo(state, action: PayloadAction<TodoType[]>) {
      state.todos = action.payload;
    },
  },
});

// ! 6. 리듀서 생성 (리듀서는 항상 reducer라는 함수로 내보내고 보내기 설정값은 export default로 보내야함)
// export default function reducer(state = initState, action: any) {
//   switch (action.type) {
//     case SET_TODO_LIST:
//       return { ...state, todos: action.payload };
//     default:
//       return false;
//   }
// }

// ! 3. 액션함수 객체 생성
export const todoActions = { ...todo.actions };

export default todo;
