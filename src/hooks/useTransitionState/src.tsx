/*
 * @data: now
 */
import {useState, useRef, useEffect, useCallback} from 'react';

export type TransitionStateHook<S> = [
    S,
    (value: S, duration?: number) => void,
];

// 默认时间是-1
export function useTransitionState<S>(defaultValue: S, defaultDuration: number = -1): TransitionStateHook<S> {
    // setState来进行状态管理，为什么这里的defaultvalue也可以跨组件周期进行使用？
    const [value, setValue] = useState(defaultValue);
    // 将默认的时间延迟用durationRef来储存，不影响页面渲染
    const durationRef = useRef(defaultDuration);
    useEffect(
        () => {
            // 如果当前的value不等于默认的值，并且现在的延迟不小于0
            // 在时间延迟之后进行，设置value，将默认值设置为现在的值
            if (value !== defaultValue && durationRef.current >= 0) {
                const tick = setTimeout(
                    () => setValue(defaultValue),
                    durationRef.current
                );
// 需要清除的副作用？
                return () => clearTimeout(tick);
            }
        },
        [defaultValue, value]
    );
    const setTransition = useCallback(
        (value: S, duration: number = defaultDuration) => {
            durationRef.current = duration;
            setValue(value);
        },
        [defaultDuration]
    );
    return [value, setTransition];
}
