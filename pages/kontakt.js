import Head from "next/head";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
// import Image from "next/image";

import {
    emailValidation,
    nameValidation,
    textValidation,
    titleValidation,
} from "@/utils/validateForms";

export default function Kontakt() {
    //================================================================================
    // Component State
    //================================================================================
    const recaptchaRef = useRef();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        betreff: "",
        inhalt: "",
    });
    const [errors, setErrors] = useState({});
    const [activeStep, setActiveStep] = useState(1);
    const [isFinished, setIsFinished] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    //================================================================================
    // Functions
    //================================================================================
    const nextStep = () => {
        setActiveStep((prev) => (prev <= 2 ? prev + 1 : 2));
    };
    const backStep = () => {
        setActiveStep((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const sendEmail = async () => {
        nextStep();

        try {
            const resp = await axios.post("/api/contact-us", formState);
            // console.log("resp: ", resp);
            if (resp.data.emailSended) {
                setIsFailed(false);
                setIsFinished(true);
            } else {
                setIsFailed(resp.data.body);
            }
        } catch (err) {
            console.log("🐞 ERR: ", err); //handle error
            setIsFailed(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SUBMIT INVOKED");
        Object.entries(formState).map(([key, value]) =>
            validateData(key, value)
        );
        if (Object.keys(errors).length === 0) {
            recaptchaRef.current.execute();
        }
    };

    const validateData = (key, value) => {
        // e.preventDefault();
        if (!value) {
            value = "";
        }
        // validate data + setErrors
        let newErrObj = errors;
        if (key === "name") {
            const resp = nameValidation("nome", value);
            if (resp) {
                newErrObj[key] = resp;
            } else {
                delete newErrObj[key];
            }
        }
        if (key === "email") {
            const resp = emailValidation(value);
            if (resp) {
                newErrObj[key] = resp;
            } else {
                delete newErrObj[key];
            }
        }
        if (key === "betreff") {
            const resp = titleValidation(value);
            if (resp) {
                newErrObj[key] = resp;
            } else {
                delete newErrObj[key];
            }
        }
        if (key === "inhalt") {
            const resp = textValidation(value);
            if (resp) {
                newErrObj[key] = resp;
            } else {
                delete newErrObj[key];
            }
        }
        setErrors((prev) => ({ ...prev, ...newErrObj }));
    };

    const onReCAPTCHAChange = (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        sendEmail();
        recaptchaRef.current.reset();
    };

    //================================================================================
    // Sub-Components
    //================================================================================
    let Confirmation = () => {
        if (isFinished) {
            return (
                <>
                    <div className="success">
                        <p>Messaggio inviato!</p>
                    </div>
                    <p onClick={backStep} style={{ cursor: "pointer" }}>
                        Torna indietro
                    </p>
                </>
            );
        } else if (isFailed) {
            return (
                <>
                    <div className="error">
                        <p>
                            Sembra esserci un errore, non abbiamo ricevuto
                            questo messaggio. Riprova o contattaci direttamente
                            via email o via telefono.
                        </p>
                    </div>
                    <p onClick={backStep} style={{ cursor: "pointer" }}>
                        Torna indietro
                    </p>
                </>
            );
        } else {
            return <div className="loader">Attendere, invio in corso...</div>;
        }
    };

    //================================================================================
    // Render UI
    //================================================================================
    return (
        <main id="Kontakt">
            <Head>
                <title>Kontakt</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Kontakt" />
            </Head>
            <h1>Kontakt</h1>
            <div className="content">
                {activeStep === 1 && (
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey={process.env.RECAPTCHA_PUBLIC_KEY}
                            onChange={onReCAPTCHAChange}
                            onBlur={(e) =>
                                validateData(e.target.name, e.target.value)
                            }
                        />

                        <input
                            type="text"
                            placeholder="Name*"
                            name="name"
                            id="Name"
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value,
                                })
                            }
                            onBlur={(e) =>
                                validateData(e.target.name, e.target.value)
                            }
                        ></input>
                        <input
                            type="email"
                            placeholder="E-Mail Adresse*"
                            name="email"
                            id="Email"
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    email: e.target.value,
                                })
                            }
                            onBlur={(e) =>
                                validateData(e.target.name, e.target.value)
                            }
                        ></input>
                        <input
                            type="text"
                            placeholder="Betreff*"
                            name="betreff"
                            id="Betreff"
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    betreff: e.target.value,
                                })
                            }
                            onBlur={(e) =>
                                validateData(e.target.name, e.target.value)
                            }
                        ></input>
                        <textarea
                            placeholder="Inhalt*"
                            name="inhalt"
                            id="Inhalt"
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    inhalt: e.target.value,
                                })
                            }
                        ></textarea>
                        <button type="submit">Senden</button>
                    </form>
                )}

                {activeStep === 2 && (
                    <div>
                        <Confirmation />
                    </div>
                )}

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
                    {/* <div>
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
                    </div> */}
                </div>
            </div>
        </main>
    );
}
