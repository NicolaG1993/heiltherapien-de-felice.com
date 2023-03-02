// import styles from "@/styles/Layout.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div>
                <Link href={"/"}>
                    <Image
                        src={"/assets/logo.png"}
                        alt={"Logo"}
                        fill
                        style={{
                            objectFit: "contain",
                            objectPosition: "left",
                        }}
                    />
                </Link>
            </div>
        </header>
    );
}
