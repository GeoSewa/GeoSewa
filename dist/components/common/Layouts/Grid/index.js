import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/jsx-props-no-spreading */
import { cn } from '@Utils/index';
export default function Grid({ className = '', children, cols, gap, ...rest }) {
    return (_jsx("div", { className: cn(`naxatw-grid  md:naxatw-grid-cols-2 ${gap ? `naxatw-gap-x-2` : ''} ${className}`), style: {
            gridTemplateColumns: cols ? `repeat(${cols}, minmax(0, 1fr))` : '',
            gap: gap ? `${gap * 0.25}rem` : '',
        }, ...rest, children: children }));
}
