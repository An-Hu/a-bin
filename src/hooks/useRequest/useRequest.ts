
import * as React from "react";
export type Request<K, O> = (key: K) => Promise<O>;
export interface RequestResult<O = void, E = Error> {
  data: O;
  refresh: () => void;
}
export function useRequest<K, O = void, E = Error>(
  task: Request<K, O>,
  params: K
): RequestResult<O, E> {
  const [state, setState] = React.useState<O>();
  React.useEffect(() => {
    task(params).then((data) => {
      setState(data);
    });
  }, []);
  const refresh = React.useCallback(() => {
    task(params).then((data) => {
      setState(data);
    });
  }, [task, params]);
  return {
    data: state!,
    refresh
  };
}
