import { NextPage } from 'next';
import Head from 'next/head';

interface Props {
    title: string;
}

const Seo: NextPage<Props> = (props) => {
    return (
        <Head>
            <title>{props.title} | Next Movie App</title>
        </Head>
    )
}

export default Seo;
