/*
 * @author: huqizhi
 */
import { Card } from "antd";
import React, { useCallback } from "react";
import c from "./index.less";
interface TextData {
    keyText: string;
    TextSelectNumber: number;
    key: number;
    [key: string]: any;
}
const useTextDatas = () => {
    const data: TextData[] = [
        {
            keyText: "吃",
            TextSelectNumber: 5,
            key: 0,
        },
        {
            keyText: "喝",
            TextSelectNumber: 10,
            key: 1,
        },
        {
            keyText: "玩",
            TextSelectNumber: 20,
            key: 2,
        },
        {
            keyText: "乐",
            TextSelectNumber: 5,
            key: 3,
        },
    ];
    const option = {
        min: 1,
        max: 20,
    };
    return { data, option };
};

export const MainRender: React.FC = () => {
    const { data, option } = useTextDatas();
    const colorAndChange:(TextSelectNumber:number)=>any = useCallback((TextSelectNumber) => {
        const percentOfTotalData = TextSelectNumber/option.max
        const color = `rgba(0,0,0,${percentOfTotalData})`
        return color
    }, 
    []);
    return (
        <>
            <Card className={c("totalBox")}>
                {data.map((textData) => {
                    return (
                        <Card.Grid
                            className={c.intBox}
                            key={textData.key}
                            style={{ backgroundColor: `${colorAndChange(textData.TextSelectNumber)}` }}
                        >
                            {textData.keyText}
                        </Card.Grid>
                    );
                })}
            </Card>
        </>
    );
};
