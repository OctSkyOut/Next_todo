import Axios from '../Axios';

export const patchTodoApi = (id: number) =>
  Axios.patch<boolean>(`api/todos/${id}`);

export const deleteTodoApi = (id: number) =>
  Axios.delete<boolean>(`api/todos/${id}`);
