// import styles from "@/styles/Layout.module.css";

import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div>
                <div>
                    <Image
                        src={"/assets/logo.png"}
                        alt={"Logo"}
                        fill
                        style={{
                            objectFit: "contain",
                            objectPosition: "left",
                        }}
                    />
                </div>
            </div>
        </header>
    );
}
