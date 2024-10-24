import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Label({ children, htmlFor, required }) {
    return (_jsxs("label", { className: "naxatw-text-sm naxatw-text-grey-800", htmlFor: htmlFor?.toString(), children: [children, required && _jsx("span", { className: "naxatw-text-red-500", children: "*" })] }));
}
