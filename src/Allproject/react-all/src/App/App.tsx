/*
 * @author: huqizhi
 */
import * as React from "react";
import {
    BrowserRouter,
    Route,
    Router,
    Switch,
    withRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { ConfigProvider, Layout, PageHeader } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { FireMap } from "../pages/notbad/firemap";
import { urlPath } from "../path/index";
import { Index } from "../pages/Index-total";
import { Menus } from "./Menus";
const {Sider} = Layout;
export const history = createBrowserHistory();
export const App: React.FunctionComponent = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <BrowserRouter>
                <Layout>
                    <Sider
                        theme="light"
                        collapsible
                        // selectedKeys={[resourcePaths.dashboard.urls.product.healthSku.path()]}
                        // menus={menuConfig}
                    >
                        <Menus />
                    </Sider>
                    <Switch>
                        <Route exact path={urlPath.index} component={Index} />
                        <Route
                            exact
                            path={urlPath.notbad.fireMap}
                            component={FireMap}
                        ></Route>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </ConfigProvider>
    );
};

export default App;
