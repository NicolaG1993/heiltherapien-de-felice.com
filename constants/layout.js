import Head from "next/head";
import Header from "@/constants/Header";
import Footer from "@/constants/Footer";
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <>
            <Head></Head>
            <Header />
            <section>
                <Nav />
                {children}
                <Footer />
            </section>
        </>
    );
}
