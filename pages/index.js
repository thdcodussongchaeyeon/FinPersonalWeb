import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SongSongChae&apos;s WEBSITE</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <br />
          SongSongChae&apos;s WEBSITE
        </h1>
      </main>
      <div className={styles.image}>
        <Image src="/img/hi.png" width={800} height={800} />
      </div>
    </div>
  );
}
