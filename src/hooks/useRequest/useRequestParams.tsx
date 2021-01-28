// 只要传入的params有任何的变化，就会进行刷新,无论是什么类型的变化
import { useBoolean, usePreviousValue } from "huse";
import * as React from "react";
export type Request<K, O> = (key: K) => Promise<O>;
export interface RequestResult<O = void, E = Error> {
  data: O;
}

// 判断两个对象是否完全相等
export function objectCompare(obj1:any,obj2:any):Boolean{
    var o1 = obj1 instanceof Object;
    var o2 = obj2 instanceof Object;
    if(!o1 || !o2){/*  判断不是对象  */
        return obj1 === obj2;
    }
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(var attr in obj1){
        var t1 = obj1[attr] instanceof Object;
        var t2 = obj2[attr] instanceof Object;
        if(t1 && t2){
            return objectCompare(obj1[attr],obj2[attr]);
        }else if(obj1[attr] !== obj2[attr]){
            return false;
        }
    }
    return true;
}



export function useRequest<K, O = void, E = Error>(
  task: Request<K, O>,
  params: K
): RequestResult<O, E> {
//   console.log(params)
const [paramState,setParams] = React.useState<K>()
React.useEffect(()=>{
    setParams(params)
},[params])
// 这里是是否更新的状态
  const [updata,{on:updataOn,off:updataOff}] = useBoolean(false)

// 这里存放要返回的状态
  const [state, setState] = React.useState<O>({} as O);

// 这里存放上一个版本的params
  const previousState = usePreviousValue(paramState);
  React.useEffect(() => {
    task(params).then((data) => {
      setState(data);
    });
  // 这里只有第一次组件创建的时候进行刷新，所以不添加依赖
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const refresh = React.useCallback(() => {
    task(params).then((data) => {
      setState(data);
    });
  }, [task, params]);

  // 对比，如果两个params的值有差距则进行刷新
  if(!objectCompare(previousState || params,params)){
    updataOn();
  }else{
    updataOff();
  }
  // 是否更新 并进行操作 
  React.useEffect(()=>{
    if(updata){
        refresh();
    }
  },[refresh, updata])
  
  return {
    data: state!,
  };
}
