// import { useEffect } from "react";
import styles from "./HamburgerButton.module.css";

export default function HamburgerButton({ toggleNav, status }) {
    const getBtnStyle = () => {
        if (status) {
            return styles["hamBtn-active"];
        } else {
            return styles["hamBtn"];
        }
    };

    return (
        <div
            id={styles["hamBtn"]}
            className={getBtnStyle()}
            onClick={toggleNav}
        >
            <div className={styles["stick"]}></div>
        </div>
    );
}
