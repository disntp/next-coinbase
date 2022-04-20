import React, {useContext, useState, useEffect} from "react";
import {ContextList} from "../utils/contextList";
import coinGecko from "../pages/api/coinGecko";


const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const {addCoin} = useContext(ContextList);
  const [coins, setCoins] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  // const availableCoins = [
  //     "bitcoin",
  //     "ethereum",
  //     "litecoin",
  //     "bitcoin-cash",
  //     "tether",
  //     "bitcoin-sv",
  //     "dash",
  //     "monero",
  //     "eos",
  //     "cardano",
  //     "iostoken",
  // ]

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      const res = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "thb",
        },
      });
      setCoins(res.data);
      // setIsLoading(false);

      // console.log(res.data)
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFiltered(
      coins.filter( coin => {
        return (coin.symbol.toLowerCase().includes(search.toLowerCase()) || coin.id.toLowerCase().includes(search.toLowerCase()) )
       })
    )
  }, [search, coins])


  return (
    <div className="dropdown ml-10">
      <button
        className="btn btn-secondary dropdown-toggle" onClick={() => setIsActive(!isActive)}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu scrollable-menu" : "dropdown-menu scrollable-menu"} aria-labelledby="dropdownMenuButton">
      <input className="text-white form-control bg-dark bg-cover mt-0 z-199" type="text" placeholder="Search.." id="myInput" onChange={(e) => setSearch(e.target.value)} />
        {
          filtered.map((coin,index) => {
            return (
              <div key={index}>
                <a className="dropdown-item text-gray-50 bg-neutral-900" href="#" onClick={() => handleClick(coin.id)}>
                  <div className="row">
                  <img src={coin.image} alt="" height={10} width={25} />{" "}
                  <p className="ml-2">{coin.id}</p>
                  </div>
                </a>
              </div>
            )
          })

        }
      </div>
    </div>
  );
};

export default AddCoin;
