// base
import React, {useState, useMemo} from 'react';

// antd
import { Select } from 'antd';

// components
import DatePickerComponent from "../FormComponents/DatePicker";
import CustomTable from "./../CustomTable";

// react-query
import {useQuery} from "@tanstack/react-query";

// services
import {getPurchase} from "../../services/purchase";
import categories from "../../helpers/categories";

export default function PurchasePage() {
    const [state, setState] = useState({
        start: null,
        end: null
    });

    const {data = {}, isLoading} = useQuery({queryKey: ['purchase'], queryFn: () => getPurchase(state)});
    // @ts-ignore
    const {data: purchasesList = []} = data;

    const total = useMemo(() => {
        return purchasesList.reduce((prev: number, curr: object) => {
            // @ts-ignore
            return prev + curr.price
        }, 0);
    }, [purchasesList]);

    const handleChangeDate = (data: object) => {
        setState(prevState => ({ ...prevState, ...data }))
    }

    const handleChangeCategory = (value: string) => {
        setState(prevState => ({ ...prevState, category: value }))
    };

    return (
        <React.Fragment>
            <DatePickerComponent handleChange={handleChangeDate}/>
            <Select
                showSearch
                onChange={handleChangeCategory}
                style={{ width: 160 }}
                placeholder="category..."
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={categories}
            />
            <p>total spends: <b>{total}zl</b></p>
            <div style={{marginTop: '16px'}}>
                {isLoading ? <p>Loading ...</p> : (
                    <CustomTable data={purchasesList}/>
                )}
            </div>
        </React.Fragment>
    )

}
