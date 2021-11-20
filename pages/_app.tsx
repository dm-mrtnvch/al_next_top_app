import '../styles/globals.css';
import {AppProps} from "next/dist/shared/lib/router/router";
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
           <title>fdfdf title</title>
            <link key={1} rel="icon" href="/favicon2.ico"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp;
