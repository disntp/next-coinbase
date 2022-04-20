import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CoinDetail from "../../components/CoinDetail";
import Loading from "../../components/Loading";
import HistoryChart from "../../components/HistoryChart";
import CoinData from "../../components/CoinData";
import coinGecko from "../api/coinGecko";
import Head from "next/head";

const CoinDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsLoading(true);
        const [day, week, year, detail] = await Promise.all([
          coinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "thb",
              days: "1",
            },
          }),
          coinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "thb",
              days: "7",
            },
          }),
          coinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "thb",
              days: "365",
            },
          }),
          coinGecko.get("/coins/markets", {
            params: {
              vs_currency: "thb",
              ids: id,
            },
          }),
        ]);

        //   const resultDay = await coinGecko.get(`/coins/${id}/market_chart/`, {
        //     params: {
        //       vs_currency: "thb",
        //       days: "1",
        //     },
        //   });
        //   const resultWeek = await coinGecko.get(`/coins/${id}/market_chart/`, {
        //     params: {
        //       vs_currency: "thb",
        //       days: "7",
        //     },
        //   });
        //   const resultYear = await coinGecko.get(`/coins/${id}/market_chart/`, {
        //     params: {
        //       vs_currency: "thb",
        //       days: "365",
        //     },
        //   });
        //   console.log(result.data);

        setCoinData({
          day: formatData(day.data.prices),
          week: formatData(week.data.prices),
          year: formatData(year.data.prices),
          detail: detail.data[0],
        });
        setIsLoading(false);
      };
      fetchData();
    } else {
      //   setCoinData({});
      router.push("/selection");
      setIsLoading(false);
    }
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="coinlist">
        <CoinData data={coinData.detail} />
        <HistoryChart data={coinData} />
      </div>
    );
  };

  return (
    <div className="uppercase items-center w-full h-screen container">
      <Head>
        <title>Crypto Currencies Detail</title>
      </Head>
      <h1
        id="home"
        className="mb-2 mt-7 bg-gradient-to-l from-indigo-400 via-purple-300 to-indigo-400 py-5  text-center font-bold text-gradient drop-shadow-md lg:text-5xl"
      >
        {id} Chart
      </h1>
      <button
        className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 pl-5 pr-5 rounded-full absolute right-10 animate-bounce hover:animate-none hover:bg-purple-700 hover:text-white"
        onClick={() => router.back()}
        style={{ top: "7rem" }}
      >
        Back
      </button>
      <div className="rounded-lg mt-7">
        <div className="text-center p-2 text-purple-400">{id}</div>
        {/* <CoinDetail /> */}
        {renderData()}
      </div>
    </div>
  );
};

export default CoinDetailPage;
