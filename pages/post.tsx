import React, { Fragment } from 'react';
import Head from 'next/head';
import Grid, { Divider, Main, Wide } from '../components/grid';
import Page from '../components/page';
import Code from '../components/code';
import Figure from '../components/figure';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Sam Hastings</title>
            </Head>
            <Page>
                <Grid>
                    <Main>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ex, dignissim eget nisl quis, venenatis hendrerit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam diam ac ante laoreet, lobortis elementum neque accumsan. Curabitur ut pulvinar sem, sit amet venenatis urna.</p>
                        <p>Praesent aliquam mollis leo, condimentum faucibus lectus dapibus nec. Sed porttitor ligula varius, vulputate orci quis, condimentum risus. Ut tincidunt augue velit, eget interdum dolor consequat vel. Sed interdum posuere nibh, a gravida orci vulputate nec. Fusce vel est eget urna cursus facilisis.</p>
                    </Main>
                    <Wide>
                        <Figure caption='Some text describing the above code'>
                            <Code language='css' lines={`
.wrapper {
    max-width: 40em;
}
                        `} />
                        </Figure>
                    </Wide>
                    <Main>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ex, dignissim eget nisl quis, venenatis hendrerit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam diam ac ante laoreet, lobortis elementum neque accumsan. Curabitur ut pulvinar sem, sit amet venenatis urna.</p>
                        <p>Praesent aliquam mollis leo, condimentum faucibus lectus dapibus nec. Sed porttitor ligula varius, vulputate orci quis, condimentum risus. Ut tincidunt augue velit, eget interdum dolor consequat vel. Sed interdum posuere nibh, a gravida orci vulputate nec. Fusce vel est eget urna cursus facilisis.</p>
                    </Main>
                    <Divider />
                    <Main>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa ex, dignissim eget nisl quis, venenatis hendrerit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam diam ac ante laoreet, lobortis elementum neque accumsan. Curabitur ut pulvinar sem, sit amet venenatis urna.</p>
                        <p>Praesent aliquam mollis leo, condimentum faucibus lectus dapibus nec. Sed porttitor ligula varius, vulputate orci quis, condimentum risus. Ut tincidunt augue velit, eget interdum dolor consequat vel. Sed interdum posuere nibh, a gravida orci vulputate nec. Fusce vel est eget urna cursus facilisis.</p>
                    </Main>
                </Grid>
            </Page>
        </Fragment>
    );
}
