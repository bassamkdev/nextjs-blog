import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout'
export default function FirstPost(params) {
    return(
        <Layout>
            <Head>
                <title>First post</title>
            </Head>

            <Image
                src="/images/profile.JPG"
                height={144}
                width={120}
                alt="bassam image"
            />
            <h1>
                First Post
            </h1>
            <h2>
                <Link href="/">
                    <a style={{color: 'red'}}>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}