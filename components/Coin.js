import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";

const Coin = ({ coin }) => {
  const [data, setData] = useState(coin);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sorting, setSorting] = useState('')
  // console.log(coin);

//   useEffect(() => {
//     setData(coin);
//   }, []);

  const columns = 
  // useMemo (() => 
  [
    {
      name: "",
      sortable: true,
      sortField: "image",
      hide:"sm",
      selector: (row) => <img width={30} height={30} src={row.image} />,
    },
    {
      name: "Name",
      sortable: true,
      sortField: "name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      sortable: true,
      sortField: "price",
      selector: (row) => (row.current_price),
    },
    {
      name: "24h Change (%)",
      sortable: true,
      sortField: "24h change",
      selector: (row) =>  (row.price_change_percentage_24h).toFixed(2) + " %",
      conditionalCellStyles: [
        {
            when: row => row.price_change_percentage_24h < 0,
            style: {
                color: 'red',
            },
            classNames: ["fas fa-sort-down"],
        },
        {
            when: row => row.price_change_percentage_24h > 0,
            style: {
                color: 'green',
            },
            classNames: ["fas fa-sort-up"]
        }
    ],
    },
    {
      name: "24h High",
      sortable: true,
      sortField: "24h high",
      selector: (row) => (row.high_24h),
      hide:"sm"
    },
    {
      name: "24h Low",
      sortable: true,
      sortField: "24h low",
      selector: (row) => (row.low_24h),
      hide:"sm"
    },
    {
      name: "Total Volume",
      sortable: true,
      sortField: "total volume",
      selector: (row) => (row.total_volume),
      hide:"sm"
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <button className="bg-purple-700 btn text-white">Add Coin</button>
    //   ),
    // },
  ]
  // , []);

  useEffect(() => {
    const res = coin.filter((item) => {
      return (item.name.toLowerCase().match(search.toLowerCase()) || item.symbol.toLowerCase().match(search.toLowerCase()));
    });
    setFilteredData(res);
  }, [search, coin]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


  return (
    // <Link href={"/coindetail"}>
    // </Link>
    <div className="container pl-4 pr-4">
      <DataTable
        // title="Crypto Currency List"
        columns={columns}
        data={filteredData}
        pagination
        defaultSortField="Price"
        defaultSortAsc={false}
        fixedHeader
        fixedHeaderScrollHeight="450px"
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search.."
            className="form-control w-25"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </div>
  );
};

export default Coin;


// (<p
        //   className={
        //     row.price_change_24h < 0 ? "text-danger mr-2" : "text-success mr-2"
        //   }
        // >
        //   {row.price_change_24h < 0 ? (
        //     <i className="fas fa-sort-down align-middle mr-1"></i>
        //   ) : (
        //     <i className="fas fa-sort-up align-middle mr-1"></i>
        //   )}
        //   {row.price_change_percentage_24h}%
        // </p>)