import clientApi from '../helpers/clientApi'
import {AxiosResponse} from "axios";

export interface IPurchase {
    place: string,
    category: string,
    price: number,
    userId: string
}

export const addPurchase = async (place: string, category: string, price: number): Promise<AxiosResponse<IPurchase>> => {
    return clientApi.post<IPurchase>('/purchase', {place, category, price})
};

export const getPurchase = async (): Promise<AxiosResponse<IPurchase[]>> => {
    return clientApi.get<IPurchase[]>('/purchases')
};
