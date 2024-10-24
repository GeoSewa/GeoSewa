import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/jsx-props-no-spreading */
import { cn } from '@Utils/index';
export default function Flex({ className = '', children, gap, md, row, ...rest }) {
    let newClassNames = '';
    if (md)
        newClassNames += `md:naxatw-flex-row `;
    return (_jsx("div", { className: cn(`naxatw-flex naxatw-flex-col ${newClassNames}
      ${className}`), ...rest, style: {
            gap: gap ? `${gap * 0.25}rem` : '',
        }, children: children }));
}
