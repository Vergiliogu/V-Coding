import * as S from "./text-filter.styles"
import * as T from "./text-filter.types"

const TextFilter = (props: T.TextFilterProps) => {
    const { onChange } = props

    return (
        <S.TextInput onChange={e => onChange(e.target.value)} />
    );
}

export default TextFilter;