import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';

export default function App({Component, pageProps}: AppProps) {
	return <>
		<Head>
			<title>Некст-жс сайтик</title>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link
				href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Roboto:wght@700&display=swap"
				rel="stylesheet"/>
		</Head>
		<Component {...pageProps} />
	</>;
}
