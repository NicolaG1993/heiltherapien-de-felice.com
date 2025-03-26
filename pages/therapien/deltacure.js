import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function DeltaCure() {
    return (
        <main id="Doc">
            <Head>
                <title>deltaCure</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="deltaCure" />
            </Head>

            <h1>deltaCure </h1>
            <div className="content">
                <div>
                    <div
                        className="image-box right"
                        style={{ marginBottom: "2rem" }}
                    >
                        <Image
                            src={"/assets/deltaCure.png"}
                            alt={"deltaCure "}
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <p>
                        Heilarbeit mit delta-Frequenzen auf tiefsten
                        Schwingungsebenen
                    </p>
                    <p>
                        <i>
                            „Selbstheilungskräfte werden aktiviert mit Hilfe
                            einer speziellen Meditationstechnik, danach
                            begleiten uns delta-Frequenzen auf tiefsten
                            Schwingungsebenen während des Schlafes. Die
                            deltaCure®-Technik ist, anders als andere
                            energetische Methoden, multidimensional; sie
                            eröffnet ganzheitliche und auf allen Ebenen
                            ansetzende, tiefgreifende Veränderungen mit dem
                            Ziel, Frequenzen ins Gleichgewicht zu bringen und so
                            grundlegende Disharmonien auf der Ebene von Körper,
                            Geist und Seele zu beseitigen.“
                        </i>
                    </p>
                    <p>
                        <i>Simone Thomasetti-Freymann</i>
                    </p>
                    <p>
                        <strong>
                            <a
                                href="https://www.deltacure.eu"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                siehe deltacure.eu
                            </a>
                        </strong>
                    </p>
                </div>

                {/* <p>
                    Eine sehr alte Heilkunst, die in Japan im 19. Jahrhundert
                    von Dr. Mikao Usui, einem christlichen Mönch, wiederentdeckt
                    wurde. Die Tradition des Reiki wird bereits in 2500 Jahren
                    alten Sanskrit-Sutras erwähnt.
                </p>
                <p>
                    Reiki bedeutet Universelle Lebensenergie. Das Universum ist
                    erfüllt von endloser und unerschöpflicher Energie.
                </p>
                <p>
                    Wir alle sind mit dieser Universellen Energie geboren, doch
                    im Verlauf unseres Lebens geht die Fähigkeit, auf sie
                    zurückgreifen zu können, verloren.
                </p>
                <p>
                    Die heilende Energie wird durch Auflegen der Hände der
                    Therapeutin weitergeleitet. Dadurch werden die
                    Selbstheilungskräfte geweckt.
                </p>
                <p>
                    Reiki unterstützt viele medizinische Behandlungen und wirkt
                    überall dort, wo mit den Händen berührt wird.
                </p>
                <p>
                    Reiki bringt Körper und Geist ins Gleichgewicht, wirkt auf
                    allen Ebenen. Durch Reiki erfährt man spirituelles Wachstum,
                    Umwandlung und geistige Segnungen.
                </p> */}
            </div>
        </main>
    );
}
