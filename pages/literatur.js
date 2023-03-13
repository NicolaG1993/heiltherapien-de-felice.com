import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Literatur() {
    return (
        <main id="Literatur">
            <Head>
                <title>Literatur</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Literatur" />
            </Head>
            <h1>Literatur</h1>
            <div className="content">
                <ul>
                    <li>
                        Dr. Frank Liebke:{" "}
                        <i>
                            „Doktor Chlorella! Die Alge fürs Leben. Kompendium
                            zur Mikroalge Chlorella“
                        </i>
                        , Remerc & Lheiw Verlagskontor, 2007.
                    </li>
                    <li>
                        Dr. Joachim Mutter:{" "}
                        <i>„Amalgam-Risiko für die Menschheit“</i>, Fit fürs
                        Leben Verlag, Weil der Stadt 2018.
                    </li>
                    <li>
                        Fritz Albert Popp:{" "}
                        <i>
                            „Biophotonen-Neue Horizonte der Medizin: Von den
                            Grundlagen der Biophotonik“
                        </i>
                        , Haug Verlag, Stuttgart 2006.
                    </li>
                    <li>
                        Wolfgang Maes: <i>„Stress durch Strom und Strahlung“</i>
                        , 6. Auflage, Institut für Baubiologie + Nachhaltigkeit,
                        Rosenheim 2013.
                    </li>
                    <li>
                        Dr. med. D. Klinghardt, Amelie Schmeer-Maurer:{" "}
                        <i>„Handbuch der MentalfeldTechniken“</i>, VAK Verlag,
                        Kirchzarten bei Freiburg 2009.
                    </li>
                    <li>
                        Hunter Beaumont:{" "}
                        <i>
                            „Auf die Seele schauen: Spirituelle Psychotherapie“
                        </i>
                        , Kösel-Verlag, München 2008.
                    </li>
                    <li>
                        Gunthard Weber (Hrsg.):{" "}
                        <i>
                            „Zweierlei Glück. Das klassische Familienstellen
                            Bert Hellingers“
                        </i>
                        , 18. Auflage, Carl-Auer Verlag, Heidelberg 2017.
                    </li>
                    <li>
                        John Bradshaw:{" "}
                        <i>
                            „Familiengeheimnisse. Warum es sich lohnt ihnen auf
                            die Spur zu kommen“
                        </i>
                        , Goldmann, München 2014.
                    </li>
                    <li>
                        Colin C. Tipping:{" "}
                        <i>
                            „Ich vergebe: Der radikale Abschied vom Opferdasein“
                        </i>
                        , J. Kamphausen, Bielefeld 2010.
                    </li>
                </ul>
            </div>
        </main>
    );
}
