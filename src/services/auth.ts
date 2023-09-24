import clientApi from '../helpers/clientApi'
import {AxiosResponse} from "axios";

export interface IUser {
    email?: string,
    id?: string,
    isActivated?: boolean
}

export interface IAuthResponse {
    refreshToken: string,
    accessToken: string,
    user: IUser
}

const registration = async (email: string, password: string): Promise<AxiosResponse<IAuthResponse>> => {
    return clientApi.post<IAuthResponse>('/registration', {email, password})
};

const logout = async (): Promise<void> => {
    return clientApi.post('/logout')
};

// @ts-ignore
const login = async (email: string, password: string): Promise<AxiosResponse<IAuthResponse>> => {
    return clientApi.post<IAuthResponse>('/login', {email, password})
};

export {login, logout, registration};
