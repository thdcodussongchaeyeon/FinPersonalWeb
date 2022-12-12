import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function EtcPage() {
  const name = "SongSongChae";
  return (
    <div className={styles.travel}>
      <div className={styles.con7}>
        <h1>{name}&apos;s ETC</h1>
        <div className={styles.etc1}>
          <b>Soccer</b>
          <br />
          <div className={styles.etc1img}>
            <Image src="/img/etc.jpg" width={500} height={700} />
          </div>
          <div className={styles.etc1img}>
            <Image src="/img/etc1.jpg" width={500} height={700} />
          </div>
        </div>
        <div className={styles.etc2}>
          <b>Tatto</b>
          <br />
          <div className={styles.etc2img}>
            <Image src="/img/etc2.jpg" width={500} height={500} />
          </div>
          <div className={styles.etc2img}>
            <Image src="/img/etc3.jpg" width={500} height={500} />
          </div>
        </div>
        <div className={styles.etc3}>
          <b>Alcohol</b>
          <br />
          <div className={styles.etc3img}>
            <Image src="/img/etc4.jpg" width={500} height={700} />
          </div>
        </div>
        <div className={styles.etc4}>
          <b>Game</b>
          <br />
          <div className={styles.etc4img}>
            <Image src="/img/etc5.jpg" width={700} height={400} />
          </div>
        </div>
        <div className={styles.etc5}>
          <b>Sing</b>
          <br />
          <div className={styles.etc5img}>
            <Image src="/img/etc6.jpg" width={700} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
