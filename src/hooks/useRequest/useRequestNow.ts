// 利用useEffect的判断机制，只要params发生改变就进行
import * as React from "react";
export type Request<K, O> = (key: K) => Promise<O>;
export interface RequestResult<O = void, E = Error> {
  dataNow: O;
}
export function useRequestNow<K, O = void, E = Error>(
  task: Request<K, O>,
  params: K
): RequestResult<O, E> {
    console.log(params)
  const [state, setState] = React.useState<O>();
  React.useEffect(() => {
    task(params).then((data) => {
      setState(data);
    });
  }, [params, task]);

  return {
    dataNow: state!,
  };
}
