import { MainNav } from "@/components/Nav/MainNav";
import Head from "next/head";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Riko</title>
        <meta name="description" content="Demo web site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
      <main>{children}</main>
    </>
  );
};
