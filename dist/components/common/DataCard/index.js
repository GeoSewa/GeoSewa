import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import formatNumberWithCommas from '@Utils/formatNumberWithCommas';
import Icon from '@Components/common/Icon';
import { FlexColumn, FlexRow } from '@Components/common/Layouts';
import { cn } from '@Utils/index';
import RoundedContainer from '../RoundedContainer';
export default function DataCard({ title, count, iconName, className, }) {
    return (_jsx(RoundedContainer, { className: cn(`${className} naxatw-w-full naxatw-min-w-[180px] naxatw-bg-primary-50 naxatw-px-5 naxatw-py-4
      naxatw-shadow-md md:!naxatw-h-28`), children: _jsxs(FlexColumn, { children: [_jsx("h5", { children: title }), _jsxs(FlexRow, { className: "naxatw-items-center naxatw-justify-between naxatw-text-[38px] naxatw-font-bold naxatw-text-primary-400 ", children: [_jsx(FlexRow, { children: _jsx("div", { children: formatNumberWithCommas(count) }) }), _jsx(Icon, { name: iconName, className: "!naxatw-text-[38px] naxatw-text-primary-200 " })] })] }) }));
}
