import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => 
          console.log(`script loaded correctly, window.FB has been populated :${window.FB}`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/profile.png"
        height={144}
        width={144}
        alt="fono"
      />
    </Layout>
  );
}
