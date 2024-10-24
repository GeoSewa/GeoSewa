import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/jsx-props-no-spreading */
import { cn } from '@Utils/index';
export default function FlexRow({ className = '', children, gap, ...rest }) {
    return (_jsx("div", { className: cn(`naxatw-flex naxatw-flex-row
      ${className}`), ...rest, style: {
            gap: gap ? `${gap * 0.25}rem` : '',
        }, children: children }));
}
