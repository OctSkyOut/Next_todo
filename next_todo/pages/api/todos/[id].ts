import { NextApiRequest, NextApiResponse } from 'next';
import TodoSearchFunction from '../../../lib/data/todo';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const todoId = +req.query.id;
    const todo = await TodoSearchFunction.getTodo({ id: todoId });
    const todoList = await TodoSearchFunction.getTodoList();
    // ANCHOR todo객체, todoList 배열 체크
    if (!todo || todoList.length === 0) {
      // TODO todo가 없다면 404에러
      res.statusCode = 404;
      return res.send(false);
    }

    // ANCHOR PATCH 메소드
    if (req.method === 'PATCH') {
      // TODO todo가 존재한다면 체크 수정을 한 후 투두리스트들을 리턴
      const result = { checkStatus: false };
      const changeTodoList = todoList.map((todo) => {
        if (todo.id === todoId) {
          result.checkStatus = !todo.checked;
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });

      // 변경된 Todo들을 수정 후 완료 상태 삽입.
      TodoSearchFunction.writeTodos(changeTodoList);
      res.statusCode = 200;

      return res.send(result.checkStatus);
    }

    // ANCHOR DELETE 메소드
    if (req.method === 'DELETE') {
      // TODO todo가 존재한다면 선택한 todo삭제
      const deleteTodoList = todoList.filter((todo) => todo.id !== todoId);
      TodoSearchFunction.writeTodos(deleteTodoList);
      return res.send(true);
    }
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    return res.send(error);
  }

  res.statusCode = 405;
  return res.end();
};
