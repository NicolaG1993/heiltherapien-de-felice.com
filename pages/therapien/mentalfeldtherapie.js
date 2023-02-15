import Image from "next/image";
import Link from "next/link";

export default function Mentalfeldtherapie() {
    return (
        <main id="Doc">
            <h1>Mentalfeldtherapie</h1>
            <div className="content">
                <div className="image-box right">
                    <Image
                        src={"/assets/waterfall.jpg"}
                        alt={"Mentalfeldtherapie"}
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <p>
                    Diese Methode beruht auf der Erkenntnis, dass seelische
                    Spannungszustände und Schmerzen oft dann entstehen, wenn
                    sich ein Teil des Mentalkörpers als Folge eines Traumas vom
                    physischen Körper trennt.
                </p>
                <p>
                    Dieser Prozess läuft für die meisten Betroffenen völlig
                    unbewusst ab. Die Behandlung besteht darin, den
                    abgespaltenen, oft nicht verarbeiteten Inhalt aufzudecken,
                    zu benennen und gleichzeitig durch Beklopfen bestimmter
                    Akupunkturpunkte im Meridiansystem den abgespaltenen Teil
                    wieder „heranzuziehen“ und zu zentrieren.
                </p>
                <p>
                    Die Klopfakupressur wird erfolgreich eingesetzt bei Ängsten
                    und Phobien, Süchten und Zwangsverhalten, bei
                    Hyperaktivität, Depressionen und depressiven Verstimmungen,
                    bei Stress, psychosomatischen Problemen und chronischer
                    Müdigkeit.
                </p>
                <p>
                    Schmerzen können in Minuten gemindert werden, ebenso die
                    Angst vor einer Injektion.
                </p>
                <p>
                    Muskeln entspannen sich, Medikamente werden besser
                    vertragen. Die Methode ist eine Selbstbehandlungsmethode,
                    die ihre Anwender darin unterstützt, den täglichen Stress im
                    Leben besser zu bewältigen, in Beziehungen emotional stabil
                    zu bleiben, Krankheiten und Schmerzen schneller zu
                    überwinden, nach seelischem oder körperlichem Trauma rasche
                    Selbstheilungsreaktionen einzuleiten und vieles mehr.
                </p>
                <p className="italic">
                    Handbuch der Mentalfeld-Techniken / Dr.Klinghardt /
                    Schmeer-Maurer
                </p>
            </div>
        </main>
    );
}
