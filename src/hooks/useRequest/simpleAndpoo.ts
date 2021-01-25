// 自己的
import * as React from 'react';
export type Request<K, O> = (key: K) => Promise<O>;
export interface RequestResult<O = void, E = Error> {
  pending: boolean;
  pendingCount?: number;
  data?: O;
  error?: E;
  nextData?: O;
  nextError?: E;
  accept(): void;
}
export function useRequest<K, O = void, E = Error>(
    task: Request<K, O>,
    params: K
  ): RequestResult<O, E> {
    const [state, setState] = React.useState();
    React.useEffect(async () => {
      const data = task(params);
      setState(data);
    },[]);
    return state;
  }
  