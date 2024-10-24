import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@Utils/index';
export default function Skeleton({ className, ...props }) {
    return (_jsx("div", { className: cn('naxatw-animate-pulse naxatw-rounded-[4.5px] naxatw-bg-grey-300', className), ...props }));
}
