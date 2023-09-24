// base
import React from 'react'
import {useForm, Controller} from 'react-hook-form'

// components
import InputComponent from '../components/FormComponents/Input'
import SelectComponent from '../components/FormComponents/Select'
import {Button} from 'antd'
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '16px',
                        gap: '24px'
                    }}
                >
                    <div style={{minWidth: '300px'}}>
                        <Controller
                            name="category"
                            control={control}
                            render={({field}) => <SelectComponent options={categories} placeholder="Category..."
                                                                  field={field}/>}
                        />
                    </div>
                    <Controller
                        name="place"
                        control={control}
                        render={({field}) => <InputComponent placeholder="Place..." field={field}/>}
                    />
                    <div style={{minWidth: '200px'}}>
                        <Controller
                            name="price"
                            control={control}
                            render={({field}) => <InputNumber placeholder="Price..." {...field}/>}
                        />
                    </div>

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DailyForm

