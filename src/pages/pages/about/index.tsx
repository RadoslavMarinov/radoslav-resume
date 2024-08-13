/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <>
      <Head>
        <title>Riko</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>About</div>
      <div>
        <h1>{count % 5 === 0 ? "Tadaaa!" : ""}</h1>

        <img src="/pages/profile-pic.jpeg" alt="" width={100} height={99}></img>
        <button
          className="bg-slate-700 text-white"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Clicket {count} times
        </button>
        <pre>BASE_PATH = {basePath}</pre>
      </div>
    </>
  );
}
