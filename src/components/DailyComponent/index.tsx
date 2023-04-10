// base
import React, { useContext } from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";

// components
import {Button} from "antd";
import InputComponent from "../FormComponents/Input";
import {AuthContext} from "../../../pages/_app";

export type FormValues = {
    email: string;
    password: string;
};

const DailyComponent = () => {
    const form = useForm();
    const authData = useContext(AuthContext);
    const {control, handleSubmit} = form;

    const onSubmit: SubmitHandler<FormValues> = data => authData?.onLogin(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                style={{
                    height: '100%',
                    padding: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '50px'
                }}
            >
                <Controller
                    name="email"
                    control={control}
                    render={({field}) => <InputComponent field={field} placeholder="email"/>}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({field}) => <InputComponent field={field} placeholder="password"/>}
                />
            </div>

            <Button type="primary" htmlType="submit">
                Login
            </Button>
        </form>
    );
};

export default DailyComponent;
