import HamburgerButton from "@/components/HamburgerButton/HamburgerButton";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [list, setList] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const closeAll = () => {
        setList(false);
        setMobileNav(false);
    };

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
                        <Link href="/therapien/deltacure">deltaCure</Link>
                    </div>
                )}
            </nav>

            <nav id="MobileNav">
                <div id="HamburgerBtn">
                    <HamburgerButton
                        toggleNav={() =>
                            setMobileNav((mobileNav) => !mobileNav)
                        }
                        status={mobileNav}
                    />
                </div>

                <div
                    className={`nav ${
                        !mobileNav
                            ? ""
                            : mobileNav && list
                            ? "openNavMax"
                            : "openNav"
                    }`}
                    // style={{
                    //     transition: "max-height 0.15s ease-out",
                    //     maxHeight: mobileNav ? "100%" : "0",
                    //     transform: mobileNav ? "scaleY(1)" : "scaleY(0)",
                    // }}
                >
                    <Link href="/" onClick={closeAll}>
                        Home
                    </Link>
                    <p
                        onClick={() => setList((list) => !list)}
                        style={{
                            color: list ? "var(--colorB)" : "#c9d9d9",
                        }}
                    >
                        Therapien
                    </p>
                    {list && (
                        <div id="MobileList" onClick={closeAll}>
                            <Link
                                href="/therapien/autonome-regulationsdiagnostik"
                                onClick={closeAll}
                            >
                                Autonome Regulationsdiagnostik
                            </Link>
                            <Link
                                href="/therapien/psychokinesiologie"
                                onClick={closeAll}
                            >
                                Psychokinesiologie
                            </Link>
                            <Link
                                href="/therapien/mentalfeldtherapie"
                                onClick={closeAll}
                            >
                                Mentalfeldtherapie
                            </Link>
                            <Link
                                href="/therapien/systemische-familienaufstellung"
                                onClick={closeAll}
                            >
                                Systemische Familienaufstellung
                            </Link>
                            <Link
                                href="/therapien/energiearbeit"
                                onClick={closeAll}
                            >
                                Energiearbeit
                            </Link>
                        </div>
                    )}
                    <Link href="/literatur" onClick={closeAll}>
                        Literatur
                    </Link>
                    <Link href="/links" onClick={closeAll}>
                        Links
                    </Link>
                    <Link href="/seminare" onClick={closeAll}>
                        Seminare
                    </Link>
                    <Link href="/impressum" onClick={closeAll}>
                        Impressum
                    </Link>
                    <Link href="/kontakt" onClick={closeAll}>
                        Kontakt
                    </Link>
                </div>
            </nav>
        </>
    );
}
