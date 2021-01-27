import { Card } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import RequestDemo from "./hooks/useRequest/main";
import 'antd/dist/antd.css';
import { MethodDemo } from "./hooks/useMethods/main";
import { DerivedState } from "./hooks/useDerivedState/main";
interface mapItem{
  title:string;
  node: any;
}
const map:mapItem[] = [
  {
    title:'useRequest',
    node:(<RequestDemo></RequestDemo>)
  },
  {
    title:'useMethods',
    node:(<MethodDemo></MethodDemo>)
  },
  {
    title:'useDerived',
    node:(<DerivedState></DerivedState>)
  }
]

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {map.map(r =>{ 
      return (<Card title={r.title}>
        {r.node}
      </Card>)
    })}
  </React.StrictMode>,
  rootElement
);
