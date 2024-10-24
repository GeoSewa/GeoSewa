import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '@Components/common/Icon';
import capitalizeFirstLetter from '@Utils/capitalizeFirstLetter';
export default function Chip({ label, onClose }) {
    return (_jsxs("div", { className: "naxatw-flex naxatw-h-8 naxatw-cursor-pointer naxatw-items-center naxatw-gap-1\n      naxatw-rounded-lg naxatw-border naxatw-border-grey-300 naxatw-bg-grey-100 naxatw-px-2 naxatw-text-sm", children: [_jsx("p", { children: capitalizeFirstLetter(label.toString()) }), _jsx(Icon, { onClick: onClose, name: "close", className: "!naxatw-text-icon-sm naxatw-font-bold " })] }));
}
