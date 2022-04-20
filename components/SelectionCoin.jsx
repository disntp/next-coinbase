import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const SelectionCoin = ({ coin, isLoading, deleteCoin }) => {
  // const [ data, setData ] = useState([])
  // console.log(coin);

  useEffect(() => {
    const ReLoading = async () => {
      if (isLoading) {
        return <Loading />;
      }
    };
    ReLoading();
  }, [isLoading]);

  return (
    <>
      <Link href={`/coins/${coin.id}`}>
        <a style={{textDecoration: 'none'}}>
        {/* <li className="border-neutral-700 coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-item-center justify-self-center text-white bg-neutral-800 cursor-pointer hover:bg-slate-600 coin">
          <img
            className="coinlist-image align-middle"
            src={coin.image}
            alt=""
            width={30}
            height={20}
          />
          <span className={"text-decoration-center align-middle"}>
            {coin.name}
          </span>
          <span
            className={
              coin.id == "iostoken"
                ? "text-decoration-center align-middle"
                : "text-decoration-center align-middle"
            }
          >
            {coin.current_price}
          </span>
          <span
            className={
              coin.price_change_percentage_24h < 0
                ? "text-danger mr-2 align-middle"
                : "text-success mr-2 align-middle"
            }
          >
            {" "}
            {coin.price_change_percentage_24h < 0 ? (
              <i className="fas fa-sort-down align-middle mr-1"></i>
            ) : (
              <i className="fas fa-sort-up align-middle mr-1"></i>
            )}
            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
          </span>
          <i
            className="delete-icon fas fa-times-circle text-danger"
            onClick={(e) => {
              e.preventDefault();
              deleteCoin(coin.id);
            }}
          ></i>
        </li> */}

        <div
          className="flex flex-col items-center justify-center bg-neutral-800 text-white rounded-lg shadow-md p-4 m-6 w-full overflow-hidden sm:w-52 coin"
          style={{ height: "15rem", width: "16rem" }}
        >
          <img
            className="coinlist-image align-middle pt-8"
            src={coin.image}
            alt=""
            width={30}
            height={20}
          />
          <span className={"text-decoration-center align-middle pt-4 pb-4"}>
            {coin.name}
          </span>
          <span
            className={
              coin.id == "iostoken"
                ? "text-decoration-center align-middle"
                : "text-decoration-center align-middle"
            }
          >
            {coin.current_price.toLocaleString() + " ฿"}
          </span>
          <span
            className={
              coin.price_change_percentage_24h < 0
                ? "text-danger mr-2 align-middle pt-4 pb-4"
                : "text-success mr-2 align-middle pt-4 pb-4"
            }
          >
            {" "}
            {coin.price_change_percentage_24h < 0 ? (
              <i className="fas fa-sort-down align-middle mr-1"></i>
            ) : (
              <i className="fas fa-sort-up align-middle mr-1"></i>
            )}
            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
          </span>

          <span>
          <i
            className="delete-icon fas fa-times-circle text-danger"
            onClick={(e) => {
              e.preventDefault();
              deleteCoin(coin.id);
            }}
          ></i>
          </span>
         
        </div>
        </a>
      </Link>
      
    </>
  );
};

export default SelectionCoin;
