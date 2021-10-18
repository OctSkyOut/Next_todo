import { GetServerSideProps, NextPage } from 'next';
import { getAllTodosApi } from '../lib/api/todos/todos';
import TodoList from '../components/Todo/TodoList/TodoList';
import { TodoType } from '../types/todo';
import { wrapper } from '../store';
import { todoActions } from '../store/todo';

const Home: NextPage = () => {
  return <TodoList />;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ req, res }) => {
    try {
      const apiRes = await getAllTodosApi();
      store.dispatch(todoActions.setTodo(apiRes.data));
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });

export default Home;
