import styled from "styled-components";

export const TextInput = styled.input.attrs({
    type: "text",
    placeholder: "Search"
})`
    width: 200px;
    height: 40px;
    border: 1px solid hsl(0, 0%, 80%);
    padding: 0 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 20px;
    
    @media (max-width: 640px) {
        margin: 10px 0px;
    }

    &:focus {
        outline: 1.5px solid #2684ff;
    }
`