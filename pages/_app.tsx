import React from 'react';
import { AppProps } from 'next/app';
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
// import xml from 'react-syntax-highlighter/dist/cjs/languages/hljs/xml';
import '../styles/global.css';

// SyntaxHighlighter.registerLanguage('css', css);
// SyntaxHighlighter.registerLanguage('xml', xml);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    );
}
