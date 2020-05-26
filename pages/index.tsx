import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Sam Hastings</title>
            </Head>
            <div className='max-w-3xl'>
                <h1 className='mb-6 text-3xl text-purple-100'>Sam Hastings</h1>
                <p className='mb-4 text-xl text-purple-200'>I write code for the web. I currently work at <a href='https://weareactivation.com/' className='underline text-purple-300 hover:text-white focus:text-white transition duration-200 ease-in-out'>Activation</a> in Bristol. I love The Smiths, cocktails, Lego, space, dogs, Jurassic Park, and terrible puns.</p>
                <p className='text-xl text-purple-200'>One day, I may make this into a proper website with actual content. For now, you can find me on <a href='https://www.instagram.com/samhastings87/' className='underline text-purple-300 hover:text-white focus:text-white transition duration-200 ease-in-out'>Instagram</a>. I also have a <a href='https://twitter.com/music_puns' className='underline text-purple-300 hover:text-white focus:text-white transition duration-200 ease-in-out'>Music Puns</a> account on Twitter.</p>
            </div>
        </Fragment>
    );
}
