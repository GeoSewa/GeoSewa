import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '@Components/common/Icon';
const getStatus = (status) => {
    switch (status) {
        case 'info':
            return { icon: 'info', bgColor: 'naxatw-bg-primary-400' };
        case 'success':
            return { icon: 'check_circle', bgColor: 'naxatw-bg-green-700' };
        case 'error':
            return { icon: 'cancel', bgColor: 'naxatw-bg-red-600' };
        default:
            return { icon: 'info', bgColor: 'naxatw-bg-primary-400' };
    }
};
const InfoDialog = ({ status, children }) => {
    const infoStatus = getStatus(status);
    return (_jsxs("div", { className: `${infoStatus.bgColor} naxatw-mb-10 naxatw-flex naxatw-w-full naxatw-items-center
      naxatw-gap-2 naxatw-rounded-md naxatw-p-3 naxatw-opacity-40`, children: [_jsx(Icon, { name: infoStatus.icon, className: "naxatw-text-grey-200" }), _jsx("span", { className: "naxatw-text-base naxatw-text-grey-200", children: children })] }));
};
export default InfoDialog;
