import React, { useCallback, useState } from 'react';
import Link from 'next/Link';
import { useSelector } from '../../../store/index';
import { todoActions } from '../../../store/todo';
import { useDispatch } from 'react-redux';
import { MdDeleteOutline, MdCheck } from 'react-icons/md';
import { v4 } from 'uuid';
import Swal from 'sweetalert2';
import countTodoColors from './Functions/CountTodoColor';
import styles from '../../../styles/components/Todo/TodoList/TodoList.module.scss';
import { patchTodoApi, deleteTodoApi } from '../../../lib/api/todos/[id]';

const TodoList: React.FC = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [todosState, setTodosState] = useState(todos);

  const changeCheckedStatus = (id: number) => {
    setTodosState(
      todosState.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
    dispatch(todoActions.setTodo(todosState));
  };
  // TODO todo를 하나 완료 할 때 해당 함수 호출 (완료, 완료취소 할 때)
  const checkTodo = useCallback(
    async (id: number) => {
      try {
        const patchRes = await patchTodoApi(id);
        if (patchRes.data === true) {
          return Swal.fire({
            title: '🎉 축하해요! 🎉',
            text: '할 일 하나 끝!',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            timer: 3000,
          }).then(() => changeCheckedStatus(id));
        }
        if (patchRes.data === false) {
          return Swal.fire({
            title: '완료취소',
            text: '할 일 완료 취소.',
            icon: 'info',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            timer: 3000,
          }).then(() => changeCheckedStatus(id));
        }
        throw new Error();
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: `${error}`,
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK',
        });
        console.error(error);
      }
    },
    [todosState]
  );

  // TODO todo를 하나 삭제 할 때 해당 함수 호출
  // TODO 삭제 완료시 todos status 갱신
  const deleteTodo = useCallback((id: number) => {
    Swal.fire({
      title: '삭제',
      text: '정말로 삭제 하시겠어요?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
    }).then(async () => {
      const patchRes = await deleteTodoApi(id);
      if (patchRes.data === true) {
      }
      Swal.fire('삭제되었어요!', 'Todo가 삭제되었습니다.', 'success').then(
        () => {
          setTodosState([...todosState.filter((todo) => todo.id !== id)]);
          dispatch(todoActions.setTodo(todosState));
        }
      );
    });
  }, []);

  // LINK 아래 기능 파일 위치 './Functions/CountTodoColor'
  const todoColors = countTodoColors(todosState);

  return (
    <>
      <div className={styles.todos_wrapper}>
        <p className={styles.todo_list_last_todo}>
          남은 Todo :
          <span className={styles.last_todo_count}> {todosState.length}</span>
        </p>
        <div className={styles.todo_list_header_wrapper}>
          {Object.keys(todoColors).map((color, idx) => (
            <div className={styles.todo_list_header} key={v4()}>
              <div
                className={`${styles.todo_list_header_color} ${
                  styles[`bg_${color}`]
                }`}
              ></div>
              <p>{todoColors[color]}개</p>
            </div>
          ))}
        </div>
        <Link href="/todos/add">
          <button className={styles.add_todo_link_btn}>
            <a className={styles.todo_add_link}>Todo 추가</a>
          </button>
        </Link>
      </div>
      <div>
        <ul className={styles.todo_list}>
          {todosState.map((todo, idx) => (
            <li className={styles.todo_item} key={v4()}>
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
              <div className={styles.todo_right_side}>
                {!todo.checked && (
                  <button
                    className={styles.todo_btn}
                    onClick={() => {
                      checkTodo(todo.id);
                    }}
                  />
                )}
                {todo.checked && (
                  <>
                    <div className={styles.todo_checked_btn_wrapper}>
                      <MdDeleteOutline
                        className={styles.todo_bin_btn}
                        size={25}
                        color="#5f5f5f"
                        onClick={() => {
                          deleteTodo(todo.id);
                        }}
                      />
                      <MdCheck
                        className={styles.todo_check_btn}
                        size={25}
                        color="#5f5f5f"
                        onClick={() => {
                          checkTodo(todo.id);
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
