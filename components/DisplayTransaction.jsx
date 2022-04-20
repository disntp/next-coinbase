import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import {SiEthereum} from 'react-icons/si'

const DisplayTransaction = () => {
  const Web3Api = useMoralisWeb3Api();
  const { account } = useMoralis();
  const [transaction, setTransaction] = useState([]);
  const BASE_URL = "https://rinkeby.etherscan.io/tx";

  const fetchTransaction = async () => {
    const data = await Web3Api.account.getTransactions({
      chain: "rinkeby",
      address: account,
      //   limit: 5,
    });

    if (data) {
      setTransaction(data.result);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);
  // console.log(transaction);

  return (
    <div
      className="text-white pb-[5rem]"
      //   style={{ height: "25rem", width: "50rem" }}
    >

      <table className="table table-responsive table-hover table-dark container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Block Hash</th>
            <th scope="col">From</th>
            {/* <th scope="col">To</th> */}
            <th scope="col">TimeStamp</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {transaction &&
            transaction.map((tran, index) => (
              <tr className="cursor-pointer" key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {tran.block_hash.substring(0, 6)}...
                  {tran.block_hash.substring(tran.block_hash.length - 5)}
                </td>
                <td>
                  {tran.from_address.substring(0, 6)}...
                  {tran.from_address.substring(tran.from_address.length - 5)}
                </td>
                {/* {tran.to_address ? (
                  <td>
                    {tran.to_address.substring(0, 6)}...
                    {tran.to_address.substring(tran.to_address.length - 5)}
                  </td>
                ) : (
                  "-"
                )} */}
                <td>{tran.block_timestamp.split(" ")[0]
                          .split("T")[1]
                          .split(".")[0] +
                          " - " +
                          new Date(tran.block_timestamp).toDateString()}</td>
              <th><a href={`${BASE_URL}/${tran.hash}`} target="_blank" rel="noreferrer"><SiEthereum size={30}/></a></th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTransaction;
