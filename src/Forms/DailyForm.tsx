// base
import React from 'react'
import {useForm, Controller} from 'react-hook-form'

// components
import InputComponent from '../components/FormComponents/Input'
import SelectComponent from '../components/FormComponents/Select'
import {Button} from 'antd'
import 'antd/dist/antd.css'
import {InputNumber} from 'antd';

// helpers
import {addPurchase} from '../services/purchase'
import categories from "../helpers/categories";

interface InputInterface {
    category: string;
    place: string,
    price: number
}

const DailyForm = () => {
    const form = useForm();
    const {control, handleSubmit, reset} = form;

    const onSubmit = (values: InputInterface) => {
        addPurchase(values.place, values.category, values.price)
            .then(() => reset(({})))
            .catch(er => console.log(er))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    style={{
                        height: '100%',
                        padding: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '24px'
                    }}
                >
                    <Controller
                        name="category"
                        control={control}
                        render={({field}) => <SelectComponent options={categories} placeholder="Category..." field={field}/>}
                    />
                    <Controller
                        name="place"
                        control={control}
                        render={({field}) => <InputComponent placeholder="Place..." field={field}/>}
                    />
                    <div style={{minWidth: '200px'}}>
                        <Controller
                            name="price"
                            control={control}
                            render={({field}) => <InputNumber {...field}/>}
                        />
                    </div>
                </div>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default DailyForm

