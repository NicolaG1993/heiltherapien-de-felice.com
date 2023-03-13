import Head from "next/head";
import Header from "@/constants/Header";
import Footer from "@/constants/Footer";
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="keywords" content="" />
                <meta name="description" content="" />

                <meta property="og:description" content="" />

                <meta
                    property="og:url"
                    content="https://www.heiltherapien-de-felice.org"
                />
                <meta property="og:image" content="/assets/logo.png" />
                <meta property="og:image:alt" content="Logo" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    href="/assets/logo.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="512x512"
                    href="/assets/logo.png"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="author" content="NGD • Nicola Gaioni Design" />
                <meta charSet="UTF-8" />
            </Head>

            <Header />
            <section>
                <Nav />
                {children}
                <Footer />
            </section>
        </>
    );
}
