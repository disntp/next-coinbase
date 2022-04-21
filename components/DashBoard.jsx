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
    <>
    <div className="flex flex-col items-center justify-center bg-neutral-800 text-white rounded-lg shadow-md p-6 m-16 w-full overflow-hidden sm:w-52 balance_card"  style={{ height: "15rem", width: "16rem" }}>
      {uploaded && (
            <div className="mt-4">
              <img src={image.img} width={150} height={150} />
            </div>
          )}
    </div>

    <div className="flex flex-col items-center justify-center bg-neutral-800 text-white rounded-lg shadow-md w-full overflow-hidden sm:w-52 balance_card" style={{ height: "33rem", width: "56rem" }}>
    <form
        className="mt-[3rem] pt-11 p-5"
        onSubmit={onSubmit}
        style={{ paddingBottom: "1rem" }}
      >
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
          {/* <div className="input-group mb-3">
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
          </div> */}

          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-13 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300 hover:cursor-pointer">
              <div className="flex flex-col items-center justify-center pt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="pt-1 text-[12px] tracking-wider text-gray-400 group-hover:text-gray-600">
                  Attach a file
                </p>
              </div>
              <input type="file" className="opacity-0" onChange={handleImage} />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 mt-5 w-full rounded-xl animate-pulse"
        >
          Mint
        </button>
      </form>
      </div>
    </>
  );
};

export default DashBoard;
