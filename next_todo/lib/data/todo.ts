import { readFileSync, writeFileSync } from 'fs';
import { TodoType } from '../../types/todo';

const getTodoList = async () => {
  const todosBuffer = readFileSync('data/todos.json');
  const todosString = todosBuffer.toString();
  if (!todosString) return [];

  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

const getTodo = async ({ id }: { id: number }) => {
  const todoList = await getTodoList();
  if (todoList.some((todo) => todo.id === id)) return true;
  return false;
};

const writeTodos = async (todos: TodoType[]) => {
  writeFileSync('data/todos.json', JSON.stringify(todos));
};

export default { getTodoList, getTodo, writeTodos };
