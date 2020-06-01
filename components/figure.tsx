import React from 'react';
import Grid, { Main, Wide } from './grid';

export default function Figure({ children, caption }: {
    children: React.ReactNode,
    caption?: React.ReactNode,
}) {
    return (
        <figure>
            {children}
            <Main>
                <figcaption className='pt-3 text-sm text-gray-600'>
                    <Grid>
                        <Main>{caption}</Main>
                    </Grid>
                </figcaption>
            </Main>
        </figure>
    );
}
