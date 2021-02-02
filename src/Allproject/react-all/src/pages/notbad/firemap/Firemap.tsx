import { ColorPicker } from "@/commpents/colorPicker";
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
                title="some mind"
                subTitle="huhu"
            >
                <ColorPicker></ColorPicker>
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
