import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <p>
                <Link href="/impressum">Impressum</Link>
                {" | "}
                <Link href="/kontakt">Kontakt</Link>
                {" | "}
                <a
                    href="https://www.nicogdesign.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    by NGD
                </a>
            </p>
            <p>
                © Copyright {new Date().getFullYear()}
                {" | "}All Rights Reserved.
            </p>
        </footer>
    );
}
