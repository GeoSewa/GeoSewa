import { jsx as _jsx } from "react/jsx-runtime";
import { FlexColumn } from '@Components/common/Layouts';
export default function FormControl({ children, className, }) {
    return _jsx(FlexColumn, { className: className, children: children });
}
