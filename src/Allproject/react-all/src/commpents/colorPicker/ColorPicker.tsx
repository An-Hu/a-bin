/*
 * @author: huqizhi
 */
import {useCallback} from "react";
import { CompactPicker } from "react-color";
import c from './index.less'
interface ColorPickerProps{
    color:any,
    setcolor:any,
}
export const ColorPicker: React.FC<ColorPickerProps> = ({color,setcolor}) => {
    const handleChange = useCallback((color)=>{
        setcolor(color)
    },[])
    return (
        <>
            <CompactPicker color={color} onChange={handleChange}></CompactPicker>
        </>
    );
};
