import React from 'react';

import { Input } from 'antd'

interface InputInterface {
    field: object;
    placeholder: string
}

const InputComponent = ({ field, placeholder }:InputInterface) => {
    return (
        <Input {...field} placeholder={placeholder}/>
    );
};

export default InputComponent;
