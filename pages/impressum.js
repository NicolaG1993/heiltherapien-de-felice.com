import Image from "next/image";
import Link from "next/link";

export default function Impressum() {
    return (
        <main id="Impressum">
            <h1>Impressum</h1>
            <div className="content">
                <div>
                    <p>
                        <strong>Praxis für Ganzheitliche Therapieformen</strong>
                    </p>
                    <p>Angelika De Felice</p>
                    <p>Lenggstr. 24</p>
                    <p>8008 Zürich</p>
                    <a
                        href="mailto:adefelice@t-online.de"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>adefelice@t-online.de</p>
                    </a>
                    <a href="tel:+41767078926">
                        <p>+41 76 70 78 926</p>
                    </a>
                    <a href="tel:+491729980562">
                        <p>+49 172 99 805 62</p>
                    </a>
                </div>
                <div>
                    <p>
                        <strong>Angelika De Felice</strong>
                    </p>
                    <p>co/ Praxisgemeinschaft Knauf - Meier</p>
                    <p>Grossherzog-Friedrich-Strasse 72</p>
                    <br />
                    <p>66121 Saarbrücken</p>
                    <a
                        href="mailto:adefelice@t-online.de"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>adefelice@t-online.de</p>
                    </a>
                    <a href="tel:+491729980562">
                        <p>+49 172 99 805 62</p>
                    </a>
                </div>

                {/*<div className="image-box">
                     <Image
                        src={"/assets/Therapie Punkt.jpg"}
                        alt={"Wieslocher Institut für systemische Lösungen"}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                    /> 
                </div>*/}
            </div>
        </main>
    );
}
