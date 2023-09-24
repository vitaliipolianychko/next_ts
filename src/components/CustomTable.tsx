import React from 'react';

// antd
import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';

// interfaces
import {IPurchase} from '../services/purchase'

const columns: ColumnsType<IPurchase> = [
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Place',
        dataIndex: 'place',
        key: 'place',
    },
    {
        title: 'Price(zl)',
        dataIndex: 'price',
        key: 'price',
    }
];

const CustomTable = ({ data }: {data: IPurchase[]}) => {
    return (
        <Table columns={columns} dataSource={data}/>
    );
};

export default CustomTable;
