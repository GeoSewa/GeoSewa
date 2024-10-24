import { jsx as _jsx } from "react/jsx-runtime";
export default function Icon({ name, className, iconSymbolType = 'material-symbols-outlined', onClick, }) {
    return (_jsx("i", { role: "button", tabIndex: 0, onKeyUp: () => { }, onClick: onClick, className: `naxatw-text-icon-sm lg:naxatw-text-2xl ${className} ${iconSymbolType}`, children: name }));
}
