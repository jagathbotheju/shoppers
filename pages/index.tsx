import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoppers.com | Save Money. Live Better</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>
      <main className="bg-lightBlue">
        <Navbar />
        <div className="max-w-7xl mx-auto bg-white">
          <Banner />
        </div>
      </main>
    </>
  );
}
