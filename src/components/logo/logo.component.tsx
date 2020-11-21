import Link from "next/link";
import * as styles from "./logo.module.css";

export const Logo = () => (
  <Link href="/">
    <a className={styles.logo}>mattc.</a>
  </Link>
);
