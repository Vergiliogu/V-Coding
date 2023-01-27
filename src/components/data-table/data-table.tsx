import { MockDataKeysProps } from "../../mock-data/mock-data.types";
import { mockDataKeys } from "../../mock-data/mock-data.constants";
import * as S from "./data-table.styles"
import { useState } from "react";
import * as T from "./data-table.types"


const convertLabel = (key: string): string => key[0].toUpperCase() + key.slice(1).split("_").join(" ")

const DataTable = (props: T.DataTableProps) => {
    const { data } = props

    const [sort, setSort] = useState<T.SortProps>({ column: 'email', order: 'desc' });

    const handleHeaderClick = (column: MockDataKeysProps) => {
        if (sort.column === column) {
            setSort({
                column,
                order: sort.order === 'asc' ? 'desc' : 'asc'
            });
        } else {
            setSort({
                column,
                order: 'asc'
            });
        }
    }

    const sortedData = [...data].sort((a, b) => {
        const aValue = Number(a[sort.column]) || a[sort.column]
        const bValue = Number(b[sort.column]) || b[sort.column]

        if (sort.order === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    // TODO: Add arrows to better visualization of sort.
    return (
        <S.Table cellSpacing="0" cellPadding="0">
            <S.THead>
                <tr>
                    {mockDataKeys.map(key => (
                        <th key={key} onClick={() => handleHeaderClick(key)}>
                            {convertLabel(key)}
                        </th>
                    ))}
                </tr>
            </S.THead>
            <S.TBody>
                {sortedData.map((row, index) => (
                    <tr key={index}>
                        {mockDataKeys.map(column => (
                            <td key={column}>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </S.TBody>
        </S.Table>
    );
}

export default DataTable;
