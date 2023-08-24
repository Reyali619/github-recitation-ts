import { Request, Response } from 'express';
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const num: number = parseInt(req.params.num, 10);

  // Adding a NaN check for more robustness
  if (isNaN(num)) {
    res.status(400).send('Invalid number provided');
    return;
  }

  const fibN: number = fibonacci(num) as number;
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  } else {
    result = `fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
};
