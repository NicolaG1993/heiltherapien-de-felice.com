import Image from "next/image";
import { useState } from "react";

export default function Kontakt() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        betreff: "",
        inhalt: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SUBMIT INVOKED");
    };

    return (
        <main id="Kontakt">
            <h1>Kontakt</h1>
            <div className="content">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Name*"
                        onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                        }
                    ></input>
                    <input
                        type="email"
                        placeholder="E-Mail Adresse*"
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                email: e.target.value,
                            })
                        }
                    ></input>
                    <input
                        type="text"
                        placeholder="Betreff*"
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                betreff: e.target.value,
                            })
                        }
                    ></input>
                    <textarea
                        placeholder="Inhalt*"
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                inhalt: e.target.value,
                            })
                        }
                    ></textarea>
                    <button type="submit">Senden</button>
                </form>
                <div>
                    {/*<div className="image-box">
                         <Image
                            src={"/assets/Therapie Punkt.jpg"}
                            alt={"Wieslocher Institut für systemische Lösungen"}
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div> */}
                    <div>
                        <p>
                            <strong>Angelika De Felice</strong>
                        </p>
                        <br />
                        <p>co/ Praxisgemeinschaft Knauf - Meier</p>
                        <p>Grossherzog-Friedrich-Strasse 72</p>
                        <p>66121 Saarbrücken</p>
                        <a
                            href="mailto:adefelice@t-online.de"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            adefelice@t-online.de
                        </a>
                        <a href="tel:+491729980562">
                            <p>+49 172 99 805 62</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
