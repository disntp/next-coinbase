import React from 'react'
import { useMoralis } from 'react-moralis'
import ButtonWallet from '../components/ButtonWallet'
import DisplayTransaction from '../components/DisplayTransaction'
import Head from "next/head";

const Transaction = () => {
  const {isAuthenticated, authenticate} = useMoralis()
  return (
    <div className="uppercase sm:text-center">
      <Head>
        <title>Transaction</title>
      </Head>
    {isAuthenticated ? (
      <>
        <div className="pt-7 field-text">
        <h1
          // id="table"
          className="mt-7 bg-gradient-to-l from-indigo-500 via-purple-400 to-indigo-500 py-5 text-4xl text-center font-bold text-gradient drop-shadow-md"
        >
          Transactions
        </h1>
        </div>
          {/* <DisplayTransaction /> */}
      </>
    ) : (
      <ButtonWallet authenticate={authenticate} />
    )}
  </div>
  )
}

export default Transaction