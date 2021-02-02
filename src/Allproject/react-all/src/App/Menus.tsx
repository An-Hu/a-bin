import { Button, Menu } from "antd";
import React, { useMemo } from "react";
import c from "./index.less";
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { iconConf, MenuConf } from "./MenuConfigures";
import { useHistory } from "react-router-dom";
import { usePhone } from "@/commpents/onTelephone";
/*
 * @author: huqizhi
 */
const { SubMenu } = Menu;
export const Menus: React.FC = () => {
    const history = useHistory();
    const onClick = React.useCallback(pash => {
        return () => history.push(pash);
    }, [history]);
    const isPhone = useMemo(()=>{
        return usePhone()
    },[])
    return (
        <>
            <Menu className={c("menu")} mode={isPhone?"vertical":"inline"} theme="light">
                <Menu.Item className={c.title} disabled></Menu.Item>

                {MenuConf.map((r) => {
                    if (r.children) {
                        return (
                            <SubMenu
                                key={r.key}
                                icon={iconConf(r.key)}
                                title={r.title}
                            >
                                {r.children.map((child) => {
                                    return (
                                        <Menu.Item
                                            key={child.key}
                                            title={child.title}
                                            icon={iconConf(child.key)}
                                            onClick={onClick(child.path)}
                                        >{child.title}</Menu.Item>
                                    );
                                })}
                            </SubMenu>
                        );
                    }
                    return (
                        <Menu.Item
                            key={r.key}
                            title={r.title}
                            icon={iconConf(r.key)}
                            onClick={onClick(r.path)}
                        >{r.title}</Menu.Item>
                    );
                })}
               
            </Menu>
        </>
    );
};
