import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en' className='font-body leading-normal text-white antialiased bg-purple-900'>
                <Head>
                    <meta name='robots' content='noindex, nofollow' />
                </Head>
                <body className='p-8 sm:p-12 min-h-screen'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
