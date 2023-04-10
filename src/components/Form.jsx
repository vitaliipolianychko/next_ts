import React, {useState} from "react";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import clientApi from '../helpers/clientApi';

// components
import InputComponent from './FormComponents/Input'
import {Button} from "antd";

import "antd/dist/antd.css"

interface IFormInput {
    email: string;
    password: string;
}

interface IUser {
    id: string,
    email: string,
    isActivated: boolean,
    accessToken: string,
    refreshToken: string
}

interface IData {
    data: IUser
}

const Form = () => {
    const form = useForm<IFormInput>();
    const [user, setUser] = useState({});
    console.log(user, 'user');
    const {control, handleSubmit} = form;

    const onSubmit: SubmitHandler<IFormInput> = (values: IFormInput) => {
        clientApi.post('/registration', values)
            .then((res: IData) => {
                setUser(res.data);
                const { refreshToken } = res.data;
                localStorage.setItem('token', refreshToken)
            })
            .catch((er: Error) => console.log(er))
    };

    const logout = () => {
        clientApi.post('/logout')
            .then(() => localStorage.removeItem('token'))
    };

    return (
        <>
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
                        render={({field}) => <InputComponent field={field}/>}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({field}) => <InputComponent field={field}/>}
                    />
                </div>

                <Button type="primary" htmlType="submit">
                    Primary
                </Button>
            </form>
            <Button onClick={logout}>
                Logout
            </Button>
        </>
    )
}

export default Form

