import React, { useContext, useEffect, useState } from "react";
import SelectionCoin from "../components/SelectionCoin";
import { ContextList } from "../utils/contextList";
import coinGecko from "../pages/api/coinGecko";
import Loading from "../components/Loading";
import AddCoin from "../components/AddCoin";
import Head from "next/dist/shared/lib/head";

export default function Selection() {
  const [coins, setCoins] = useState([]);
  const { doList, deleteCoin } = useContext(ContextList);
  const [isLoading, setIsLoading] = useState(false);
  let times = 500;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "thb",
          ids: doList.join(","),
        },
      });
      setCoins(res.data);
      setIsLoading(false);

      //   console.log(res.data)
    };
    if (doList.length > 0) {
      const interval = setInterval(() => {
        fetchData();
      }, times);
      return () => clearInterval(interval);
    } else {
      setCoins([]);
      setIsLoading(false);
    }
  }, [doList, times]);

  // if (isLoading) return <Loading />;

  //   const renderCoins = () => {
  //     if (isLoading) {
  //       return <Loading />;
  //     }
  //     return (
  //       <ul className="coinlist list-group mt-2">
  //         {coins.map(coin => {
  //         <SelectionCoin coin={coin} />
  //           })}
  //       </ul>
  //     );
  //   };

  return (
    <div className="uppercase items-center justify-center-cover bg-cover bg-gradient-to-t from-indigo-500 via-purple-600 to-neutral-900">
      <Head>
        <title>Crypto Selection</title>
      </Head>
      <div>
        <div className="pt-11">
          <h1
            id="home"
            className="mb-8 bg-gradient-to-l from-indigo-400 via-purple-300 to-indigo-400 py-5  text-center font-bold text-gradient drop-shadow-md lg:text-5xl"
          >
            Watch Lists
          </h1>
        </div>
      </div>
      <AddCoin />
      {/* {renderCoins()} */}
      <div className="flex flex-wrap justify-center pl-4 pr-4">
        {coins.map((coin, index) => (
          <SelectionCoin
            coin={coin}
            key={index}
            isLoading={isLoading}
            deleteCoin={deleteCoin}
          />
        ))}
      </div>
    </div>
  );
}
