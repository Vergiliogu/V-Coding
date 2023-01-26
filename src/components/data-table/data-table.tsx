import { MockDataProps } from "../../mock-data/mock-data.types";
import { mockDataKeys } from "../../mock-data/mock-data.constants";

type DataTableProps = {
    data: MockDataProps[]
}

const DataTable = (props: DataTableProps) => {
    const { data } = props

    return (
        <table>
            <thead>
                <tr>
                    {mockDataKeys.map(key => <th key={key}>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {mockDataKeys.map(column => (
                            <td key={column}>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;