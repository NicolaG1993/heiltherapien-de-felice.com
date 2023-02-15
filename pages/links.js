import Image from "next/image";
import Link from "next/link";

export default function Links() {
    return (
        <main id="Links">
            <h1>Links</h1>
            <div className="content">
                <a
                    href="https://www.ink.ag/fuer-patientinnen/therapeutinnen-vor-ort/in-der-schweiz/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption-box"
                >
                    <div>
                        <Image
                            src={"/assets/ink-logo.png"}
                            alt={
                                "INK-Institut für Neurobiologie nach Dr. Klinghardt"
                            }
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    <span>
                        INK-Institut für Neurobiologie nach Dr. Klinghardt
                    </span>
                </a>

                <a
                    href="www.wieslocher-institut.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption-box"
                >
                    <div>
                        <Image
                            src={"/assets/wisl-logo.png"}
                            alt={"Wieslocher Institut für systemische Lösungen"}
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    <span>Wieslocher Institut für systemische Lösungen</span>
                </a>
            </div>
        </main>
    );
}
