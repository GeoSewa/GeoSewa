import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '@Components/common/Icon';
import { FlexRow } from '@Components/common/Layouts';
import Input from '../Input';
export default function SearchInput({ inputValue, placeholder, onChange, onClear, showClearIcon = false, className, }) {
    return (_jsxs(FlexRow, { className: `naxatw-group naxatw-relative naxatw-w-full naxatw-items-center 
        naxatw-border-b-2 hover:naxatw-border-b-primary-400 ${className}`, children: [_jsx(Icon, { name: "search", className: "naxatw-text-grey-500 group-hover:naxatw-text-primary-400" }), _jsx(Input, { type: "text", className: "naxatw-w-full naxatw-border-none", placeholder: placeholder || 'Search', value: inputValue, onChange: onChange }), (!!inputValue.length || showClearIcon) && (_jsx(Icon, { name: "clear", onClick: onClear, className: "hover:naxatw-text-primary-400" }))] }));
}
