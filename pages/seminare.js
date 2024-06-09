import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const events = [
    {
        title: "Systemische Aufstellungsarbeit",
        day: "Samstag",
        date: "22.06.2024",
        location: {
            venue: "EPI Park Seminar",
            venueSubTitle: "Schweizerische Epilepsie-Stiftung",
            building: "Park Raum 5",
            address: "Bleulerstrasse 60",
            plz: "8008",
            city: "Zürich",
        },
        email: "angelicadefelice@hispeed.ch",
    },
    {
        title: "Systemische Aufstellungsarbeit",
        day: "Sonntag",
        date: "09.06.2024",
        location: {
            venue: "Praxis für Gesundheitsfürsorge",
            building: "Simone Tomasetti-Freymann",
            address: "Feldmannstraße 108",
            plz: "66119",
            city: "Saarbrücken",
        },
        email: "adefelice@t-online.de",
    },
];

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

                {!!events.length ? (
                    <div className="events">
                        {events.map((ev) => (
                            <div key={"event " + ev.date} className="event">
                                <div className="event-info">
                                    <p>
                                        <b>{ev.title}</b>{" "}
                                        <i>
                                            am {ev.day}, den {ev.date}:
                                        </i>
                                    </p>
                                    <div className="location">
                                        <p>Ort:</p>
                                        <div>
                                            <p>
                                                <b>
                                                    <i>{ev.location.venue}</i>
                                                </b>{" "}
                                                {ev.location.venueSubTitle &&
                                                    `(${ev.location.venueSubTitle})`}
                                            </p>
                                            <p>{ev.location.building}</p>
                                            <p>{ev.location.address}</p>
                                            <p>
                                                {ev.location.plz}{" "}
                                                {ev.location.city}
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Weitere Informationen bei Anmeldung
                                        unter:{" "}
                                        <b>
                                            <a href={`mailto:${ev.email}`}>
                                                {ev.email}
                                            </a>
                                        </b>
                                    </p>
                                </div>

                                <div className="separator" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-events">
                        <h2>Termine werden bekannt gegeben.</h2>
                    </div>
                )}

                {/* <div className="events">
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
                </div> */}
            </div>
        </main>
    );
}
