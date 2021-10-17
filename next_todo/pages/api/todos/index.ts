import { NextApiRequest, NextApiResponse } from 'next';
import TodoSearchFunction from '../../../lib/data/todo';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const todos = await TodoSearchFunction.getTodoList();
      if (!todos) {
        // todos 리스트가 없다면. 404에러
        res.statusCode = 404;
        res.end();
      }
      if (todos) {
        // todos 리스트가 있다면 리스트 반환
        res.statusCode = 200;
        return res.send(todos);
      }
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  }

  res.statusCode = 405;
  return res.end();
};
