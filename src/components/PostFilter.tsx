import {CustomInput} from "./UI/input/CustomInput.tsx";
import {CustomSelect, OptionValue} from "./UI/select/CustomSelect.tsx";
import {FilterType} from "../App.tsx";

type PropsType = {
    filter: FilterType
    setFilter: (filter: FilterType) => void
    optionValues: OptionValue[]
}

export const PostFilter = ({filter, setFilter, optionValues}: PropsType) => {

    return (
        <div>
            <CustomInput value={filter.queryValue}
                         onChange={(e) => setFilter({...filter, queryValue: e.currentTarget.value})}
                         placeholder={'Search...'}/>
            <CustomSelect options={optionValues}
                          selectedSort={filter.sortValue}
                          defaultValue={'Sort by'}
                          onChange={selectedSort => setFilter({...filter, sortValue: selectedSort})}/>
        </div>
    );
};
