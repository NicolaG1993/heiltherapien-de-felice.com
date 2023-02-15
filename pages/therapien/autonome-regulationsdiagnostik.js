import Image from "next/image";
import Link from "next/link";

export default function AutonomeRegulationsdiagnostik() {
    return (
        <main id="Doc">
            <h1>Autonome Regulationsdiagnostik</h1>
            <div className="content">
                <div>
                    <h2>Angewandte Neurobiologie nach Dr. Klinghardt</h2>
                    <p>
                        Die Neurobiologie nach Dr. Klinghardt ist ein
                        Heilsystem. Drei ineinander greifende Diagnose- und
                        Therapie- Praktiken tragen dieses Konzept:
                    </p>
                    <ul>
                        <li>
                            die Autonome Regulationsdiagnostik nach Dr.
                            Klinghardt (ART)
                        </li>
                        <li>
                            die Psycho-Kinesiologie nach Dr. Klinghardt (PK)
                        </li>
                        <li>
                            die Mentalfeldtechniken nach Dr. Klinghardt (MFT)
                        </li>
                    </ul>
                    <p>
                        Die Basis der neurobiologischen Arbeit ist der Autonome
                        Regulationstest.
                    </p>
                    <p>
                        Bei Beginn einer Behandlung kann durch einen Muskeltest
                        festgestellt werden, ob das Autonome Nervensystem
                        regulationsfähig ist, oder ob eine oder mehrere
                        Blockaden vorliegen.
                    </p>
                    <p>
                        Dieser spezielle Test beruht auf wissenschaftlichen
                        Grundlagen. Zudem erfordert es große Sorgfalt ihn zu
                        erlernen.
                    </p>
                    <p>
                        Durch diese Art des Testens können wir den Körper als
                        Bio-Feedback-Messgerät einsetzen.
                    </p>
                </div>

                <div>
                    <div className="image-box right">
                        <Image
                            src={"/assets/da-vinci.png"}
                            alt={"Autonome Regulationsdiagnostik"}
                            // width="450"
                            // height="450"
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <h2>Das Modell der 5 Ebenen des Seins</h2>
                    <p>
                        Nach neuesten Erkenntnissen aus Physik und Mathematik
                        existieren wir Menschen in verschiedenen Dimensionen
                        gleichzeitig. Der physische Körper existiert innerhalb
                        einer Sphäre von weiteren, unsichtbaren Körpern, die ihn
                        umgeben und durchdringen.
                    </p>
                    <h3>1. Ebene: der physische Körper</h3>
                    <p>
                        Die unterste oder dichteste Ebene unseres Daseins ist
                        der physische Körper.
                    </p>
                    <p>
                        Er bildet die stoffliche Grundlage, auf der alles andere
                        ruht.
                    </p>
                    <p>
                        Unser Körper ist die Verbindung zur Erde und zu den
                        Quellen physischer Energie.
                    </p>
                    <p>
                        Auf der körperlichen Ebene gibt es eine Vielfalt an
                        Therapien aus der konventionellen Medizin, der
                        Homöopathie (Niederpotenzen), der Orthomolekularen
                        Medizin (Nahrungsergänzungsmittel wie Vitamine,
                        Spurenelemente, Mineralien), der Hormonbehandlung
                        (möglichst mit Phytohormonen), aber auch der
                        Kräutermedizin.
                    </p>
                    <p>
                        Die Schwermetallentgiftung und die Behandlung von
                        Infektionen gehören ebenso zu dieser Ebene wie Therapien
                        aus der Krankengymnastik, Osteopathie sowie alle
                        chirurgischen Maßnahmen.
                    </p>

                    <h3>2. Ebene: Das Energiefeld</h3>
                    <p>
                        Energie ist in der Physik definiert als „die Fähigkeit,
                        Arbeit zu leisten“.
                    </p>
                    <p>
                        Die meisten somatischen und autonomen Nerven verlaufen
                        in Längsrichtung des Körpers, und die Nervenimpulse
                        (Aktionspotentiale) breiten sich als elektrische Felder
                        entlang dieser Leitbahnen aus.
                    </p>
                    <p>
                        Die Magnetfelder, die durch diese sich rasch bewegenden,
                        rein elektrischen Kräfte verursacht werden, wirken
                        senkrecht zu dieser Achse in das den Körper umgebende
                        Feld.
                    </p>
                    <p>
                        Auch wenn ihre Stärke mit der Entfernung zum Körper
                        abnimmt, breiten sie sich über die Haut hinaus im Raum
                        aus. Theoretisch dehnen sich diese biomagnetischen
                        Felder bis ins Unendliche aus.
                    </p>
                    <p>
                        Das am stärksten messbare Magnetfeld ist das durch die
                        autonomen Nervenleitsysteme entstehende Feld über dem
                        Herzen.
                    </p>
                    <p>
                        EKG, EEG, und Elektomyografie sind Messmethoden für
                        physikalische Phänomene (Messung von entstehenden
                        Strömen), nicht für chemische Phänomene.
                    </p>
                    <p>
                        Die autonomen Ganglien, die enorm dichte Innervierung
                        der Darmwand und das Rückenmark spielen hierbei eine
                        besondere Rolle.
                    </p>
                    <p>
                        Heilverfahren auf der energetischen Ebene sind das
                        Handauflegen, Massage, osteopathische Interventionen,
                        Akupunktur, Atemtherapie, Akupressur und Aspekte der
                        MFT.
                    </p>
                    <p>
                        Die Neuraltherapie (etwa das Unterspritzen von Narben,
                        Ganglien und anderen Störfeldern mit einem
                        Lokalanästetikum wie Procain) ist eine sehr effektive
                        Methode auf der zweiten Ebene.
                    </p>
                    <p>
                        Unsere Mentalfeld-Techniken bieten auf nichtinvasive
                        Weise Möglichkeiten zur Narbenentstörung, zum Beispiel
                        durch Beklopfen von Akupunkturlinien, während die Narbe
                        gehalten wird und gleichzeitig zugeordente traumatische
                        Umstände bildlich vorgestellt werden
                    </p>

                    <h3>3. Ebene: Das Mentalfeld</h3>
                    <p>
                        Der Mentalkörper oder das Mentalfeld ist unser
                        Informationsträger.
                    </p>
                    <p>
                        Er ermöglicht uns, Erinnerungen abzurufen, neue
                        Sinneseindrücke zu verarbeiten und zu speichern,
                        Wahrnehmungen zu interpretieren.
                    </p>
                    <p>Es ist die Ebene des Egos.</p>
                    <p>Unsere Gedanken sind die „Bits“ unseres Verstandes.</p>
                    <p>
                        Im Mentalfeld / Mentalkörper werden alle Erinnerungen
                        als Lichtinformationen im Quantenbereich abgelegt – als
                        Bilder. Erst bei Abrufen des Bildes aus dem
                        Langzeitgedächtnis wird das Bild im Gehirn
                    </p>
                    <p>
                        (Broca-Sprachzentrum und assoziierten Netzwerken) in
                        Worte umgesetzt.
                    </p>
                    <p>
                        Unsere Realität beginnt mit der Wahrnehmung innerer
                        Bilder. Am Anfang ist das Bild.
                    </p>
                    <p>
                        Wenn wir in der Therapie an den wirklichen Ursprung
                        einer Erkrankung heranwollen, müssen wir auf die inneren
                        Bilder schauen. Die Worte kommen erst später.
                    </p>
                    <p>
                        Das Gehirn entspricht einem einzelnen Computer, das
                        Mentalfeld eher dem Internet, das durch komplexe
                        Vernetzung mit anderen Computern entsteht.
                    </p>
                    <p>
                        Wir gehen davon aus, dass alle Informationen, alle
                        Erlebnisse, alle Gedanken, alles, was wir je erfahren
                        haben, von unserer Zeugung bis heute, gespeichert und in
                        dieses Feld verschoben worden ist.
                    </p>
                    <p>
                        Der wirkliche Speicher und Träger von Information und
                        Erinnerung, also unser Gedächtnis, ist das Mentalfeld,
                        das gleichbedeutend ist mit dem Feld von stehenden,
                        kohärenten und „gequetschten“ Lichtwellen, dem
                        Biophotonenfeld.
                    </p>
                    <p>Es gibt viele Heilmethoden auf der 3. Ebene:</p>
                    <ul>
                        <li>
                            Methoden innerhalb der konventionellen
                            Psychotherapie
                        </li>
                        <li>die Psychokinesiologie</li>
                        <li>
                            Augenbewegungsdesensibilisierung und
                            Wiederaufarbeitung
                        </li>
                        <li>Mentalfeldtherapie</li>
                    </ul>
                    <p>
                        Beim Zeichnen eines Bildes kommen wir durchaus in
                        Kontakt mit Informationen aus dem Mentalfeld des
                        Klienten, aber auch mit Einsichten aus den
                        transpersonalen Feldern und mit Phänomen auf der vierten
                        Ebene – wie zum Beispiel universelle Symbole,
                        Archetypen, Familienwissen, Menschheitswissen.
                    </p>

                    <h3>4. Ebene: Das Intuitive Feld</h3>
                    <p>
                        Es gibt eine Realität jenseits unseres Verstehens,
                        jenseits von Sprache, jenseits unseres Wissens, die uns
                        prägt und die in der Arbeit mit Bildern sichtbar wird.
                    </p>
                    <p>
                        Wenn Menschen mit ihrer Idendität auf der vierten Ebene
                        leben, dann macht alles mehr Freude – das Anschauen von
                        Blumen, der Duft der Wiese, der Klang einer Vogelstimme.
                    </p>
                    <p>
                        Auf der vierten Ebene sind die erleuchteten Meister
                        „angesiedelt“ – Jesus, Franz von Assisi, Buddha und
                        andere.
                    </p>
                    <p>
                        Hier wirkt der Einfluss von Vorleben, von
                        transpersonalen Erfahrungen, Archetypen und Engeln,
                        traumatischen Ereignissen und Lernerfahrungen in der
                        Familiengeschichte, von Traum- und schamanischen Reisen,
                        von meditativen Zuständen, Fremdenergien und den
                        Auswirkungen davon.
                    </p>
                    <p>
                        Erfahrungen auf der vierten Ebene wie Besessenheit,
                        Kontakt mit Geistern und anderen Wesenheiten,
                        Machtmissbrauch in Sekten scheinen an Macht über uns zu
                        verlieren, wenn sich die Familie des Klienten in einem
                        Stadium von Liebe und gegenseitigem Respekt befindet.
                    </p>
                    <p>
                        Verstorbene Familienmitglieder, die in der Familie
                        geachtet und gewürdigt sind, scheinen einen schützenden
                        Einfluss auf das Feld des Klienten zu haben.
                    </p>
                    <p>
                        Therapeutisch verwenden wir die heilenden Sätze und die
                        Vorgehensweise aus der frühen Arbeit von Bert Hellinger.
                    </p>
                    <p>
                        Im Rahmen einer Bildbesprechung nutzten wir das
                        Figurenstellen.
                    </p>

                    <h3>5. Ebene: Die geistige Dimension</h3>
                    <p>
                        Die fünfte Ebene beschreibt den geistigen Aspekt eines
                        Individuums. Das ist jener Teil von uns, mit dem Gott,
                        oder das Göttliche – oder wie auch immer man es nennen
                        möchte in uns und durch uns Lernerfahrungen macht und
                        der mit uns und durch uns wächst und zu Gott
                        zurückfließt.
                    </p>
                    <p>
                        Um Erfahrungen auf der fünften Ebene machen zu können,
                        müssen wir uns genug Zeit und Raum geben – für das
                        Alleinsein, die Meditation, das tiefe Gebet.
                    </p>
                    <p>
                        Für Klienten könnte die Abrundung einer Behandlung auf
                        der fünften Ebene darin bestehen, mit der neu gewonnenen
                        dankbaren Haltung, Hoffnung und Vitalität etwas „Gutes“
                        zu tun.
                    </p>
                    <p>
                        Die hier wirkenden göttlichen Gesetze werden uns immer
                        deutlicher, je mehr wir die fünfte Ebene als wichtigen
                        Teil unseres Menschseins miteinbeziehen.
                    </p>
                    <p>
                        Die unteren drei Ebenen gehören zum persönlichen, die
                        vierte und fünfte Ebene zum überpersönlichen Bereich.
                    </p>
                    <p>
                        Jede höhere Ebene hat einen organisierenden Einfluss auf
                        die unteren Ebenen.
                    </p>
                    <p>
                        Die unteren Ebenen versorgen die höheren Ebenen mit
                        Energie und schaffen Rahmen und Grenzen – für ein
                        erfülltes Leben.
                    </p>
                    <p className="italic">
                        INK – Institut für Neurobiologie nach Dr. Klinghardt
                    </p>
                </div>
            </div>
        </main>
    );
}
