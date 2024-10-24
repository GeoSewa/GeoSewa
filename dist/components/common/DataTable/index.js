import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable, } from '@tanstack/react-table';
import prepareQueryParam from '@Utils/prepareQueryParam';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@Components/RadixComponents/Table';
import Icon from '@Components/common/Icon';
import { FlexColumn, FlexRow } from '../Layouts';
import DataTablePagination from './DataTablePagination';
import TableSkeleton from './TableSkeleton';
export default function DataTable({ columns, queryKey, queryFn, initialState, searchInput, queryFnParams, }) {
    const [sorting, setSorting] = useState([]);
    const defaultData = React.useMemo(() => [], []);
    const [{ pageIndex, pageSize }, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 10,
        ...initialState.paginationState,
    });
    const pagination = React.useMemo(() => ({
        pageIndex,
        pageSize,
    }), [pageIndex, pageSize]);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [queryKey, pageIndex, pageSize, searchInput, queryFnParams],
        queryFn: () => queryFn({
            page: pageIndex + 1,
            page_size: pageSize,
            search: searchInput,
            ...(queryFnParams ? prepareQueryParam(queryFnParams) : {}),
        }),
        select: response => response.data,
    });
    useEffect(() => {
        setPagination(prevPagination => ({
            ...prevPagination,
            pageIndex: 0,
        }));
    }, [searchInput]);
    const dataList = useMemo(() => data || [], [data]);
    const pageCounts = (dataList?.count ?? 0) / pageSize;
    const showPagination = dataList?.results?.length >= 10;
    const table = useReactTable({
        data: dataList?.results ?? defaultData,
        columns,
        pageCount: Number.isNaN(pageCounts) ? -1 : Number(Math.ceil(pageCounts)),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: searchInput,
            pagination,
        },
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        manualPagination: true,
        debugTable: true,
    });
    if (isLoading) {
        return _jsx(TableSkeleton, {});
    }
    if (isError) {
        return (_jsx("div", { children: isError && _jsxs("span", { children: ["Error: ", error.message] }) }));
    }
    return (_jsxs(FlexColumn, { className: "naxatw-gap-2", children: [_jsxs(Table, { className: "", children: [_jsx(TableHeader, { children: table.getHeaderGroups().map(headerGroup => (_jsx(TableRow, { children: headerGroup.headers.map(header => (_jsx(TableHead, { onClick: header.column.getToggleSortingHandler(), children: !header.isPlaceholder && (_jsxs(FlexRow, { className: "naxatw-cursor-pointer naxatw-items-center", children: [flexRender(header.column.columnDef.header, header.getContext()), header.column.columnDef.accessorKey.startsWith('icon') ? null : (_jsx(Icon, { name: header.column.getIsSorted()
                                                ? 'expand_more'
                                                : 'expand_less' }))] })) }, header.id))) }, headerGroup.id))) }), _jsx(TableBody, { children: table.getRowModel().rows?.length ? (table.getRowModel().rows.map(row => (_jsx(TableRow, { "data-state": row.getIsSelected() && 'selected', children: row.getVisibleCells().map(cell => (_jsx(TableCell, { children: cell.getValue() !== null
                                    ? flexRender(cell.column.columnDef.cell, cell.getContext())
                                    : '-' }, cell.id))) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "naxatw-text-center", children: "No Data found." }) })) })] }), showPagination && _jsx(DataTablePagination, { table: table })] }));
}
