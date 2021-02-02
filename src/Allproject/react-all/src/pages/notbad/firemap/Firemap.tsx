import { PageHeader, Spin } from "antd";
import * as React from "react";
import { withBoundary } from "react-suspense-boundary";
import { MainRender } from "./MainRender";

const routes = [
    {
        path: "/",
        breadcrumbName: "首页",
    },
    {
        path: "/notbad",
        breadcrumbName: "一些点子",
    },
    {
        path: "/notbad/firemap",
        breadcrumbName: "热力图",
    },
];
const FireMapPre: React.FC = () => {
    return (
        <>
            <PageHeader
                className="site-page-header"
                title="热力图"
                subTitle="huhu"
            >
                
                <MainRender></MainRender>
            </PageHeader>
        </>
    );
};

export const FireMap = withBoundary({
    pendingFallback: (
        <Spin
            style={{
                width: "100%",
                height: window.innerHeight - 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        />
    ),
})(FireMapPre);
