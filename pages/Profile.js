import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ProfilePage() {
  const name = "SongSongChae";
  return (
    <div className={styles.profile}>
      <h1>{name}'s PROFILE</h1>
      <div className={styles.con1}>
        <div className={styles.con2}>
          <Image src="/img/profile.jpg" width={500} height={650} />
        </div>
        <div class={styles.con3}>
          <ul>
            <li>
              <b>name | </b>송채연
            </li>
            <li>
              <b>date of birth | </b>2002.06.28
            </li>
            <li>
              <b>residence | </b>인천 서구
            </li>
            <li>
              <b>academic ability | </b>중부대학교 정보보호학 전공
            </li>
            <li>
              <b>certificate | </b>네트워크 관리사 2급, 운전면허 2종
            </li>
            <li>
              <b>e-mail | </b>thd0628@naver.com
            </li>
            <li>
              <b>phone number | </b>01077087136
            </li>
            <li>
              <Image src="/img/kakaotalk.jpg" width={20} height={20} />
              <b className={styles.kakao}>kakatalk ID | </b>schyeo
            </li>
            <li>
              <a href="https://instagram.com/vvy_schyeo_bh?utm_medium=copy_link">
                <Image src="/img/instagram.jpg" width={20} height={20} />
              </a>
              <b className={styles.insta}>instagram | </b>vvy_schyeo_bh
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
