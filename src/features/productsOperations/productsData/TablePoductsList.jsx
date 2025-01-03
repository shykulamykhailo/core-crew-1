import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import {
    BodyCell,
    BodyRow,
    ButtonsContainer,
    HeaderCell,
    HeaderRow,
    Resizer,
    TableOptions,
    TablePagination,
    TableWrapper,
} from '../../../styles/TableProductsList.styles';
import { useSelector } from 'react-redux';
import Button from '../../../ui/Button';
import GetDataButton from '../../../ui/GetDataButton';
import { useState } from 'react';
import TableProductsFilter from './TableProductsFilter';
import { FaSort } from 'react-icons/fa';
import {
    HiOutlineSortAscending,
    HiOutlineSortDescending,
} from 'react-icons/hi';

const columns = [
    {
        accessorKey: 'productName',
        header: 'Product Name',
        size: 400,
        cell: (props) => <p>{props.getValue()}</p>,
        enableColumnFilter: true,
        filterFn: 'includesString',
    },
    {
        accessorKey: 'category',
        header: 'Category',
        size: 200,
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'price_per_unit',
        header: 'Price',

        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'quantity',
        header: 'Quantity',
        size: 150,
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'unit',
        header: 'Unit',
        cell: (props) => <p>{props.getValue()}</p>,
    },
];

function TablePoductsList() {
    const [columnFilters, setColumnFilters] = useState([
        {
            id: 'productName',
            value: '',
        },
    ]);

    const { items } = useSelector((store) => store.products);

    const table = useReactTable({
        data: items,
        columns,
        state: {
            columnFilters,
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        columnResizeMode: 'onChange',
    });
    return (
        <div>
            <TableOptions>
                <TableProductsFilter
                    columnFilters={columnFilters}
                    setColumnFilters={setColumnFilters}
                />
                <GetDataButton />
            </TableOptions>
            <TableWrapper>
                {table.getHeaderGroups().map((headerGroup) => (
                    <HeaderRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <HeaderCell
                                key={header.id}
                                width={header.getSize()}
                            >
                                {header.column.columnDef.header}
                                {header.column.getCanSort() && (
                                    <FaSort
                                        fontSize={13}
                                        onClick={header.column.getToggleSortingHandler()}
                                    />
                                )}
                                {
                                    {
                                        asc: <HiOutlineSortAscending />,
                                        desc: <HiOutlineSortDescending />,
                                    }[header.column.getIsSorted()]
                                }
                                <Resizer
                                    onMouseDown={header.getResizeHandler()}
                                    onTouchStart={header.getResizeHandler()}
                                />
                            </HeaderCell>
                        ))}
                    </HeaderRow>
                ))}
                {table.getRowModel().rows.map((row) => (
                    <BodyRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <BodyCell
                                key={cell.id}
                                width={cell.column.getSize()}
                            >
                                {cell.getValue()}
                            </BodyCell>
                        ))}
                    </BodyRow>
                ))}
            </TableWrapper>
            <TablePagination>
                <span>
                    Page {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                </span>
                <ButtonsContainer>
                    <Button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </Button>
                    <Button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </Button>
                </ButtonsContainer>
            </TablePagination>
        </div>
    );
}

export default TablePoductsList;
