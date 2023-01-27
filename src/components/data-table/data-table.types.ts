import { MockDataKeysProps, MockDataProps } from "../../mock-data/mock-data.types";

export type DataTableProps = {
    data: MockDataProps[]
}

export type SortProps = {
    column: MockDataKeysProps;
    order: "asc" | "desc";
}