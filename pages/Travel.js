import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function TravelPage() {
  const name = "SongSongChae";
  return (
    <div className={styles.travel}>
      <div className={styles.con6}>
        <h1>{name}'s TRAVEL</h1>
        <div className={styles.tra1}>
          <b>여수</b>
          <br />
          <div className={styles.tra1img}>
            <Image src="/img/tra1_1.jpg" width={500} height={700} />
          </div>
          <div className={styles.tra1img}>
            <Image src="/img/tra1_2.jpg" width={500} height={700} />
          </div>
          <div className={styles.tra1img}>
            <Image src="/img/tra1_3.jpg" width={500} height={700} />
          </div>
          <div className={styles.tra1img}>
            <Image src="/img/tra1_4.jpg" width={500} height={700} />
          </div>
        </div>
        <div className={styles.tra2}>
          <b>제주도</b>
          <br />
          <div className={styles.tra2img}>
            <Image src="/img/tra2_1.jpg" width={500} height={700} />
          </div>
          <div className={styles.tra2img}>
            <Image src="/img/tra2_2.jpg" width={500} height={700} />
          </div>
          <div className={styles.tra2img}>
            <Image src="/img/tra.jpg" width={500} height={700} />
          </div>
        </div>
        <div className={styles.tra3}>
          <b>강릉</b>
          <br />
          <div className={styles.tra3img}>
            <Image src="/img/tra3_1.jpg" width={500} height={700} />
          </div>
          <div className={styles.tra3img}>
            <Image src="/img/tra3_2.jpg" width={500} height={700} />
          </div>
          <div className={styles.tra3img}>
            <Image src="/img/tra3_3.jpg" width={500} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
}
