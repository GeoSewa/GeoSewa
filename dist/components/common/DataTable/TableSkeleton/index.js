import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/no-array-index-key */
import Skeleton from '@Components/RadixComponents/Skeleton';
import { FlexColumn, FlexRow } from '@Components/common/Layouts';
const numberOfRows = 9;
const numberOfColumns = 6;
export default function TableSkeleton() {
    return (_jsxs(FlexColumn, { className: "naxatw-mt-3 naxatw-h-[72vh] naxatw-rounded-md naxatw-border naxatw-pt-6 naxatw-shadow-lg", children: [_jsxs(FlexRow, { className: "naxatw-items-center naxatw-space-x-20 naxatw-border-b-[1px] naxatw-px-10 naxatw-pb-5 ", children: [_jsx(Skeleton, { className: "naxatw-h-4 naxatw-w-1/12 xl:naxatw-h-6" }), Array.from({ length: numberOfColumns }).map((__, index) => (_jsx(Skeleton, { className: "naxatw-h-4 naxatw-w-1/4 xl:naxatw-h-6" }, index)))] }), Array.from({ length: numberOfRows }).map((_, idx) => (_jsxs(FlexRow, { className: "naxatw-space-x-20 naxatw-border-b-[1px] naxatw-px-10 naxatw-py-3 xl:naxatw-py-4", children: [_jsx(Skeleton, { className: "naxatw-h-4 naxatw-w-1/12 " }), Array.from({ length: numberOfColumns }).map((__, index) => (_jsx(Skeleton, { className: "naxatw-h-4 naxatw-w-1/4" }, index)))] }, idx)))] }));
}
