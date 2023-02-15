import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <main id="Home">
            <h1>De Felice Heiltherapien</h1>
            <div className="content">
                <div className="image-box" style={{ background: "#41555893" }}>
                    <Image
                        src={"/assets/portrait.png"}
                        alt={"Portrait"}
                        fill
                        style={{
                            objectFit: "contain",
                            objectPosition: "left",
                        }}
                    />
                </div>
                <div className="text-wrap">
                    <ul>
                        <li>
                            Langjährige Tätigkeit im medizinischen Bereich, als
                            Medizinisch-technische Laborassistentin, Lehr-MTA
                        </li>
                        <li>Heilpraktikerin seit 2007</li>
                        <li>
                            Praxistätigkeit als Therapeutin für Autonome
                            Regulationsdiagnostik und Psychokinesiologie,
                            Mentalfeldtherapie nach Dr. Klinghardt ( Institut
                            für Neurobiologie, Dr. Klinghardt – INK)
                        </li>
                        <li>
                            Therapeutin für Systemische Familienaufstellung mit
                            erweitertem Zertifikat (Wieslocher Institut für
                            systemische Lösungen – wisl)
                        </li>
                    </ul>
                    <div className="quote-wrap">
                        <p>
                            „Das schönste und tiefste Gefühl, das wir erfahren
                            können, ist die Wahrnehmung des Mystischen. Sie ist
                            die Quelle aller Wissenschaft….“
                        </p>
                        <p>Albert Einstein</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
