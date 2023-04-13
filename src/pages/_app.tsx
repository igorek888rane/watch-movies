import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {createReduxStore} from "@/store/store";


const store = createReduxStore()

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
