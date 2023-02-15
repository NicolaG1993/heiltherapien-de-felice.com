import Image from "next/image";
import Link from "next/link";

export default function Reiki() {
    return (
        <main id="Doc">
            <h1>Reiki</h1>
            <div className="content">
                <div className="image-box right">
                    <Image
                        src={"/assets/chakras.png"}
                        alt={"Reiki"}
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <p>
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
                </p>
            </div>
        </main>
    );
}
