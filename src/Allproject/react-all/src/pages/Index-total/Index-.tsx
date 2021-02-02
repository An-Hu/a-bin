import { PageHeader, Spin } from "antd";
import React from "react";
import { withBoundary,useResource } from "react-suspense-boundary";

/*
 * @author: huqizhi
 */
const routes = [
    {
        path: "/",
        breadcrumbName: "首页",
    },
];
const Indexpre: React.FC = () => {
    return (
        <>
            <PageHeader
                className="site-page-header"
                title="首页"
                subTitle="不可否认."
            >
                index
            </PageHeader>
        </>
    );
};

export const Index = withBoundary({
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
})(Indexpre);
