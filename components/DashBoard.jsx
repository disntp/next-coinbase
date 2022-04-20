import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { FiLogOut } from "react-icons/fi";
import Moralis from "moralis";
import { contractABI, contractAddress } from "../contract";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider);
import Swal from "sweetalert2";

const DashBoard = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [uploaded, setUploaded] = useState(false);


  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/mint");
    }
  }, [isAuthenticated]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //save to IPFS
      const file1 = new Moralis.File(file.name, file);
      await file1.saveIPFS();
      const fileUrl = file1.ipfs();

      const metadata = {
        name,
        description,
        image: fileUrl,
      };
      const file2 = new Moralis.File(`${name}metadata.json`, {
        base64: Buffer.from(JSON.stringify(metadata)).toString("base64"),
      });
      await file2.saveIPFS();
      const metadataUrl = file2.ipfs();

      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const response = await contract.methods
        .mint(metadataUrl)
        .send({ from: user.get("ethAddress") });
      const tokenId = response.events.Transfer.returnValues.tokenId;

      // Swal.fire(
      //   'Successfully!',
      //   `NFT successfully minted. Contract Address: ${contractAddress} Token ID: ${tokenId}\n
      //   <a href="https://testnets.opensea.io/assets/${contractAddress}/${tokenId}">View here</a>
      //   `,
      //   'success'
      // )
      Swal.fire({
        icon: "success",
        title: "Successfully!",
        text: `NFT successfully minted. Contract Address: ${contractAddress}, Token ID: ${tokenId}`,
        footer: `<a href="https://testnets.opensea.io/assets/${contractAddress}/${tokenId}">View here</a>`,
      });
      setDescription("");
      setFile("");
      setImage("");
      setName("");
      setUploaded(false);
    } catch (err) {
      console.error(err);
      // alert('Something went wrong')
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  const handleImage = (e) => {
    if (e.target.files.length !== 0) {
      setImage({ img: URL.createObjectURL(e.target.files[0]) });
      setFile(e.target.files[0]);
    }
    setUploaded(true); //set the uploaded state to true
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center text-white bg-cover bg-neutral-800">
      {/* <div className="row absolute right-10 logout-btn" style={{ top: "7rem" }}>
        <p className="pt-3 pr-4 text-gradient bg-gradient-to-l  from-purple-400 to-pink-500 address">
          Wallet Address: {user && user.get("ethAddress").substring(0, 6)}...{user && user.get("ethAddress").substring(user.get("ethAddress").length - 5)}
        </p>
        <button
          onClick={logout}
          className="animate-bounce bg-gradient-to-l from-indigo-500 to-pink-500 text-white text-sm p-2 rounded-3xl right-10"
        >
          {<FiLogOut className="ml-2" size={20} />}
          <span>Logout</span>
        </button>
      </div> */}
      <form className="mt-[3rem] pt-11 p-5" onSubmit={onSubmit} style={{paddingBottom:"1rem"}}>
      <h1
          // id="table"
          className="mt-7 bg-gradient-to-l from-indigo-500 via-purple-400 to-indigo-500 py-5 text-3xl text-center font-bold text-gradient drop-shadow-md uppercase"
        >
          Create own NFT
        </h1>
        <div className="input-with-placeholder">
          <input
            type="text"
            className="border-[1px] p-2 text-lg border-sky-500 w-full text-white"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            required 
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="mt-5 input-with-placeholder">
          <input
            id="description"
            type="text"
            className="border-[1px] p-2 text-lg border-purple-500 w-full text-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required 
          />
          <label htmlFor="description">Description</label>
        </div>
        <div className="mt-5">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Upload</span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input "
                id="inputGroupFile01"
                onChange={handleImage}
              />

              <label className="custom-file-label bg-transparent" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          </div>
          {uploaded && (
            <div className="mt-7 ml-8 pl-8">
              <img src={image.img} width={200} height={200} />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 mt-5 w-full rounded-xl animate-pulse"
        >
          Mint
        </button>
      </form>
    </div>
  );
};

export default DashBoard;
