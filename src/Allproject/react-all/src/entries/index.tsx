//@ts-ignore
import ReactDOM from 'react-dom';
import App from '@/App';

export async function bootstrap() {
    // eslint-disable-next-line no-console
    console.log('react app bootstraped');
}
const id = 'app-container';
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: {container?: HTMLDivElement}) {
    let node = props.container?.querySelector('#res-app-container');
    if (!node) {
        node = document.createElement('div');
        node.id = id;
        document.body.appendChild(node);
    }
    ReactDOM.render(<App />, node);
}
export async function unmount(props: {container?: HTMLDivElement}) {
    const node = props.container?.querySelector('#res-app-container') || document.getElementById(id);

    node && ReactDOM.unmountComponentAtNode(node);
}
(g => {
    //@ts-ignore
    g.resource_sca = {
        bootstrap, mount, unmount,
    };
})(window);
if (!('__POWERED_BY_QIANKUN__' in window)) {
    mount({});
}
