import React, {createContext} from 'react';
import Head from 'next/head';
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// hooks
import useProvideAuth from "../src/hooks/useUser";
import {IUser} from "../src/services/auth";
import {FormValues} from "../src/components/DailyComponent";

interface IAuthContext {
    onLogin: (data: FormValues) => void,
    onLogout: () => void,
    user: IUser
}

export const AuthContext = createContext<IAuthContext | null>(null);

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const queryClient = new QueryClient();

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const userAuth: IAuthContext = useProvideAuth();
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => (
        <>
            <Head>
                <title>Cash assistant</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <AuthContext.Provider value={userAuth}>
                {page}
            </AuthContext.Provider>
        </>
    ));

    return getLayout(
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}
