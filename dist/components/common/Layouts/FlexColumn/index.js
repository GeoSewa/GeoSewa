import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/jsx-props-no-spreading */
import { cn } from '@Utils/index';
export default function FlexColumn({ className = '', children, gap, ...rest }) {
    return (_jsx("div", { className: cn(`naxatw-flex naxatw-flex-col ${className}`), style: {
            gap: gap ? `${gap * 0.25}rem` : '',
        }, ...rest, children: children }));
}
