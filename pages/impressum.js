import Image from "next/image";
import Link from "next/link";

export default function Impressum() {
    return (
        <main id="Impressum">
            <h1>Impressum</h1>
            <div className="content">
                <div>
                    <p>Angelika De Felice</p>
                    <br />
                    <p>66557 Illingen-Hüttigweiler</p>
                    <p>Jakobstraße 51-53</p>
                    <a
                        href="mailto:info@heiltherapien-de-felice.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        info@heiltherapien-de-felice.com
                    </a>
                </div>

                <div className="image-box">
                    <Image
                        src={"/assets/Therapie Punkt.jpg"}
                        alt={"Wieslocher Institut für systemische Lösungen"}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </main>
    );
}
