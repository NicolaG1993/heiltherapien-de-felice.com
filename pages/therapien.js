// import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Therapien() {
    return (
        <main>
            <Head>
                <title>Ganzheitliche Therapieformen</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Therapien" />
            </Head>
            <h1>Therapien</h1>
            <div className="content">
                <ul>
                    <li>
                        <Link href="/therapien/autonome-regulationsdiagnostik">
                            Autonome Regulationsdiagnostik
                        </Link>
                    </li>
                    <li>
                        <Link href="/therapien/psychokinesiologie">
                            Psychokinesiologie
                        </Link>
                    </li>
                    <li>
                        <Link href="/therapien/mentalfeldtherapie">
                            Mentalfeldtherapie
                        </Link>
                    </li>
                    <li>
                        <Link href="/therapien/systemische-familienaufstellung">
                            Systemische Familienaufstellung
                        </Link>
                    </li>
                    <li>
                        <Link href="/therapien/energiearbeit">
                            Energiearbeit
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}
