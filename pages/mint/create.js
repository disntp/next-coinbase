import React from "react";
import DashBoard from "../../components/DashBoard";
import Head from "next/dist/shared/lib/head";
const CreateNFT = () => {
  return (
    <div className="uppercase items-center justify-center-cover bg-cove" style={{paddingBottom:"5rem"}}>
      <Head>
        <title>NFT Minter</title>
      </Head>
      <div className="uppercase items-center justify-center-cover bg-cover bg-neutral-900 bg_selection" style={{zIndex:"0"}}></div>
      <div className="pt-10">
            <h1
              // id="table"
              className="mt-7 bg-gradient-to-l from-indigo-500 via-purple-400 to-indigo-500 py-5 text-3xl text-center font-bold text-gradient drop-shadow-md"
            >
              Create own NFT
            </h1>
          </div>
      <div className="flex flex-wrap justify-center pl-4 pr-4">
        <DashBoard />
      </div>
    </div>
  );
};

export default CreateNFT;
