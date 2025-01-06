import {ChangeEvent} from "react";
import {PostType} from "../../PostItem.tsx";

export type OptionValue = {
    optionValue: string
    optionTitle: string
}

export type SortKeyType = keyof PostType

type PropsType = {
    selectedSort: keyof PostType | ''
    defaultValue: string
    onChange: (sortKey: SortKeyType) => void
    options: OptionValue[]
}
export const CustomSelect = ({selectedSort, options, onChange}: PropsType) => {

    const sortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const sortKey = e.currentTarget.value as SortKeyType;
        if (sortKey) {
            onChange(sortKey)
        }
    }

    return (
        <select onChange={sortHandler} value={selectedSort}>
            <option disabled>Select sorting:</option>
            {
                options.map(opt => {
                    return (
                        <option key={opt.optionValue} value={opt.optionValue}>{opt.optionTitle}</option>
                    )
                })
            }
        </select>
    );
};
