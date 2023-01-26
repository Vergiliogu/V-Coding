import { useEffect, useState } from "react";
import SelectFilter from "../select-filter";
import TextFilter from "../text-filter";
import { OptionProps } from "../select-filter/select-filter.types";
import * as S from "./filter-block.styles"
import * as T from "./filter-block.types"
import { mockDataKeys } from "../../mock-data/mock-data.constants";
import { MockDataKeysProps } from "../../mock-data/mock-data.types";

const FilterBlock = (props: T.FilterBlockProps) => {
    const { onChange, } = props

    const [options, setOptions] = useState<OptionProps[]>([])
    const [chosenField, setChosenField] = useState<MockDataKeysProps | "">("")
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        const convertLabel = (key: string): string => key[0].toUpperCase() + key.slice(1).split("_").join(" ")

        setOptions(mockDataKeys.map(key => ({ label: convertLabel(key), value: key })))
    }, [])

    useEffect(() => {
        onChange(search, (chosenField as MockDataKeysProps))
    }, [search, chosenField])

    return (
        <S.Container>
            <SelectFilter onChange={setChosenField} defaultLabel="Field" options={options} />
            <TextFilter onChange={setSearch} />
        </S.Container>
    );
}

export default FilterBlock;
