import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@Utils/index';
export default function ErrorMessage({ message = '', disabled, className, }) {
    return (_jsx("p", { className: cn(`naxatw-text-sm naxatw-font-normal naxatw-text-red-400 ${disabled ? 'naxatw-text-grey-600' : ''}`, className), children: message }));
}
