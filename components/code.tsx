import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Code({ language, lines }: {
    language: string,
    lines: string | string[],
}) {
    return (
        <figure className='text-xs sm:text-sm'>
            <SyntaxHighlighter language={language} style={style} customStyle={{
                padding: '1em',
            }}>
                {Array.isArray(lines) ? lines.join('\n') : lines.trim()}
            </SyntaxHighlighter>
        </figure>
    );
}
