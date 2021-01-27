
import * as React from "react";

export type Api<K,O> = (key:K)=>Promise<O>

export interface RequestResult<O> {
  dataNow: O;
}

export function useRequestOther<K, O>(
  task: Api<K,O>,
  params: K
): RequestResult<O> {
  const [state, setState] = React.useState<O>();
  React.useEffect(()=>{
    task(params).then((res)=>{
        setState(res)
      })
  },[])
  return {
    dataNow: state!,
  };
}

