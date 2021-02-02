/*
 * @author: huqizhi
 */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
const breadcrumbNameMap:any = {//跟路由路径保持一致
    "/": "首页",
    "/403": "403",
    "/404": "404",
    "/site_manage": "站点管理",
    "/site_manage/site_list": "站点列表",

    "/order": "订单管理",
    "/order/order_list": "订单列表",

    "/flow_manage": "流水管理",
    "/flow_manage/business_search": "交易搜索",

    "/risk_manage": "风控控制",
    "/risk_manage/rule_manage": "规则管理",
    "/risk_manage/rule_setting": "规则设置",

    "/report_manage": "报表管理",
    "/report_manage/transaction_report": "交易报表",
    "/report_manage/rules_report": "规则报表",
    "/report_manage/efficacy_report": "功效报表",
    "/report_manage/blacklist_report": "黑名单报表",

    "/name_list_manage": "名单管理",
    "/name_list_manage/field_manage": "字段管理",

    "/system_manage": "系统管理",
    "/system_manage/role_manage": "角色管理",
    "/system_manage/user_manage": "用户管理",
    "/system_manage/black_white": "黑白名单",
};

const Nav = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}></Link>
                {breadcrumbNameMap[url]}
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home"><Link to="/">首页</Link></Breadcrumb.Item>
    ].concat(extraBreadcrumbItems);
    return (
        <div className="demo">
            <Breadcrumb style={{ margin: "16px 0" }}>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
});
export default Nav;
