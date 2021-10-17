import Axios from '../Axios';
import { TodoType } from '../../../types/todo';

export const getAllTodosApi = () => Axios.get<TodoType[]>('api/todos');
