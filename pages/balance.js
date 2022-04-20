import React from "react";
import Balance from "../components/Balance";
import { useMoralis } from "react-moralis";
import ButtonWallet from "../components/ButtonWallet";
import Head from "next/head";

const BalanceEth = () => {
  const { isAuthenticated, authenticate } = useMoralis();

  return (
    <div className="uppercase items-center justify-center-cover bg-cover bg-neutral-900" style={{paddingBottom:"5rem"}}>
      <Head>
        <title>Balance</title>
      </Head>
      {isAuthenticated ? (
        <>
          <div className="pt-10">
            <h1
              // id="table"
              className="mt-7 bg-gradient-to-l from-indigo-500 via-purple-400 to-indigo-500 py-5 text-3xl text-center font-bold text-gradient drop-shadow-md"
            >
              Balance & Transfer
            </h1>
          </div>
          <div className="flex flex-wrap justify-center pl-4 pr-4">
            <Balance />
          </div>
        </>
      ) : (
        <ButtonWallet authenticate={authenticate} />
      )}
    </div>
  );
};

export default BalanceEth;
