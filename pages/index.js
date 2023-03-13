import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

export default function Home() {
    return (
        <main id="Home">
            <Head>
                <title>
                    Heiltherapien De Felice • Ganzheitliche Therapieformen
                </title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Heiltherapien De Felice • Ganzheitliche Therapieformen"
                />
            </Head>

            {/* <h1>Ganzheitliche Therapieformen</h1> */}
            <div className="content">
                <div
                    className="image-box left"
                    style={{ background: "#41555893" }}
                >
                    <Image
                        src={"/assets/portrait.png"}
                        alt={"Portrait"}
                        fill
                        style={{
                            objectFit: "contain",
                            objectPosition: "left",
                        }}
                    />
                </div>

                <ul>
                    <li>Heilpraktikerin</li>
                    <li>
                        Praxistätigkeit als Therapeutin für Autonome
                        Regulationsdiagnostik und Psychokinesiologie,
                        Mentalfeldtherapie nach Dr. Klinghardt ( Institut für
                        Neurobiologie, Dr. Klinghardt – INK)
                    </li>
                    <li>
                        Therapeutin für Systemische Familienaufstellung mit
                        erweitertem Zertifikat (Wieslocher Institut für
                        systemische Lösungen – WISL)
                    </li>
                </ul>
                <div className="quote-wrap">
                    <p>
                        „Das schönste und tiefste Gefühl, das wir erfahren
                        können, ist die Wahrnehmung des Mystischen. Sie ist die
                        Quelle aller Wissenschaft….“
                    </p>
                    <p>Albert Einstein</p>
                </div>
            </div>
        </main>
    );
}
