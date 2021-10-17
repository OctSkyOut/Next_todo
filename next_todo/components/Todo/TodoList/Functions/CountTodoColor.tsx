import { TodoType } from '../../../../types/todo';
import { useMemo } from 'react';

type ColorIndexType = {
  [key: string]: number;
};
export default function countTodoColors(todos: TodoType[]) {
  return useMemo(() => {
    const colors: ColorIndexType = {};
    todos.forEach((todo) => {
      colors[todo.color] =
        colors[todo.color] !== undefined ? colors[todo.color] + 1 : 1;
    });
    return colors;
  }, [todos]);
}
