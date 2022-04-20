import React from 'react'
import CoinDetail from '../components/CoinDetail'

const coindetail = () => {
  return (
    <div className='uppercase items-center w-full h-screen container'>
         <h1
        id="home"
        className="mb-8 mt-7 bg-gradient-to-l from-indigo-400 via-purple-300 to-indigo-400 py-5  text-center font-bold text-gradient drop-shadow-md lg:text-5xl"
      >
        Crypto Detail
      </h1>

        <CoinDetail/>
    </div>
  )
}

export default coindetail