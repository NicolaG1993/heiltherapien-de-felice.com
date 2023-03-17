import Head from "next/head";

export default function Error404() {
    return (
        <main>
            <Head>
                <title>404: Inhalt nicht gefunden</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="404: Inhalt nicht gefunden"
                />
            </Head>
            <h1>Inhalt nicht gefunden</h1>
        </main>
    );
}
