import { Card } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import RequestDemo from "./hooks/useRequest/main";
import 'antd/dist/antd.css';
interface mapItem{
  title:string;
  node: any;
}
const map:mapItem[] = [
  {
    title:'useRequest',
    node:(<RequestDemo></RequestDemo>)
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
