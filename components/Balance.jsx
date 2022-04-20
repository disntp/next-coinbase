import Moralis from "moralis";
import React, { useEffect, useState } from "react";
import {
  useMoralisWeb3Api,
  useMoralis,
  useERC20Balances,
  useWeb3Transfer,
} from "react-moralis";
import Swal from "sweetalert2";
import ButtonWallet from "../components/ButtonWallet";
import { useRouter } from "next/router";

const Balance = () => {
  const router = useRouter();
  const Web3Api = useMoralisWeb3Api();
  const { fetchERC20Balances, data } = useERC20Balances();
  const [ethBalance, setEthBalance] = useState(0);
  const { account, isAuthenticated, authError } = useMoralis();
  const [amount, setAmount] = useState(0);
  const [adress, setAdress] = useState("");

  const { fetch, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount),
    receiver: adress,
    type: "native",
  });

  // console.log(user.get("ethAddress"))

  const fetchNativeBalance = async () => {
    let result = await Web3Api.account
      .getNativeBalance({
        chain: "rinkeby",
        address: account,
      })
      .catch((e) => console.log(e));
    // console.log(result)
    if (result) {
      setEthBalance(Moralis.Units.FromWei(result.balance));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchNativeBalance();
      fetchERC20Balances({
        params: {
          chain: "rinkeby",
          address: account,
        },
      });
    }
  }, [isAuthenticated]);

  // console.log(data)

  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-neutral-800 text-white rounded-lg shadow-md p-6 m-16 w-full overflow-hidden sm:w-52 balance_card"
        style={{ height: "15rem", width: "16rem" }}
      >
        <h4>Balance In Wallet</h4>
        <span className={"text-decoration-center align-middle pt-4 pb-4"}>
          {ethBalance && <span>{ethBalance} ETH</span>}
        </span>
        <span className={"text-decoration-center align-middle"}>
          <div>
            {data &&
              data.map((token) => (
                <div key={token.symbol}>
                  <span>
                    {Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b>
                  </span>
                </div>
              ))}
          </div>
        </span>
      </div>

      <div
        className="flex flex-col items-center justify-center bg-neutral-800 text-white rounded-lg shadow-md w-full overflow-hidden sm:w-52 balance_card"
        style={{ height: "30rem", width: "56rem" }}
      >
        <h4
          id="table"
          className="bg-gradient-to-l from-indigo-500 via-purple-400 to-indigo-500 pb-2 text-2xl text-center font-bold text-gradient drop-shadow-md uppercase mb-11"
        >
          Send ETH
        </h4>
        <form
          className="p-5"
          style={{ paddingBottom: "5rem" }}
          onSubmit={async (e) => {
            e.preventDefault();
            if (amount <= 0) {
              return Swal.fire({
                title: "Error",
                text: "Amount must be greater than 0",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }
            if (adress === "") {
              return Swal.fire({
                title: "Error",
                text: "Address must be filled",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }
            if (ethBalance < amount) {
              return Swal.fire({
                title: "Error",
                text: "Amount must be less than balance",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }
            if (adress === account) {
              return Swal.fire({
                title: "Error",
                text: "You can not send to your own address",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }
            if (adress.length !== 42) {
              return Swal.fire({
                title: "Error",
                text: "Address must be 42 characters long",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }
            await Moralis.enableWeb3();
            fetch({
              onSuccess: () => {
                Swal.fire({
                  title: "Success",
                  text: "Transaction has been sent",
                  icon: "success",
                  confirmButtonText: "OK",
                });
                setAdress("");
                setAmount(0);
              },
              onError: () => {
                Swal.fire({
                  title: "Error",
                  text: "Transaction has not been sent",
                  icon: "error",
                  confirmButtonText: "OK",
                });
              },
            });
          }}
        >
          <div className="input-with-placeholder">
            <input
              type="number"
              className="border-[1px] p-2 text-lg border-sky-500 w-full text-white"
              id="address"
              value={amount < 0 ? 0 : amount}
              min="0"
              step="0.01"
              onChange={(e) => {
                if (
                  e.target.value === "" ||
                  e.target.value === null ||
                  e.target.value === undefined
                ) {
                  setAmount(0);
                } else {
                  // console.log(e.target.value);
                  setAmount(e.target.value);
                }
              }}
              required
            />
            <label htmlFor="name">Amount</label>
          </div>

          <div className="mt-5 input-with-placeholder">
            <input
              id="adress"
              type="text"
              className="border-[1px] p-2 text-lg border-purple-500 w-full text-white"
              onChange={(e) => {
                setAdress(e.target.value);
              }}
              value={adress}
              required
            />
            <label htmlFor="adress">Send to</label>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 mt-5 w-full rounded-xl animate-pulse"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Balance;

{
  /* <h1 className="">Balance In Wallet</h1>
          <p>{ethBalance && <span>{ethBalance} ETH</span>}</p>
          <p>
            {data &&
              data.map((token) => (
                <div key={token.symbol}>
                  <span>
                    {Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b>
                  </span>
                </div>
              ))}
          </p> */
}
