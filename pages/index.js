import CoinDetail from "../components/CoinDetail";
import CoinSummary from "../components/CoinSummary";
import Head from "next/head";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import { Fragment } from "react";
// import logo from '../assests/currency.png'

export default function Home() {
  return (
    <div className="mr-2 uppercase items-center w-full h-screen bg-gradient-to-b from-neutral-800 via-purple-900 to-black bg-cover" >
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/currency.png" />
      </Head>
      <div className="pt-[7rem]">
        <h1
          id="home"
          className="text_banner pt-11 bg-gradient-to-l from-indigo-400 via-purple-300 to-indigo-400 py-1 lg:text-5xl text-center font-bold text-gradient drop-shadow-md"
        >
          Coinbase star
        </h1>
      </div>
      <Featured />
      {/* <iframe
        className="absolute top-0 left-0"
        src="https://my.spline.design/primitivescopy-2e1e5f4c606317a831b1cd26d9ca968c/"
        frameBorder="{0}"
        width="40%"
        height="80%"
        allow="encrypted-media"
        // allowFullScreen
      ></iframe> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(7,2,11)"
          fillOpacity={1}
          d="M0,192L48,192C96,192,192,192,288,165.3C384,139,480,85,576,85.3C672,85,768,139,864,165.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg> */}

      {/* <div id="table"></div> */}
      <CoinSummary />
      <Fragment>
        <ScrollButton />
      </Fragment>
      <Footer />
    </div>
  );
}
