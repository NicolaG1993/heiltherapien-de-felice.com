import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Links() {
    return (
        <main id="Links">
            <Head>
                <title>Links</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Links" />
            </Head>
            <h1>Links</h1>
            <div className="content">
                <div className="linkWrap">
                    {/* <p>Schweiz:</p> */}
                    <a
                        href="https://www.ink.ag/therapeuten/schweiz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="caption-box"
                    >
                        <div>
                            <Image
                                src={"/assets/ink-logo.png"}
                                alt={
                                    "INK-Institut für Neurobiologie nach Dr. Klinghardt"
                                }
                                fill
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </div>

                        <span>
                            INK-Institut für Neurobiologie nach Dr. Klinghardt
                        </span>
                    </a>
                </div>

                <div className="linkWrap">
                    {/* <p>Deutschland:</p> */}
                    <a
                        href="https://www.wieslocher-institut.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="caption-box"
                    >
                        <div>
                            <Image
                                src={"/assets/wisl-logo.png"}
                                alt={
                                    "Wieslocher Institut für systemische Lösungen"
                                }
                                fill
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </div>

                        <span>
                            Wieslocher Institut für systemische Lösungen
                        </span>
                    </a>
                </div>
            </div>
        </main>
    );
}
