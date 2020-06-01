import React from 'react';

export default function Grid({ children }: {
    children: React.ReactNode,
}) {
    return (
        <div className='md:grid md:grid-cols-12 row-gap-10'>
            {children}
        </div>
    );
}

export function Main({ children }: {
    children: React.ReactNode,
}) {
    return (
        <div className='md:col-start-3 md:col-end-13 lg:col-end-12 space-y-5'>
            {children}
        </div>
    );
}

export function Wide({ children }: {
    children: React.ReactNode,
}) {
    return (
        <div className='md:col-span-12'>
            {children}
        </div>
    );
}

export function Divider() {
    return (
        <div className='md:col-start-3 md:col-end-13'>
            <div className='h-px bg-gray-400' />
        </div>
    );
}
