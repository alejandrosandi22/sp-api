import Head from 'next/head';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Alejandro Sandí' />
        <meta name='description' content='SP-API' />
        <title>SP-API</title>
      </Head>
      {children}
    </>
  );
}
