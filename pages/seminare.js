import Image from "next/image";
import Link from "next/link";

export default function Seminare() {
    return (
        <main id="Seminare">
            <h1>Seminare</h1>
            <div className="content">
                <div>
                    <Image
                        src={"/assets/brochure.png"}
                        alt={"Seminare brochure"}
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <div>
                    <h2>Termine werden bekannt gegeben.</h2>
                </div>
            </div>
        </main>
    );
}
