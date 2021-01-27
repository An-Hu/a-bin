/*
 * @data: now
 */
import React, { useEffect,useRef,useState } from "react";
import { useRequest } from "./useRequest";
import { useRequestNow } from "./useRequestNow";
import { useRequestOther } from "./useRequestOther";

const p = (key:any) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`传入的值为${key}(数据经过1秒种的传输到达这里)`);
    }, 1000);
  });
};

export default function RequestDemo() {
// 本地数据会变化，模仿用户操作的变化
const [localData,setData] = useState<any>(0);
const aa = useRef<any>()
   useEffect(()=>{
       const a = setInterval(() => {
        setData(parseInt((Math.random()*100).toString(),10))
       }, 1000)
       aa.current = a;
    //    return clearInterval(a)
   },[])

   // 本地数据会变化后引起的变化需要手动刷新
  const { data, refresh } = useRequest(p,localData);

  // 会根据本地数据的变化进行自动刷新
  const {dataNow} = useRequestNow(p,localData);

//useRequest 的另一种实现
const promise = (key:any) => {
    return ()=>setTimeout(async () => {
        await key
      }, 1000);
}
// const b = (localData)=>promise
// const {dataNow:dataOther} = useRequestOther((localData)=>promise)

  console.log(data);
  return (
    <div className="App">
      {data === undefined ? "正在加载" : "加载成功"}
      <div>这是现在的数据：{localData}</div>
      <div>这是服务器现在的数据(不自动刷新)：{data}</div>
      <div>这是服务器现在的数据（进行自动刷新）：{dataNow}</div>
      {/* <div>这是另一种表现的数据（进行自动刷新）：{dataOther}</div> */}
      <button onClick={refresh}>点击刷新</button>
      <button onClick={()=>clearInterval(aa.current)}>点击停止</button>
    </div>
  );
}
