import { MockDataKeysProps } from "../../mock-data/mock-data.types";

export type FilterBlockProps = {
    onChange: (search: string, field: MockDataKeysProps) => void;
}