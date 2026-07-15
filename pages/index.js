import Head from "next/head";
import Image from "next/image";

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
                        src={"/assets/portrait.jpeg"}
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
                        Mentalfeldtherapie nach Dr. Klinghardt (Institut für
                        Neurobiologie, Dr. Klinghardt – INK)
                    </li>
                    <li>
                        Geprüfte INK-Therapeutin und Seminarleitung für ART und
                        PK
                    </li>
                    <li>
                        Therapeutin für Systemische Familienaufstellung mit
                        erweitertem Zertifikat (Wieslocher Institut für
                        systemische Lösungen – WISL)
                    </li>
                    <li>
                        <i>deltaCure</i> Praktizierende und Lehrerin
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

                <div className="video-section" aria-label="Video Vimeo">
                    <a
                        href="https://vimeo.com/ondemand/klinghardttalkcollection/1204677983"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>
                            🎙️ DonnersTalk: Dr. Klinghardt live in Kißlegg bei
                            PK3 - Interview mit Angelika De Felice (26. Juni
                            2026)
                        </h3>
                    </a>
                    {/* <div className="video-box">
                        <iframe
                            src="https://player.vimeo.com/video/1204663476?h=1c874305ce"
                            title="Vimeo video"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            allowFullScreen
                        />
                    </div> */}
                </div>
            </div>
        </main>
    );
}
