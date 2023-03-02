import Image from "next/image";
import Link from "next/link";

export default function Psychokinesiologie() {
    return (
        <main id="Doc">
            <h1>Psychokinesiologie</h1>
            <div className="content">
                <div
                    className="image-box right"
                    // style={{ background: "#41555893" }}
                >
                    <Image
                        src={"/assets/labyrinth.png"}
                        alt={"Psychokinesiologie"}
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <p>
                    Das diagnostische Muskeltesten – in Deutschland als
                    Sammelbegriff bekannt unter dem Namen „Kinesiologie“ – hat
                    in den 30er Jahren seit der Entdeckung in den USA durch
                    George Goodheart, D.C., und – unabhängig davon – von
                    Yoshiaki Omura, M.D., weltweit große Verbreitung gefunden.
                </p>
                <p>
                    Heute gibt es eine große Fülle an „kinesiologischen“
                    Methoden und Organisationen sowie zahlreiche
                    wissenschaftliche Veröffentlichungen, die größenteils den
                    klinischen Wert dieser Methode bestätigen.
                </p>
                <p>
                    Obwohl bis heute die Anerkennung dieser Methoden durch die
                    universitäre Medizin fehlt, ist das Muskeltesten heute aus
                    der Praxis vieler Schul- und Veterinärmediziner und
                    Heilpraktiker nicht mehr wegzudenken.
                </p>
                <p>
                    Durch die Arbeit des amerikanischen Psychiaters John Diamond
                    hat das Muskeltesten auch seit vielen Jahren Einzug in die
                    „alternative Psychotherapie“ gefunden.
                </p>
                <p>
                    Dr. Klinghardt hat eine Form der Biofeedback Psychotherapie
                    entwickelt, die unter dem Namen Applied Psycho-Neurobiology
                    (APN) in den USA, in Deutschland unter dem Namen
                    Psycho-Kinesiologie (PK) bekannt ist.
                </p>
                <p>
                    Kernstück der PK ist es, mit Hilfe des Muskeltestens einen
                    Dialog mit dem Unterbewussten des Klienten führen zu können.
                </p>
                <p>
                    In den letzten Jahren sind viele Elemente der systemischen
                    Familientherapie nach Hellinger in diese Methode
                    eingeflossen.
                </p>
                <p>
                    Die damit erzielten Heilerfolge bei der Behandlung
                    chronischer Erkrankungen sind oft erstaunlich.
                </p>
                <p>
                    Wir haben erkannt, dass viele Erkrankungen, stressvolle
                    Lebensumstände, seelische Not und Einsamkeit, sogar
                    scheinbar zufällige traumatische Ereignisse oft das Ergebnis
                    von unerlösten Konflikten oder ungeheilten Traumen aus der
                    Vergangenheit der Familie, des Clans oder auch der
                    zugehörigen Gemeinschaft ( Religion, Ort, Land ) sind.
                </p>
                <p>
                    Über Kraftfelder, deren Natur in der Physik bis heute
                    unerklärt ist, findet die Konflikt- und Trauma-Energie ihren
                    Weg bis tief in die Biologie des Klienten.
                </p>
                <p>
                    Es kommt zu epigenetischen, metabolischen und
                    physiologischen Veränderungen, die nachweisbar sind.
                </p>
                <p>
                    Sie sind oft krankmachend ( seelisch und/oder körperlich ) ,
                    engen das Leben ein und nehmen die Freude – sind aber auch
                    durch gezielte systemische Interventionen heilbar oder
                    abwendbar.
                </p>
                <p>
                    Wir können heute nachweisen, dass der Effekt unerlöster
                    Konflikte und Traumen Signale erzeugt, die tief im Körper an
                    der Zellwand wirken und die „ signaling pathways „ in der
                    Zelle – die jeden Aspekt unserer Vitalität und Gesundheit
                    bestimmen – verändern und negativ beeinflussen.
                </p>

                <h4>Zusammenfassend ist zu sagen:</h4>
                <p>
                    Mit der PK hat die Therapeutin/der Therapeut nach
                    eingehendem Gespräch die Möglichkeit, über den Muskeltest
                    einen Dialog mit dem Unterbewusstsein des Klienten zu
                    führen. Dabei werden ursprüngliche traumatische Ereignisse,
                    die verdrängt waren, ans Licht gebracht. Durch das
                    Wiedererinnern können sich die damit verbundenen
                    aufgestauten Gefühle des Klienten entladen und der
                    Ursprungskonflikt kann dauerhaft „entkoppelt“ werden.
                </p>
                <p>
                    Die Körperorgane sind bestimmten Gefühlen zugeordnet. Wenn
                    ein bestimmtes Gefühl im Leben vorherrschend ist, dann ist
                    von einer Minderdurchblutung des entsprechenden Organs
                    auszugehen ( beispielsweise : Angst – Nieren ).
                </p>
                <p>
                    Mithilfe von Pk können „gehaltene Gefühle“ losgelassen
                    werden. Das Organ ist nach einer Pk-Behandlung wieder besser
                    durchblutet und nimmt seine Versorgungs- und
                    Entgiftungsfunktion wieder auf.
                </p>
                <p>
                    Ziel einer jeden Pk-Behandlung ist es, mit den zur Verfügung
                    stehenden Mitteln die krankmachenden Glaubenssätze durch
                    neue, freimachende zu ersetzen.
                </p>
                <p>
                    Auf diese Weise ist eine dauerhaft Ausheilung ohne
                    Symptomverschiebung möglich.
                </p>
                <p className="italic">
                    INK Institut für Neurobiologie nach Dr. Klinghardt
                </p>
            </div>
        </main>
    );
}
