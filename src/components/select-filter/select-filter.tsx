import * as T from "./select-filter.types"
import Select from 'react-select'
import { MockDataKeysProps } from "../../mock-data/mock-data.types";

const SelectFilter = (props: T.SelectFilterProps) => {
    const { options, defaultLabel, onChange } = props

    const defaultOption = {label: defaultLabel, value: ""}

    return (
        <Select
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: "40px",
                    minWidth: "160px",
                    maxWidth: "200px",
                    fontSize: "14px",
                    ":focus": {
                        outline: "none"
                    }
                })
            }}
            defaultValue={defaultOption}
            onChange={(option) => onChange((option?.value || "") as MockDataKeysProps)}
            options={[defaultOption, ...options]}
        />
    );
}

export default SelectFilter;
