未完成

import { useCallback } from "react";
import {
  QueryStrategy,
  QuerySet,
  acceptLatest,
  createStrategy,
  keepEarliest,
  keepEarliestSuccess,
  waitAccept,
  findQuery
} from "query-shape";

export type ResponseStrategy =
  | "acceptLatest"
  | "keepEarliest"
  | "keepEarliestSuccess"
  | "waitAccept";

// 这个是请求返回的结果接口
export interface RequestResult<O = void, E = Error> {
  pending: boolean;
  pendingCount?: number;
  data?: O;
  error?: E;
  nextData?: O;
  nextError?: E;
  accept(): void;
}

// 这个是请求这个动作的接口
export type Request<K, O> = (key: K) => Promise<O>;

const builtInStrategies: { [K in ResponseStrategy]: QueryStrategy } = {
  acceptLatest: createStrategy(acceptLatest),
  keepEarliest: createStrategy(keepEarliest),
  keepEarliestSuccess: createStrategy(keepEarliestSuccess),
  waitAccept: createStrategy(waitAccept)
};
// 主函数
/*
 * 接受一个promise函数，接受params参数
 * 返回结果的一个对象 RequestResult
 */
export function useRequest<K, O = void, E = Error>(
  task: Request<K, O>,
  params: K
): RequestResult<O, E> {
  const strategy = "acceptLasest";

  const fetch = useCallback((key: K) => {});
  const result: RequestResult;

  return result;
}
