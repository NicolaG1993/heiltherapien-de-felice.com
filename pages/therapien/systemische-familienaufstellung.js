import Image from "next/image";
import Link from "next/link";

export default function Reiki() {
    return (
        <main id="Doc">
            <h1>Systemische Familienaufstellung</h1>
            <div className="content">
                <div className="image-box right">
                    <Image
                        src={"/assets/baum.png"}
                        alt={"Systemische Familienaufstellung"}
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <p>
                    Jeder Mensch wird in eine Familie hineingeboren. Damit
                    entsteht eine Bindung an alle, die zu der Familie gehören.
                    Eine unbewusste Instanz.
                </p>
                <p>
                    Bert Hellinger nennt diese Instanz das „Familiengewissen“.
                    Es wacht über die Bedingungen die in der
                    Schicksalsgemeinschaft der Familie herrschen und denen wir
                    ausgesetzt und untergeordnet sind, ob wir es wollen oder
                    nicht.
                </p>
                <p>
                    Dieses Familiengewissen sorgt für die Bindung im System, für
                    den Ausgleich, sowohl zwischen Geben und Nehmen als auch im
                    Schicksal und für die Ordnung. Zur Ordnung gehört, dass
                    alle, die zu diesem Familiensystem gehören, einschließend
                    der Verstorbenen, das gleiche Recht auf Zugehörigkeit haben.
                    Wird ein Mitglied ausgeschlossen, verachtet oder vergessen,
                    zum Beispiel ein tot geborenes Kind, bewirkt dieses
                    kollektive Gewissen, dass ein anderer, meist aus einer
                    späteren Generation sich mit diesem Ausgeschlossenen
                    unbewusst identifiziert. In dieser „Verstrickung“ wird er
                    diesem ähnlich und ahmt Aspekte dessen Schicksals nach, ohne
                    dass er weiß weshalb und ohne dass er sich dagegen wehren
                    kann.
                </p>
                <p>
                    Eine zweite Ordnung, über die das kollektive Gewissen wacht,
                    ist die Rangordnung nach der Zeit. So haben die Eltern
                    Vorrang vor den Kindern, und das erste Kind hat Vorrang vor
                    dem zweiten usw.
                </p>
                <p>
                    Unter Familien gilt, dass eine neu gegründete oder
                    entstandene Familie Vorrang hat vor der Früheren. Also die
                    Gegenwartsfamilie vor der Herkunftsfamilie und die zweite
                    Familie vor der ersten, auch wenn diese zum Beispiel durch
                    ein Kind aus einer Außenbeziehung entsteht.
                </p>
                <p>
                    Das Familenstellen bringt darüber hinaus ans Licht, wie die
                    Traumen der Vorfahren, mit denen wir schicksalhaft verbunden
                    sind, generationen – übergreifend weiterwirken und auf das
                    Leben der Nachkommen Einfluss nehmen. Familienaufstellung –
                    eine Gruppenarbeit bei der der Klient die Möglichkeit hat,
                    aus dem Teilnehmerkreis Stellvertreter für sich und für
                    Mitglieder seiner Familie auszuwählen. Diese werden vom
                    Klienten entsprechend seines inneren Bildes, wie die
                    Familienangehörigen zueinander stehen, in Beziehung
                    zueinander aufgestellt.
                </p>
                <p>
                    Das überraschende, bisher nicht erklärbare Phänomen ist,
                    dass die gesammelt aufgestellten Stellvertreter von einer
                    Bewegung ergriffen werden und sich plötzlich fühlen wie die
                    realen Personen, für die sie aufgestellt sind.
                </p>
                <p>
                    Sie zeigen deren Gefühle und entwickeln manchmal ähnliche
                    Körpersysteme, unabhängig davon, ob sie für Personen stehen,
                    die leben oder schon verstorben sind.
                </p>
                <p>
                    Je nachdem wie die Stellvertreter zueinander in Beziehung
                    stehen, wie sie empfinden, was sie äußern, welche Impulse
                    sie haben, können der Aufstellungsleiter/-in und der
                    Klient/-in erkennen, welche Ereignisse aus der Geschichte
                    der Familie relevant sind und welche Dynamiken in dieser
                    Familie wirken und in einem Zusammenhang mit der Krankheit
                    und der Symptomatik des Klienten stehen können.
                </p>
                <p>
                    Nicht für alle Klienten stellt die Gruppe ein geeigneter
                    Rahmen dar. Auch in der Einzelsitzung lassen sich Lösungen
                    erarbeiten. Hier kann mit Figuren oder Bodenankern
                    aufgestellt werden, aber auch im Verlauf einer Behandlung
                    auf der Liege kann systemisch gearbeitet werden, mit dem
                    Ziel:
                </p>
                <p className="italic">
                    „Einschränkende Lebensmuster in Fülle verwandeln“ (
                    Gunthardt Weber / WISL)
                </p>
            </div>
        </main>
    );
}
