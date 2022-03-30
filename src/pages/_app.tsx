import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import Layout from '../components/Layout'
import '../styles/global.css'
import {
    darkTheme,
    GlobalStyles,
    lightTheme,
} from '../styles/themes/ThemeConfig'

export default function MyApp({ Component, pageProps }: AppProps) {
    const [isMounted, setIsMounted] = useState(false)
    const darkmode = useDarkMode(true)
    const theme = darkmode.value ? darkTheme : lightTheme
    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_NAME}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Layout>
                    <GlobalStyles />
                    <button onClick={darkmode.toggle}>Switch Mode</button>
                    <button onClick={darkmode.enable}>Dark Mode</button>
                    <button onClick={darkmode.disable}>Light Mode</button>

                    {isMounted && <Component {...pageProps} />}
                </Layout>
            </ThemeProvider>
        </>
    )
}
