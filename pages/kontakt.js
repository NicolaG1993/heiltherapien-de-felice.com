import Image from "next/image";
import Link from "next/link";

export default function Kontakt() {
    return (
        <main id="Kontakt">
            <h1>Kontakt</h1>
            <div className="content">
                <form>
                    <input type="text" placeholder="Name*"></input>
                    <input type="email" placeholder="E-Mail Adresse*"></input>
                    <input type="text" placeholder="Betreff*"></input>
                    <textarea placeholder="Inhalt*"></textarea>
                    <button type="submit">Senden</button>
                </form>
                <div>
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
                </div>
            </div>
        </main>
    );
}
