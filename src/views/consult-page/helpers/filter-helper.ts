import { FilterDataProps } from "../consult-page.types"
import { MockDataProps } from "../../../mock-data/mock-data.types"

type ApplyFilterProps = (
    data: MockDataProps[],
    filters: FilterDataProps[]
) => MockDataProps[];

export const applyFilter: ApplyFilterProps = (data, filters) => {
    const filteredData = data.filter(dataObj => {

        for (let i = 0, range = filters.length; i < range; i++) {
            const filterField = filters[i].field;
            const filterSearch = filters[i].search.toLowerCase();
            if (!new RegExp(filterSearch).test((dataObj[filterField] || "").toLowerCase())) {
                return false;
            }
        }

        return true;
    })

    return filteredData;
}