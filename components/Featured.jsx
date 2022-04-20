import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import Link from "next/link";
import Typical from "react-typical";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data)

  // if (!data) return null;

  return (
    <div className="featured">
      <div className="container">
        {/* Left */}
        <div className="left text-white">
          <h1 className="text-3xl">Explore top Crypto's Like</h1>
          <h2 className="bg-gradient-to-l from-purple-500 via-fuchsia-500 to-pink-500 font-bold text-gradient drop-shadow-md text-2xl">
            {
              <Typical
              steps={[
                "Bitcoin",
                1000,
                "Ethereum",
                1000,
                "Litecoin",
                1000,
                "Bitcoin Cash",
                1000,
                " Cardano",
                1000,
              ]}
              loop={Infinity}
              wrapper="h2"
            />
            }
          </h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <Link href={"/#table"}>
            <button className="btns px-3 py-2 rounded-xl text-white outline hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              SEE MORE COINS
            </button>
          </Link>
        </div>

        {/* Right */}

        <div className="right">
          <div className="card hover:animate-pulse">
            <div className="top">
              <img src={data[0].image} alt="" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>

            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiTrendingDown className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiTrendingUp className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card hover:animate-pulse">
            <div className="top">
              <img src={data[1].image} alt="" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>${data[1].current_price.toLocaleString()}</p>
            </div>

            {data[1].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiTrendingDown className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiTrendingUp className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card hover:animate-pulse">
            <div className="top">
              <img src={data[2].image} alt="" />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>${data[2].current_price.toLocaleString()}</p>
            </div>

            {data[2].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiTrendingDown className="icon" />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiTrendingUp className="icon" />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card hover:animate-pulse">
            <div className="top">
              <img src={data[3].image} alt="" />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>${data[3].current_price.toLocaleString()}</p>
            </div>

            {data[3].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiTrendingDown className="icon" />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiTrendingUp className="icon" />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card hover:animate-pulse">
            <div className="top">
              <img src={data[4].image} alt="" />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>${data[4].current_price.toLocaleString()}</p>
            </div>

            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiTrendingDown className="icon" />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiTrendingUp className="icon" />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card hover:animate-pulse">
            <div className="top">
              <img src={data[5].image} alt="" />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>${data[5].current_price.toLocaleString()}</p>
            </div>

            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiTrendingDown className="icon" />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiTrendingUp className="icon" />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
