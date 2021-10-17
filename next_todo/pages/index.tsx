import { GetServerSideProps, NextPage } from 'next';
import { getAllTodosApi } from '../lib/api/todos/todos';
import TodoList from '../components/Todo/TodoList/TodoList';
import { TodoType } from '../types/todo';

interface IProps {
  todos: TodoType[];
}

const Home: NextPage<IProps> = ({ todos }) => {
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await getAllTodosApi();
    if (res.status === 200) {
      // success
      return { props: { todos: res.data } };
    }
    // fail
    return { props: { todos: [] } };
  } catch (error) {
    console.log(error);
    return { props: { todos: [] } };
  }
};

export default Home;
