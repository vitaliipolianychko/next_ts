import {useState, useEffect} from 'react'
import {login, logout} from "../services/auth";
import axios, {AxiosResponse} from "axios";
import {IUser} from "../services/auth";

// interfaces
import {IAuthResponse} from "../services/auth";

export const useProvideAuth = () => {
    const [user, setUser] = useState<IUser>({});

    const checkAuth = () => {
        axios.get(`${process.env.apiUrl}/refresh`, {withCredentials: true})
            .then((res: AxiosResponse<IAuthResponse>) => {
                const {accessToken, user} = res.data;
                setUser(user);
                localStorage.setItem('token', accessToken)
            })
            .catch(er => console.log(er))
    };

    useEffect(() => {
        if (!Object.keys(user).length && localStorage.getItem('token')) {
            checkAuth();
        }
    }, []);

    const onLogout = () => {
        logout()
            .then(() => {
                localStorage.removeItem('token');
                setUser({})
            })
            .catch(er => console.log(er))
    };

    const onLogin = (values: { email: string, password: string }) => {
        login(values.email, values.password)
            .then((res: AxiosResponse<IAuthResponse>) => {
                const {accessToken, user} = res.data;
                setUser(user);
                localStorage.setItem('token', accessToken)
            })
            .catch((er) => console.log(er))
    };

    return {user, onLogin, onLogout}
};

export default useProvideAuth
