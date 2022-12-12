import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function PortfolioPage() {
  const name = "SongSongChae";
  return (
    <div className={styles.portfolio}>
      <h1>{name}&apos;s PORTFOLIO</h1>
      <div className={styles.con8}>
        <div className={styles.port1}>
          <b>SCYWEB</b>
          <br />
          <div className={styles.port1img}>
            <a href="https://scyweb.netlify.app/">
              <Image src="/img/port1.png" width={1200} height={800} />
            </a>
          </div>
        </div>
        <div className={styles.port2}>
          <b>Joongbu-Travel</b>
          <br />
          <div className={styles.port2img}>
            <a href="https://delightful-creponne-d0ef71.netlify.app/index.html">
              <Image src="/img/port2.png" width={1200} height={800} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
