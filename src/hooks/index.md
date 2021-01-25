# react 的流程

1. diff 之后进入commit，虚拟的DOM映射到真实DOM
2. useEffect在渲染时是异步执行，等浏览器所有变化渲染到屏幕后才会执行(不要修改BOM),

## useRef

可以用来存取更新前的原始值
