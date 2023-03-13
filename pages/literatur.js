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
                        Dr. Frank Liebke: „Doktor Chlorella! Die Alge fürs
                        Leben. Kompendium zur Mikroalge Chlorella“, Remerc &
                        Lheiw Verlagskontor, 2007.
                    </li>
                    <li>
                        Dr. Joachim Mutter: „Amalgam-Risiko für die Menschheit“,
                        Fit fürs Leben Verlag, Weil der Stadt 2018.
                    </li>
                    <li>
                        Fritz Albert Popp: „Biophotonen-Neue Horizonte der
                        Medizin: Von den Grundlagen der Biophotonik“, Haug
                        Verlag, Stuttgart 2006.
                    </li>
                    <li>
                        Wolfgang Maes: „Stress durch Strom und Strahlung“, 6.
                        Auflage, Institut für Baubiologie + Nachhaltigkeit,
                        Rosenheim 2013.
                    </li>
                    <li>
                        Dr.med. D. Klinghardt, Amelie Schmeer-Maurer: „Handbuch
                        der MentalfeldTechniken“, VAK Verlag, Kirchzarten bei
                        Freiburg 2009.
                    </li>
                    <li>
                        Hunter Beaumont: „Auf die Seele schauen: Spirituelle
                        Psychotherapie“, Kösel-Verlag, München 2008.
                    </li>
                    <li>
                        Gunthard Weber (Hrsg.): „Zweierlei Glück. Das klassische
                        Familienstellen Bert Hellingers“, 18. Auflage, Carl-Auer
                        Verlag, Heidelberg 2017.
                    </li>
                    <li>
                        John Bradshaw: „Familiengeheimnisse. Warum es sich lohnt
                        ihnen auf die Spur zu kommen“, Goldmann, München 2014.
                    </li>
                    <li>
                        Colin C. Tipping: „Ich vergebe: Der radikale Abschied
                        vom Opferdasein“, J. Kamphausen, Bielefeld 2010.{" "}
                    </li>
                </ul>
            </div>
        </main>
    );
}
