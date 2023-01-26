import { MockDataKeysProps } from "../../mock-data/mock-data.types";

export type OptionProps = {
    label: string;
    value: string;
}

export type SelectFilterProps = {
    options: OptionProps[];
    defaultLabel: string;
    onChange: (option: MockDataKeysProps) => void;
}