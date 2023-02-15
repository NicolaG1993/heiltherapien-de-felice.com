import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <p>
                <Link href="/impressum">Impressum</Link>
                {" | "}
                <Link href="/kontakt">Kontakt</Link>
                {" | "}
                <Link href="/impressum">by NGD</Link>
            </p>
            <p>
                © Copyright {new Date().getFullYear()}
                {" | "}All Rights Reserved.
            </p>
        </footer>
    );
}
