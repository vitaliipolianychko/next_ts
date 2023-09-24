import clientApi from '../helpers/clientApi'
import {AxiosResponse} from "axios";

export interface IPurchase {
    place: string,
    category: string,
    price: number,
    userId: string
}

interface IParams {
  start: string | null,
  end: string | null
}

export const addPurchase = async (place: string, category: string, price: number): Promise<AxiosResponse<IPurchase>> => {
    return clientApi.post<IPurchase>('/purchase', {place, category, price})
};

export const getPurchase = async (params: IParams): Promise<AxiosResponse<IPurchase[]>> => {
    return clientApi.get<IPurchase[]>('/purchases', { params })
};
