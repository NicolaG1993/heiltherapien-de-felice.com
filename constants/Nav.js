import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [list, setList] = useState(false);
    return (
        <>
            <nav id="DesktopNav">
                <Link href="/">Home</Link>
                <Link
                    href="/therapien"
                    onMouseEnter={() => setList(true)}
                    onMouseLeave={() => setList(false)}
                    style={{ color: list ? "var(--colorB)" : "#c9d9d9" }}
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
                        <Link href="/therapien/energiearbeit">
                            Energiearbeit
                        </Link>
                    </div>
                )}
            </nav>

            <nav id="MobileNav">
                <div id="HamburgerBtn"></div>
                <div className="nav">
                    <Link href="/">Home</Link>
                    <Link
                        href="/therapien"
                        onMouseEnter={() => setList(true)}
                        onMouseLeave={() => setList(false)}
                        style={{ color: list ? "var(--colorB)" : "#c9d9d9" }}
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
                            <Link href="/therapien/energiearbeit">
                                Energiearbeit
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
