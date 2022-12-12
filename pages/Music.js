import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function MusicPage() {
  const name = "SongSongChae";
  return (
    <div className={styles.music}>
      <h1>{name}'s MUSIC</h1>
      <div className={styles.con4}>
        <div className={styles.mus1}>
          <a href="https://youtu.be/UdnCxnYvb2o">
            <Image src="/img/mus1.jpg" width={500} height={500} />
          </a>
          <br />
          <b>Home - BIG Naugthy(서동현), 엑시(Exy), Raiden</b>
        </div>
        <div className={styles.mus2}>
          <a href="https://youtu.be/SbIw-fcdGQo">
            <Image src="/img/mus2.jpg" width={500} height={500} />
          </a>
          <br />
          <b>Vancouver - BIG Naugthy(서동현)</b>
        </div>
        <div className={styles.mus3}>
          <a href="https://youtu.be/-g-cu6olXVE">
            <Image src="/img/mus3.jpg" width={500} height={500} />
          </a>
          <br />
          <b>도망쳐!-! - Odd95</b>
        </div>
        <div className={styles.mus4}>
          <a href="https://youtu.be/MYZXUJ-BG-Q">
            <Image src="/img/mus4.jpg" width={500} height={500} />
          </a>
          <br />
          <b>Summer - Paul Blanco (Feat. BE'O(비오))</b>
        </div>
        <div className={styles.mus5}>
          <a href="https://youtu.be/t6VgxIIHsqk">
            <Image src="/img/mus5.jpg" width={500} height={500} />
          </a>
          <br />
          <b>처음 마주쳤을 때처럼 - TOIL & Gist</b>
        </div>
        <div className={styles.mus6}>
          <a href="https://youtu.be/Qa3HVkcZj1Q">
            <Image src="/img/mus6.jpg" width={500} height={500} />
          </a>
          <br />
          <b>Part Of Her - 한요한 & 김승민</b>
        </div>
      </div>
    </div>
  );
}
