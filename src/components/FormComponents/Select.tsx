import React from 'react';
import { Select } from 'antd';

// interfaces
import { ICategory } from "../../helpers/categories";

interface ISelect {
    options: ICategory[],
    placeholder: string,
    field: object
}

const SelectComponent = ({ options = [], placeholder, field }: ISelect) => {
    return (
        <Select
            {...field}
            showSearch
            style={{ width: 160 }}
            placeholder={placeholder}
            optionFilterProp="children"
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={options}
        />
    );
}

export default SelectComponent;
