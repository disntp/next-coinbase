import React from "react";
import { useRouter } from 'next/router'

const CoinDetail = () => {
  const router = useRouter()
  const  pid  = router.query
  
  // console.log(pid);

  return (
    <div className="coinsummary shadow border p-2 rounded container items-center w-full h-20">
      CoinDetail
    </div>
  );
};

export default CoinDetail;
