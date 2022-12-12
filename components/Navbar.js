import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/Profile">
          <a>PROFILE</a>
        </Link>
        <Link href="/Hobby">
          <a>HOBBY</a>
        </Link>
        <Link href="/Portfolio">
          <a>PORTFOLIO</a>
        </Link>
      </div>
    </div>
  );
}
