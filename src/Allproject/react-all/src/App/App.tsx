/*
 * @author: huqizhi
 */
import * as React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

export const history = createBrowserHistory();

export const App: React.FunctionComponent = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Router history={history} >
                    <Switch >
                       
                    </Switch>
            </Router>
        </ConfigProvider>
    );
};

export default App;
