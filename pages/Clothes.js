import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function ClothesPage() {
  const name = "SongSongChae";
  return (
    <div className={styles.clothes}>
      <h1>{name}&apos;s CLOTHES</h1>
      <div className={styles.con5}>
        <div className={styles.clo1}>
          <a href="https://kream.co.kr/products/38367">
            <Image src="/img/clo1.jpg" width={500} height={500} />
          </a>
          <br />
          <b>
            Jordan 1 x Travis Scott x Fragment Retro Low OG SP Military Blue
          </b>
        </div>
        <div className={styles.clo2}>
          <a href="https://kream.co.kr/products/37241">
            <Image src="/img/clo2.jpg" width={500} height={500} />
          </a>
          <br />
          <b>Jordan 1 Mid Wolf Grey</b>
        </div>
        <div className={styles.clo3}>
          <a href="https://kream.co.kr/products/45438">
            <Image src="/img/clo3.jpg" width={500} height={500} />
          </a>
          <br />
          <b>Jordan 1 Element Gore-Tex Sail</b>
        </div>
        <div className={styles.clo4}>
          <a href="https://kream.co.kr/products/60294">
            <Image src="/img/clo4.jpg" width={500} height={500} />
          </a>
          <br />
          <b>Nike x Stussy Air Force 1 &apos;07 Mid SP Black and Light Bone</b>
        </div>
        <div className={styles.clo5}>
          <a href="https://kream.co.kr/products/31662">
            <Image src="/img/clo5.jpg" width={500} height={500} />
          </a>
          <br />
          <b>IAB Studio Hoodie Black White</b>
        </div>
        <div className={styles.clo6}>
          <a href="https://kream.co.kr/products/80174">
            <Image src="/img/clo6.jpg" width={500} height={500} />
          </a>
          <br />
          <b>IAB Studio Pigment Hoodie & Sack Black</b>
        </div>
        <div className={styles.clo7}>
          <a href="https://kream.co.kr/products/38325">
            <Image src="/img/clo7.jpg" width={500} height={500} />
          </a>
          <br />
          <b>IAB Studio Pigment Hoodie & Sack Black</b>
        </div>
        <div className={styles.clo8}>
          <a href="https://kream.co.kr/products/72048">
            <Image src="/img/clo8.jpg" width={500} height={500} />
          </a>
          <br />
          <b>IAB Studio T-Shirt White Navy - 22FW</b>
        </div>
      </div>
    </div>
  );
}
