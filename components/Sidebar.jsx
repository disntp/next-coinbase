import React from "react";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { BiSelection, BiTransferAlt } from "react-icons/bi";
import { SiHiveBlockchain, SiBitcoincash } from "react-icons/si";
import Link from "next/link";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  // console.log(sidebar);
  return (
    <nav
      className={sidebar ? "sidebar_open" : "sidebar"}
      onClick={() => handleToggleSidebar(true)}
    >
      <li className="foo"></li>
      <Link href="/">
        <a>
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
        </a>
      </Link>
      <Link href="/#table">
        <a>
        <li>
          <SiBitcoincash size={23} />
          <span>Crypto Market</span>
        </li>
        </a>
      </Link>
      <Link href="/selection">
        <a>
        <li>
          <BiSelection size={23} />
          <span>Selection</span>
        </li>
        </a>
      </Link>

      <Link href="/mint">
        <a>
        <li>
          <SiHiveBlockchain size={23} />
          <span>Mint NFT</span>
        </li>
        </a>
      </Link>

      <Link href={"/balance"}>
        <a>
        <li>
          <BiTransferAlt size={23} />
          <span>Balance</span>
        </li>
        </a>
      </Link>
      <Link href={"/transaction"}>
        <a>
        <li>
          <MdHistory size={23} />
          <span>Transactions</span>
        </li>
        </a>
      </Link>
      <hr />
      {/* <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li> */}
      <hr />
    </nav>
  );
};

export default Sidebar;
