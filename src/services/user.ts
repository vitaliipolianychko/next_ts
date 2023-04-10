import clientApi from '../helpers/clientApi'
import {AxiosResponse} from "axios";
import {IUser} from "./auth";

export const getUsers = ():Promise<AxiosResponse<IUser[]>> => {
    return clientApi.get<IUser[]>('/users')
};
