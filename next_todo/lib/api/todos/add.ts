import Axios from '../Axios';
import { TodoType } from '../../../types/todo';

interface AddTodoListInterface {
  text: string;
  color: TodoType['color'];
}

export const AddTodoApi = (body: AddTodoListInterface) =>
  Axios.post<string | boolean>('api/todos/add', body);
