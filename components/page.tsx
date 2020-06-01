import React from 'react';

export default function Page({ children }: {
    children: React.ReactNode,
}) {
    return (
        <div className='px-6 pt-8 pb-24 sm:px-8 md:pt-24 md:px-12'>
            <div className='max-w-4xl'>
                {children}
            </div>
        </div>
    );
}
