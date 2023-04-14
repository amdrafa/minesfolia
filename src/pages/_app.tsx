import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Head from "next/head";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Mines Lucrativo</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e2124" />
				<meta name="msapplication-TileColor" content="#1e2124" />
				<meta name="theme-color" content="#1e2124" />

				<meta name="description" content="Mines Lucrativo" />

				<meta name="keywords" content="Mines Lucrativo, apostas, f12.bet" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
				<meta property="og:title" content="Mines Lucrativo" />
				<meta property="og:description" content="Mines Lucrativo" />
				<meta property="og:image" content={process.env.NEXT_PUBLIC_BASE_URL + "/assets/og-image.png"} />
				<meta
					property="og:image:secure_url"
					content={process.env.NEXT_PUBLIC_BASE_URL + "/assets/og-image.png"}
				/>
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />

				<meta property="og:site_name" content="Mines Lucrativo" />

				<meta property="twitter:card" content="summary_large_image" />
				

				<meta property="twitter:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
				<meta property="twitter:title" content="Mines Lucrativo" />
				<meta property="twitter:description" content="Mines Lucrativo" />
				<meta property="twitter:image" content={process.env.NEXT_PUBLIC_BASE_URL + "/assets/og-image.png"} />
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
