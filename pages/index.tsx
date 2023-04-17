import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoppers.com | Save Money. Live Better</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>
      <main className="">
        <Navbar />
      </main>
    </>
  );
}
