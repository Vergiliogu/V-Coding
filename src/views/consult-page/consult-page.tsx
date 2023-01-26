import { useEffect, useState } from "react";
import FilterBlock from "../../components/filter-block";
import { v4 as uuid4 } from "uuid"
import * as T from "./consult-page.types"
import { MockDataKeysProps, MockDataProps } from "../../mock-data/mock-data.types";
import mockJsonData from "../../mock-data/data.json";
import { applyFilter } from "./helpers/filter-helper";
import DataTable from "../../components/data-table";

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

    const handleComplete = () => {
        const result = applyFilter(mockJsonData, filterBlocks)
        setCurrentData(result)
    }

    return (
        <div>
            <div className="header">
                {filterBlocks.map(filterData => (
                    <FilterBlock key={filterData.id} onChange={(search, field) => handleChange(search, field, filterData.id)} />
                ))}
                <button onClick={addNewFilterBlock}>Add new</button>
                <br />
                <button onClick={handleComplete}>Complete</button>
                <DataTable data={currentData} />
            </div>
        </div>
    );
}

export default ConsultPage;
