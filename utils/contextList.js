import React, { createContext, useEffect, useState } from "react";

export const ContextList = createContext();

export const ContextListProvider = (props) => {
  
  // useEffect(() => {
  //   localStorage.getItem("doList").split(",")
  // }, []);

  const [doList, setDoList] = useState(
    (typeof window !== "undefined" &&
      localStorage.getItem("doList").split(",")) || [
      "bitcoin",
      "ethereum",
      "iostoken",
      "ripple",
      "flux",
    ]
  );

  useEffect(() => {
    localStorage.setItem("doList", doList);
  }, [doList]);

  const deleteCoin = (coin) => {
    setDoList(
      doList.filter((c) => {
        return c !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (doList.indexOf(coin) === -1) {
      setDoList([...doList, coin]);
    }
  };

  return (
    <ContextList.Provider value={{ doList, deleteCoin, addCoin }}>
      {props.children}
    </ContextList.Provider>
  );
};
