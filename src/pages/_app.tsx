import { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import { GlobalStyles } from '../styles/theme/global'
import { darkTheme, lightTheme } from '../styles/theme/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_NAME}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <Layout>
                    <GlobalStyles />
                    <button onClick={toggleTheme}>
                        <Image
                            alt="logo"
                            src="/statics/images/logo/logo.svg"
                            width={100}
                            height={100}
                        />
                    </button>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}
