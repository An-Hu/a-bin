import { urlPath } from "../path/index";
/*
 * @author: huqizhi
 */
type MenuConfType = {
    title:string,
    key:number
    path?:string,
    children?:MenuConfType[]
}
export const MenuConf: MenuConfType[] = [
    {
        title: "主页",
        key: 0,
        path: urlPath.index,
    },
    {
        title: "some mind",
        key: 1,
        children: [
            {
                title: "心愿热力图",
                key: 2,
                path: urlPath.notbad.fireMap,
            },
        ],
    },
];

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

const iconList = [
    <AppstoreOutlined />,
    <MenuUnfoldOutlined />,
    <MenuFoldOutlined />,
    <PieChartOutlined />,
    <DesktopOutlined />,
    <ContainerOutlined />,
    <MailOutlined />,
]
export const iconConf = (key:number) =>{
    if(key>=iconList.length){
        return iconList[key-iconList.length]
    }
    return iconList[key]
    
}
