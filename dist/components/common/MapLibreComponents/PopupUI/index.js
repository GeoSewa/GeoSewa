import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import capitalizeFirstLetter from '@Utils/capitalizeFirstLetter';
// import { popupExceptionKeys } from '@src/constants/map';
const exceptions = [];
export default function PopupUI({ data = {} }) {
    const popupData = Object.keys(data || {}).reduce((obj, key) => {
        const name = capitalizeFirstLetter(key);
        const exceptionKeys = [...exceptions];
        const value = data?.[key];
        if (key === 'submitted_date') {
            const date = new Date(value);
            return {
                ...obj,
                // [name]: format(date, ['MMM do yyyy, h:mm a'])
            };
        }
        if (exceptionKeys.includes(key)) {
            return { ...obj };
        }
        return { ...obj, [name]: value };
    }, {});
    return (_jsx("ul", { className: "scrollbar naxatw-flex naxatw-h-[12.5rem] naxatw-flex-col \n    naxatw-overflow-y-auto naxatw-border-y-[1px] naxatw-border-y-grey-500 naxatw-text-grey-800", children: popupData &&
            Object.keys(popupData).map(key => (_jsxs("li", { className: "naxatw-flex naxatw-items-center naxatw-py-1.5 odd:naxatw-bg-grey-100", children: [_jsx("p", { className: "naxatw-w-1/2 naxatw-text-body-sm", children: key }), _jsx("p", { className: " naxatw-w-1/2 naxatw-text-body-sm naxatw-font-bold", children: popupData[key]?.toString() || '-' })] }, key))) }));
}
