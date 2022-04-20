import React from 'react'
import Image from 'next/image'
import metamask from "../assests/metamask-icon.png";

const ButtonWallet = ({authenticate}) => {
  return (
    <div className="flex h-screen items-center justify-center bg-cover">


      <button onClick={authenticate} className="bg-yellow-300 px-6 py-3 rounded-xl text-lg animate-bounce uppercase hover:bg-white hover:text-black hover:animate-none meta-btn">
        <div className="row p-3">
          <Image className='md:justify-center md:items-center' src={metamask} alt={metamask} width={25} height={30} />
          <p className="pl-3 connect-text">Connect to MetaMask</p>
        </div>
      </button>
    </div>
  )
}

export default ButtonWallet