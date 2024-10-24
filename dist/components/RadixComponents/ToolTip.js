import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Arrow, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from '@radix-ui/react-tooltip';
import { FlexColumn } from '@Components/common/Layouts';
import Icon from '../common/Icon';
export default function ToolTip({ name, message, side = 'left', onClick, className, iconClassName, }) {
    return (_jsx(FlexColumn, { className: `naxatw-cursor-pointer naxatw-select-none naxatw-items-center naxatw-justify-center ${className}`, tabIndex: 0, children: _jsx(TooltipProvider, { delayDuration: 80, skipDelayDuration: 50, children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { onClick: onClick, children: _jsx(Icon, { name: name, className: `naxatw-text-grey-500 hover:naxatw-animate-pulse hover:naxatw-text-primary-400 ${iconClassName}` }) }), message && (_jsxs(TooltipContent, { className: "data-[state=delayed-open]:data-[side=top]:naxatw-animate-slideDownAndFade \n                data-[state=delayed-open]:data-[side=right]:naxatw-animate-slideLeftAndFade \n                data-[state=delayed-open]:data-[side=left]:naxatw-animate-slideRightAndFade \n                data-[state=delayed-open]:data-[side=bottom]:naxatw-animate-slideUpAndFade \n                naxatw-max-w-xs naxatw-select-none naxatw-rounded naxatw-bg-grey-900 naxatw-px-[15px] naxatw-py-[10px] \n                naxatw-text-sm naxatw-leading-none naxatw-text-white\n                naxatw-shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]\n                naxatw-will-change-[transform,opacity]", side: side, sideOffset: 10, children: [message, _jsx(Arrow, { className: "fill-white" })] }))] }) }) }));
}