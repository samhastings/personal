import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en' className='font-body leading-normal antialiased text-gray-900 bg-gray-100'>
                <Head>
                    <meta name='robots' content='noindex, nofollow' />
                </Head>
                <body className='min-h-screen'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
