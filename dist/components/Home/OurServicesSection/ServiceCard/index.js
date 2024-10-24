import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FlexColumn } from "@Components/common/Layouts";
import Image from "@Components/RadixComponents/Image";
export default function ServiceCard({ image, title, description, }) {
    return (_jsxs(FlexColumn, { gap: 2, className: "naxatw-p-4 naxatw-transform naxatw-transition-transform naxatw-duration-300 hover:naxatw-scale-105 naxatw-bg-white naxatw-rounded-xl naxatw-border naxatw-shadow-lg", children: [_jsx(Image, { src: image, width: 60 }), _jsx("h4", { className: "naxatw-text-gray-800", children: title }), _jsx("p", { children: description })] }));
}
