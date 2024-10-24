import { jsx as _jsx } from "react/jsx-runtime";
export default function ErrorMessage({ message }) {
    return (_jsx("span", { role: "alert", className: "naxatw-px-1 naxatw-pt-2 naxatw-text-sm naxatw-text-red-500", children: message }));
}
