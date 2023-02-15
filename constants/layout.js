import Head from "next/head";
import Header from "@/constants/Header/Header";
import Footer from "@/constants/Footer/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
    const [list, setList] = useState(false);

    return (
        <>
            <Head></Head>
            <Header />
            <section>
                <nav>
                    <Link href="/">Home</Link>
                    <Link
                        href="/therapien"
                        onMouseEnter={() => setList(true)}
                        onMouseLeave={() => setList(false)}
                        style={{ color: list ? "#74a099" : "#c9d9d9" }}
                    >
                        Therapien
                    </Link>
                    <Link href="/literatur">Literatur</Link>
                    <Link href="/links">Links</Link>
                    <Link href="/seminare">Seminare</Link>
                    <Link href="/impressum">Impressum</Link>
                    <Link href="/kontakt">Kontakt</Link>
                    {list && (
                        <div
                            id="List"
                            onMouseEnter={() => setList(true)}
                            onMouseLeave={() => setList(false)}
                        >
                            <Link href="/therapien/autonome-regulationsdiagnostik">
                                Autonome Regulationsdiagnostik
                            </Link>
                            <Link href="/therapien/psychokinesiologie">
                                Psychokinesiologie
                            </Link>
                            <Link href="/therapien/mentalfeldtherapie">
                                Mentalfeldtherapie
                            </Link>
                            <Link href="/therapien/systemische-familienaufstellung">
                                Systemische Familienaufstellung
                            </Link>
                            <Link href="/therapien/reiki">Reiki</Link>
                        </div>
                    )}
                </nav>
                {children}
                <Footer />
            </section>
        </>
    );
}
