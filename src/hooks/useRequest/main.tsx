/*
 * @data: now
 */
import React from "react";
import { useRequest } from "./useRequest";

const p = (key:any) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`传入的值为${key},+2 = ${key + 2}`);
    }, 100);
  });
};

export default function RequestDemo() {
  const { data, refresh } = useRequest(p, parseInt((Math.random() * 100).toString(), 10));
  console.log(data);
  return (
    <div className="App">
      {data === undefined ? "正在加载" : data}
      <button onClick={refresh}>点击刷新</button>
    </div>
  );
}
