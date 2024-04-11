import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Seminare() {
    return (
        <main id="Seminare">
            <Head>
                <title>Seminare</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Seminare" />
            </Head>
            <h1>Seminare</h1>
            <div className="content">
                <div>
                    <Image
                        src={"/assets/brochure.png"}
                        alt={"Seminare brochure"}
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                {/* <div className="no-events">
                    <h2>Termine werden bekannt gegeben.</h2>
                </div> */}
                <div className="events">
                    <div className="event-info">
                        <p>
                            <b>Systemische Aufstellungsarbeit</b>{" "}
                            <i>am Samstag, den 20.04.2024:</i>
                        </p>
                        <div className="location">
                            <p>Ort:</p>
                            <div>
                                <p>
                                    <b>
                                        <i>EPI Park Seminar</i>
                                    </b>{" "}
                                    (Schweizerische Epilepsie-Stiftung)
                                </p>
                                <p>Park Raum 5</p>
                                <p>Bleulerstrasse 60</p>
                                <p>8008 Zürich</p>
                            </div>
                        </div>
                        <p>
                            Weitere Informationen bei Anmeldung unter:{" "}
                            <b>
                                <a href="mailto:angelicadefelice@hispeed.ch">
                                    angelicadefelice@hispeed.ch
                                </a>
                            </b>
                        </p>
                    </div>

                    <div className="separator" />

                    <div className="event-info">
                        <p>
                            <b>Systemische Aufstellungsarbeit</b>{" "}
                            <i>am Sonntag, den 14.04.2024:</i>
                        </p>
                        <div className="location">
                            <p>Ort:</p>
                            <div>
                                <p>
                                    <b>
                                        <i>Praxis für Gesundheitsfürsorge</i>
                                    </b>
                                </p>
                                <p>Simone Tomasetti-Freymann</p>
                                <p>Feldmannstraße 108</p>
                                <p>66119 Saarbrücken</p>
                            </div>
                        </div>
                        <p>
                            Weitere Informationen bei Anmeldung unter:{" "}
                            <b>
                                <a href="mailto:adefelice@t-online.de">
                                    adefelice@t-online.de
                                </a>
                            </b>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
