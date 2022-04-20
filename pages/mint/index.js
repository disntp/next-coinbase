import React, { useEffect, useState } from "react";
import Head from "next/head";
import metamask from "../../assests/metamask-icon.png";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import DashBoard from "../../components/DashBoard";
import ButtonWallet from "../../components/ButtonWallet";

const Mint = () => {
  const { authenticate, isAuthenticated } = useMoralis();
  const router = useRouter();


  useEffect(() => {
    if (isAuthenticated){
        router.push('/mint/create');
    }
  }, [isAuthenticated]);



  return (
    <div className="flex items-center justify-center back_b bg-neutral-900 bg-cover">
      <Head>
        <title>Connect Wallet</title>
      </Head>

      {/* <button onClick={authenticate} className="bg-yellow-300 px-6 py-3 rounded-xl text-lg animate-bounce uppercase hover:bg-white hover:text-black hover:animate-none">
        <div className="row p-3">
          <Image src={metamask} alt={metamask} width={25} height={30} />
          <p className="pl-3">Login to MetaMask</p>
        </div>
      </button> */}

      {/* {<ButtonWallet authenticate={authenticate} />} */}

      {
        isAuthenticated ? (
          <>
          <DashBoard/>
          </>
        )
        :
        (
          <ButtonWallet authenticate={authenticate} />
        )
      }
    </div>
  );
};

export default Mint;
