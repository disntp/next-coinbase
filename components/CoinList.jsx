import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../pages/api/coinGecko";
import { ContextList } from "../utils/contextList";
import Coin from "./Coin";
import Loading from "./Loading";
import { useRouter } from "next/router";
import AddCoin from "./AddCoin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { doList } = useContext(ContextList);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // let times = 1000;
  // console.log(doList)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "thb",
          // ids: doList.join(","),
        },
      });
      setCoins(res.data);
      setIsLoading(false);

      // console.log(res.data)
    };
    fetchData();
    // const interval = setInterval(() => {
    // }, times);
    // return () => clearInterval(interval);
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      return <Loading />;
    }
    return (
      <ul className="coinlist list-group mt-2">
        {/* {coins.map(coin => { */}
        <Coin coin={coins} />
        {/* })} */}
      </ul>
    );
  };
  return (
    <div className="bg-white color" >
      <div className="pt-6" style={{ height: "52rem", paddingTop: "6rem" }}>
        <div className="" id="table"></div>
        <h1
          // id="table"
          className="mt-7 bg-gradient-to-l from-indigo-500 via-purple-400 to-indigo-500 py-5 text-3xl text-center font-bold text-gradient drop-shadow-md"
        >
          Crypto Currencies List
        </h1>
        {/* <button
          className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 pl-5 pr-5 rounded-full absolute right-10 space-x-4"
          onClick={() => router.reload()}
        >
          Reload
        </button> */}
        {renderCoins()}
      </div>
    </div>
  );
};

export default CoinList;
