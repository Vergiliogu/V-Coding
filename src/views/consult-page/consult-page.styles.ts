import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 40px;
`;

export const ContentContainer = styled.div`
    overflow-x: auto;
`;

export const FilterBlockContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    &:not(:last-of-type) {
        padding-bottom: 30px;
    }
    
    @media (max-width: 640px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const AddFilterButton = styled.button`
    border: none;
    padding: 10px 12px;
    border-radius: 6px;
    height: fit-content;
    margin-left: 10px;
    font-weight: 600;

    @media (max-width: 640px) {
        margin: 0 0 10px;
    }
`;

export const RemoveFilterButton = styled(AddFilterButton)`
    background-color: red;
    color: white;
`;

export const ApplyFilters = styled(AddFilterButton)`
    margin: 20px 0;
    width: 160px;
`;
