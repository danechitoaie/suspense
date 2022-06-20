import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const darkColorScheme = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <>
            <Head>
                <title>OSF Digital - Round The World Challenge (2022)</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{ colorScheme: "light" }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}
