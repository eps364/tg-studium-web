import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect } from 'react'
import Layout from '../components/Layout'

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode)
            jssStyles.parentNode.removeChild(jssStyles)
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
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
