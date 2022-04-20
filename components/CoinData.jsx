import React from "react";

const CoinData = ({ data }) => {
  // console.log(data);
  const renderData = () => {
    if (data) {
      return (
        <div className="p-2 row m-3 pl-7 text-center">
          <div className="col-sm">
            <div className="d-flex flex-column mb-2">
              <span className="text-white">Market Cap</span>
              <span className="text-sky-400">
                {data.market_cap
                  ? data.market_cap.toLocaleString()
                  : data.market_cap}
              </span>
            </div>
            <hr />
            <div className="d-flex flex-column mt-2">
              <span className="text-white">Total Supply</span>
              <span className="text-sky-400">
                {data.total_supply
                  ? data.total_supply.toLocaleString()
                  : data.total_supply}
              </span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column mb-2">
              <span className="text-white">High 24h</span>
              <span className="text-green-400">{data.high_24h.toLocaleString()}</span>
            </div>
            <hr />
            <div className="d-flex flex-column mt-2">
              <span className="text-white">Circulating Supply</span>
              <span className="text-sky-400">
                {data.circulating_supply
                  ? data.circulating_supply.toLocaleString()
                  : data.circulating_supply}
              </span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column mb-2">
              <span className="text-white">Low 24h</span>
              <span className="text-red-400">{data.low_24h.toLocaleString()}</span>
            </div>
            <hr />
            <div className="d-flex flex-column mt-2">
              <span className="text-white">Total Volume</span>
              <span className="text-sky-400">
                {data.total_volume
                  ? data.total_volume.toLocaleString()
                  : data.total_volume}
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  //   function numberWithCommas(x) {
  //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  return <>{renderData()}</>;
};

export default CoinData;
