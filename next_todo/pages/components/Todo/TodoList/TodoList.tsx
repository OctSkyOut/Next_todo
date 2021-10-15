import React, { useMemo } from 'react';
import { TodoType } from '../../../../types/todo';
import countTodoColors from './Functions/CountTodoColor';
import styles from '../../../../styles/components/Todo/TodoList/TodoList.module.scss';

interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  const todoColors = countTodoColors(todos);
  return (
    <div className={styles.todos_wrapper}>
      <p className={styles.todo_list_last_todo}>
        남은 Todo :
        <span className={styles.last_todo_count}> {todos.length}</span>
      </p>
      <div className={styles.todo_list_header_wrapper}>
        {Object.keys(todoColors).map((color, idx) => (
          <div className={styles.todo_list_header} key={idx}>
            <div
              className={`${styles.todo_list_header_color} ${
                styles[`bg_${color}`]
              }`}
            ></div>
            <p>{todoColors[color]}개</p>
          </div>
        ))}
      </div>
      <div>
        <ul className={styles.todo_list}>
          {todos.map((todo, idx) => (
            <li className={styles.todo_item} key={idx}>
              <div className={styles.todo_left_side}>
                <div
                  className={`${styles.todo_list_todo_color} ${
                    styles[`bg_${todo.color}`]
                  }`}
                ></div>
                <p
                  className={`${todo.checked ? styles.todo_check_text : ''} ${
                    styles['todo_text']
                  }`}
                >
                  {todo.text}
                </p>
              </div>
              <input type="checkbox" name="todoCheck" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
