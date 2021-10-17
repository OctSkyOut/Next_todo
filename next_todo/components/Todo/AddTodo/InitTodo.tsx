import { TodoType } from '../../../types/todo';

export type AddTodoFormType = {
  color: TodoType['color'];
  text: string;
};

const stateInitTodo: AddTodoFormType = {
  text: '',
  color: 'red',
};

export default stateInitTodo;
