import { useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import { v4 } from 'uuid';
import Swal from 'sweetalert2';
import stateInitTodo, { AddTodoFormType } from './InitTodo';
import styles from '../../../styles/components/Todo/AddTodo/AddTodo.module.scss';
import { AddTodoApi } from '../../../lib/api/todos/add';

type ColorType = AddTodoFormType['color'];

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState(stateInitTodo);
  const router = useRouter();

  const clickTodoColorBtn = useCallback(
    (color: ColorType) => {
      setTodo({ ...todo, color });
    },
    [todo]
  );

  const changeTodoText = useCallback(
    (text: string) => {
      setTodo({ ...todo, text });
    },
    [todo]
  );

  const clickAddTodoBtn = async () => {
    const addTodoRes = await AddTodoApi(todo);
    // TODO: 정상적으로 잘 저장 되었을 시 추가 알림 후 페이지 리다이렉션
    if (addTodoRes.data === true) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Todo를 추가했습니다!',
        confirmButtonText: 'OK',
        timer: 3000,
      }).then(() => {
        router.push('/');
      });
    }
    // TODO: 저장 실패 시 실패 알림
    if (typeof addTodoRes.data === 'string') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${addTodoRes.data}`,
        confirmButtonText: 'OK',
        timer: 3000,
      });
    }
  };

  return (
    <>
      <div className={styles.add_todo_header}>
        <h1 className={styles.todo_header_text}>Add Todo</h1>
        <button className={styles.todo_add_btn} onClick={clickAddTodoBtn}>
          추가하기
        </button>
      </div>
      <div className={styles.todo_colors_wrapper}>
        {['red', 'blue', 'green', 'orange', 'yellow'].map((color) => {
          return (
            <button
              key={v4()}
              className={`${styles[`bg_${color}`]} ${styles.todo_colors} ${
                color === todo.color ? styles.todo_color_click : ''
              }`}
              onClick={() => {
                clickTodoColorBtn(color as ColorType);
              }}
            ></button>
          );
        })}
      </div>
      <div className={styles.todo_textarea_wrapper}>
        <textarea
          name="todoText"
          id="todoText"
          placeholder="다음 Todo를 입력하세요."
          className={styles.todo_textarea}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            changeTodoText(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default AddTodo;
