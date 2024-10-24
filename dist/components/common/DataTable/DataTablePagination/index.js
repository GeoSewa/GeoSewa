import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from '@Components/common/FormUI';
import { FlexRow } from '@Components/common/Layouts';
import { Button } from '@Components/RadixComponents/Button';
export default function DataTablePagination({ table }) {
    return (_jsxs(FlexRow, { className: "naxatw-justify-between naxatw-py-2", children: [_jsxs(FlexRow, { className: "naxatw-items-center naxatw-gap-2 ", children: ["Row per page", _jsx("select", { value: table.getState().pagination.pageSize, onChange: e => {
                            table.setPageSize(Number(e.target.value));
                        }, className: " naxatw-rounded-lg naxatw-border-2 naxatw-border-grey-500 naxatw-p-1.5", children: [10, 25, 50, 100].map(page => (_jsx("option", { value: page, children: page }, page))) })] }), _jsxs(FlexRow, { className: "naxatw-gap-2", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: "Prev" }), _jsx(Button, { size: "sm", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), children: "01" }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), children: table.getPageCount() }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: "Next" }), _jsxs(FlexRow, { className: "naxatw-items-center naxatw-gap-1 ", children: [_jsx("div", { children: "Page" }), _jsxs("strong", { children: [table.getState().pagination.pageIndex + 1, " of \u00A0", table.getPageCount()] })] }), _jsxs(FlexRow, { className: "naxatw-items-center naxatw-gap-1", children: ["| Go to page:", _jsx(Input, { type: "number", defaultValue: table.getState().pagination.pageIndex + 1, onChange: e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                    table.setPageIndex(page);
                                }, className: "naxatw-w-16 naxatw-rounded naxatw-border naxatw-p-1" })] })] })] }));
}
