import React from 'react';
import { format } from 'date-fns'

import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const DatePickerComponent = (props: any) => {
    const { handleChange } = props;

    const onChange = (data: any) => {
        if (data) {
            const start = format(new Date(data[0]), 'yyyy-MM-dd');
            const end = format(new Date(data[1]), 'yyyy-MM-dd');
            handleChange({ start, end })
        }
    };

    return (
        <RangePicker onChange={onChange} format="YYYY/MM/DD"/>
    );
};

export default DatePickerComponent;
