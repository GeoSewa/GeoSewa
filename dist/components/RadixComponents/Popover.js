import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@Utils/index';
const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = 'end', sideOffset = 4, ...props }, ref) => (_jsx(PopoverPrimitive.Portal, { children: _jsx(PopoverPrimitive.Content, { ref: ref, align: align, sideOffset: sideOffset, className: cn(`naxatw-z-50 naxatw-w-64 naxatw-rounded-md naxatw-border naxatw-bg-white naxatw-p-4 naxatw-text-grey-800
        naxatw-shadow-lg naxatw-outline-none data-[state=open]:naxatw-animate-in data-[state=closed]:naxatw-animate-out
        data-[state=closed]:naxatw-fade-out-0 data-[state=open]:naxatw-fade-in-0 data-[state=closed]:naxatw-zoom-out-95
        data-[state=open]:naxatw-zoom-in-95 data-[side=bottom]:naxatw-slide-in-from-top-2 data-[side=left]:naxatw-slide-in-from-right-2
        data-[side=right]:naxatw-slide-in-from-left-2 data-[side=top]:naxatw-slide-in-from-bottom-2`, className), ...props }) })));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export default function Popover({ triggerContent, popoverContent, show, }) {
    return (_jsxs(PopoverRoot, { open: show, children: [_jsx(PopoverTrigger, { children: triggerContent }), _jsx(PopoverContent, { className: "naxatw-flex naxatw-flex-col naxatw-gap-4", children: popoverContent })] }));
}
