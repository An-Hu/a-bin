# react 的流程

1. diff 之后进入 commit，虚拟的 DOM 映射到真实 DOM
2. useEffect 在渲染时是异步执行，等浏览器所有变化渲染到屏幕后才会执行(不要修改 BOM),

## useRef

可以用来存取更新前的原始值,结合 useEffect

## useTransitionState

- [ ] 使用入参来进行设置的 value 与原始 value 的比较，入参可以跨周期进行储存？

## debounce 防抖动

## useMethods 将对数据的各种操作与数据进行绑定

## useInputValue 绑定input 的值
