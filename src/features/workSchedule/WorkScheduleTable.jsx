import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { format, getDaysInMonth } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import {
    ScheduleBodyCell,
    ScheduleBodyRow,
    ScheduleHeaderCell,
    ScheduleHeaderRow,
    TableContainer,
    TableOptions,
    TableWrapper,
} from '../../styles/TableWorkSchedule.styles';
import { useDispatch, useSelector } from 'react-redux';
import { loadSchedule, saveSchedule } from './workScheduleSlice';
import ScheduleDayStatus from './ScheduleDayStatus';
import Button from '../../ui/Button';

function WorkScheduleTable() {
    const dispatch = useDispatch();
    const { schedule, status } = useSelector((state) => state.workSchedule);

    const [month, setMonth] = useState(new Date());

    useEffect(() => {
        const formattedMonth = format(month, 'yyyy-MM');
        dispatch(loadSchedule(formattedMonth));
    }, [month, dispatch]);

    const daysArray = useMemo(() => {
        const daysInMonth = getDaysInMonth(month);
        return Array.from({ length: daysInMonth }, (_, i) => ({
            day: i + 1,
            weekday: format(
                new Date(month.getFullYear(), month.getMonth(), i + 1),
                'EEE'
            ),
        }));
    }, [month]);

    const handleSave = () => {
        dispatch(saveSchedule(schedule));
    };

    const data = useMemo(() => schedule, [schedule]);

    const columns = useMemo(() => {
        const dayColumns = daysArray.map(({ day, weekday }) => ({
            accessorKey: `${day}`,
            header: `${day}${weekday}`,
            accessorFn: (row) => {
                return <ScheduleDayStatus row={row} day={day} />;
            },
            size: 35,
        }));

        return [
            {
                accessorKey: 'user_name',
                header: 'Name',
            },
            ...dayColumns,
        ];
    }, [daysArray]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <TableContainer>
            <TableWrapper>
                <TableOptions>
                    <div>
                        <label htmlFor="month">Choose month:</label>
                        <input
                            type="month"
                            id="month"
                            defaultValue={format(month, '2025-01')}
                            // onChange={(e) => setMonth(new Date(e.target.value))}
                        />
                    </div>
                    <Button onClick={handleSave}>Save changes</Button>
                </TableOptions>
                <div>
                    <div>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <ScheduleHeaderRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <ScheduleHeaderCell
                                        key={header.id}
                                        width={header.getSize()}
                                    >
                                        {header.column.columnDef.header}
                                    </ScheduleHeaderCell>
                                ))}
                            </ScheduleHeaderRow>
                        ))}
                    </div>
                </div>
                {table.getRowModel().rows.map((row) => (
                    <ScheduleBodyRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <ScheduleBodyCell
                                key={cell.id}
                                width={cell.column.getSize()}
                            >
                                {cell.getValue()}
                            </ScheduleBodyCell>
                        ))}
                    </ScheduleBodyRow>
                ))}
            </TableWrapper>
        </TableContainer>
    );
}

export default WorkScheduleTable;
