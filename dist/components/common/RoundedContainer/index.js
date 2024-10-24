import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/display-name */
import { forwardRef } from 'react';
const RoundedContainer = forwardRef(({ children, className, ...restProps }, ref) => {
    return (_jsx("div", { ref: ref, className: `naxatw-h-fit naxatw-w-fit naxatw-rounded-xl naxatw-border-[0.5px] naxatw-transition-all naxatw-duration-200 ${className}`, ...restProps, children: children }));
});
export default RoundedContainer;
