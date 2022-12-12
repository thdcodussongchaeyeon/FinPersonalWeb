import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function HobbyPage() {
  const name = "SongSongChae";
  return (
    <div className={styles.hobby}>
      <h1>{name}&apos;s HOBBY</h1>
      <div>
        <div className={styles.mus}>
          <Link href="/Music">
            <Image src="/img/mus.jpg" width={500} height={650} />
          </Link>
          <br />
          <b>MUSIC</b>
        </div>

        <div className={styles.clo}>
          <Link href="/Clothes">
            <Image src="/img/clo.jpg" width={500} height={650} />
          </Link>
          <br />
          <b>CLOTHES</b>
        </div>
        <div className={styles.tra}>
          <Link href="/Travel">
            <Image src="/img/tra.jpg" width={500} height={650} />
          </Link>
          <br />
          <b>TRAVEL</b>
        </div>
        <div className={styles.etc}>
          <Link href="/Etc">
            <Image src="/img/etc.jpg" width={500} height={650} />
          </Link>
          <br />
          <b>ETC</b>
        </div>
      </div>
    </div>
  );
}
