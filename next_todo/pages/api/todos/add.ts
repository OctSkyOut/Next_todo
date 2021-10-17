import { NextApiRequest, NextApiResponse } from 'next';
import TodoSearchFunction from '../../../lib/data/todo';
import { TodoType } from '../../../types/todo';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { color, text } = req.body;
      const todos = await TodoSearchFunction.getTodoList();

      if (!text) {
        // todo 텍스트가 없다면 오류 메세지 리턴
        return res.send('Todo 내용이 없습니다.');
      }
      if (!color) {
        // todo 인덱싱 컬러가 없으면 오류 메세지 리턴
        return res.send('Todo 인덱스 색상이 없습니다.');
      }

      // todo 새로운 Todo 생성 후 주입
      const todoList = await TodoSearchFunction.getTodoList();
      const newTodo: TodoType = {
        id: todoList.length,
        text: text,
        color: color,
        checked: false,
      };

      TodoSearchFunction.writeTodos([...todoList, newTodo]);
      res.statusCode = 200;
      return res.send(true);
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      return res.send(error);
    }
  }

  res.statusCode = 405;
  return res.end();
};
