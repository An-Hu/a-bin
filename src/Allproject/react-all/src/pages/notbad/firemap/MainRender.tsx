/*
 * @author: huqizhi
 */
import { ColorPicker } from "@/commpents/colorPicker";
import { Button, Card, Collapse, Popconfirm, Popover } from "antd";
import React, { useCallback, useState } from "react";
import c from "./index.less";
interface TextData {
    keyText: string;
    TextSelectNumber: number;
    key: number;
    [key: string]: any;
}
import { CheckOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const useTextDatas = () => {
    const data: TextData[] = [
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
        // {
        //     keyText: "吃",
        //     TextSelectNumber: 5,
        //     key: 0,
        // },
        // {
        //     keyText: "喝",
        //     TextSelectNumber: 10,
        //     key: 1,
        // },
        // {
        //     keyText: "玩",
        //     TextSelectNumber: 20,
        //     key: 2,
        // },
        // {
        //     keyText: "乐",
        //     TextSelectNumber: 5,
        //     key: 3,
        // },
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
    const [color, setColor] = useState({
        hex: "#666666",
        hsl: { h: 0, s: 0, l: 0.4, a: 1 },
        hsv: { h: 0, s: 0, v: 0.4, a: 1 },
        oldHue: 0,
        rgb: { r: 102, g: 102, b: 102, a: 1 },
        source: undefined,
    });
    const [textcolor, setTextColor] = useState({
        hex: "#333333",
        hsl: { h: 8.842105263157897, s: 0, l: 0.2, a: 1 },
        hsv: { h: 8.842105263157897, s: 0, v: 0.2, a: 1 },
        oldHue: 8.842105263157897,
        rgb: { r: 51, g: 51, b: 51, a: 1 },
        source: undefined,
    });
    const colorAndChange: (TextSelectNumber: number) => any = useCallback(
        (TextSelectNumber) => {
            const percentOfTotalData = TextSelectNumber / option.max;
            const colora = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${percentOfTotalData})`;
            return colora;
        },
        [color]
    );
    const textcolorAndChange: () => any = useCallback(() => {
        const colora = `rgba(${textcolor.rgb.r},${textcolor.rgb.g},${textcolor.rgb.b})`;
        return colora;
    }, [textcolor]);

    const confirm = useCallback((e) => {
        console.log(e);
    }, []);
    return (
        <>
            <Collapse defaultActiveKey={[]}>
                <Panel header="point here 设置颜色" key="1">
                    <div className={c("head")} style={{ width: "100%" }}>
                        <span>背景颜色</span>
                        <ColorPicker
                            color={color}
                            setcolor={setColor}
                        ></ColorPicker>
                        <span>字体颜色</span>
                        <ColorPicker
                            color={textcolor}
                            setcolor={setTextColor}
                        ></ColorPicker>
                    </div>
                </Panel>
            </Collapse>

            <Card className={c("totalBox")}>
                {data.map((textData) => {
                    return (
                        <Popover
                            key={textData.key}
                            title={`总人数:${textData.TextSelectNumber}(${textData.keyText})`}
                            content={
                                <Button style={{justifySelf:'flex-end'}} size="small" type='primary' onClick={()=>confirm(textData)}>+1</Button>
                            }
                            
                            // onCancel={cancel}
                            
                            // cancelText="+0"
                            
                        >
                            <Card.Grid
                                
                                className={c.intBox}
                                key={textData.key}
                                style={{
                                    backgroundColor: `${colorAndChange(
                                        textData.TextSelectNumber
                                    )}`,

                                    color: `${textcolorAndChange()}`,
                                }}
                            >
                                {textData.keyText}
                            </Card.Grid>
                        </Popover>
                    );
                })}
            </Card>
        </>
    );
};
