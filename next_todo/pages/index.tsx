import type { NextPage } from 'next';
import { TodoType } from '../types/todo';
import styles from '../styles/Home.module.scss';
import TodoList from './components/Todo/TodoList/TodoList';

const todos: TodoType[] = [
  { id: 1, text: 'ㅁaaaㄴㅇㄹ', color: 'red', checked: false },
  { id: 2, text: 'asd', color: 'blue', checked: false },
  { id: 3, text: 'cx', color: 'red', checked: false },
  { id: 4, text: 'baaaaa', color: 'green', checked: false },
  { id: 5, text: 'e', color: 'yellow', checked: false },
  { id: 6, text: 'faaaa', color: 'orange', checked: false },
  { id: 7, text: 'gaaaaaa', color: 'orange', checked: true },
  { id: 8, text: 'hg', color: 'red', checked: false },
];

const Home: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default Home;
