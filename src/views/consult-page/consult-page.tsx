import { useEffect, useState } from "react";
import FilterBlock from "../../components/filter-block";
import { v4 as uuid4 } from "uuid"
import * as T from "./consult-page.types"
import { MockDataKeysProps, MockDataProps } from "../../mock-data/mock-data.types";
import mockJsonData from "../../mock-data/data.json";
import { applyFilter } from "./helpers/filter-helper";
import DataTable from "../../components/data-table";
import * as S from "./consult-page.styles"

const ConsultPage = () => {
    const [filterBlocks, setFilterBlocks] = useState<T.FilterDataProps[]>([])
    const [currentData, setCurrentData] = useState<MockDataProps[]>(mockJsonData)

    useEffect(() => {
        addNewFilterBlock()
    }, [])

    const addNewFilterBlock = () => {
        const newBlock: T.FilterDataProps = {
            id: uuid4(),
            search: "",
            field: ("" as MockDataKeysProps),
        }
        setFilterBlocks(prev => [...prev, newBlock])
    }

    const handleChange = (search: string, field: MockDataKeysProps, id: string) => {
        const filters = filterBlocks.map(filterObj => {
            if (filterObj.id !== id)
                return filterObj
            return { id, search, field }
        })
        setFilterBlocks(filters)
    }

    const handleApplySearch = () => {
        const result = applyFilter(mockJsonData, filterBlocks)
        setCurrentData(result)
    }

    const handleRemoveFilter = (filterId: string) => {
        const filters = filterBlocks.filter(filterObj => filterObj.id !== filterId)
        setFilterBlocks(filters)
    }

    return (
        <S.PageContainer>
            <div>
                {filterBlocks.map((filterData, index) => (
                    <S.FilterBlockContainer key={filterData.id}>
                        <FilterBlock onChange={(search, field) => handleChange(search, field, filterData.id)} />
                        {index === filterBlocks.length - 1 &&
                            <S.AddFilterButton disabled={filterData.search === ""} onClick={addNewFilterBlock}>
                                Add new filter
                            </S.AddFilterButton>
                        }
                        {index === filterBlocks.length - 1 && index > 0 &&
                            <S.RemoveFilterButton onClick={() => handleRemoveFilter(filterData.id)}>
                                Remove Filter
                            </S.RemoveFilterButton>
                        }
                    </S.FilterBlockContainer>
                ))}

                <S.ApplyFilters onClick={handleApplySearch}>
                    Apply filters
                </S.ApplyFilters>
            </div>
            <S.ContentContainer>
                <DataTable data={currentData} />
            </S.ContentContainer>
        </S.PageContainer>
    );
}

export default ConsultPage;
