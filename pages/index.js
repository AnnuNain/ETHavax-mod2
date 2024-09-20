
        nameAddress,
        AssessmentABI.abi,
        provider
      );
      try {
        const data = await contract.name();
        console.log("data: ", data);
        setCurrentNaming(data);
        // document.getElementById("app").style.backgroundColor=data;
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Sets the greeting from input text box
  async function setNaming() {
    if (!message) return;
  
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
   import { useState, useEffect } from "react";
import { ethers } from "ethers";
import AssessmentABI from "../artifacts/contracts/Assessment.sol/Assessment.json";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [newOwner, setNewOwner] = useState("");

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchPrice() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, AssessmentABI.abi, provider);
      try {
        const data = await contract.getPrice();
        setCurrentPrice(data.toString());
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  async function fetchOwner() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, AssessmentABI.abi, provider);
      try {
        const data = await contract.owner();
        setOwnerAddress(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  async function setPrice() {
    if (!price) return;

    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, AssessmentABI.abi, signer);

      try {
        const transaction = await contract.setPrice(ethers.utils.parseUnits(price, 'wei'));
        await transaction.wait();
        fetchPrice();
      } catch (error) {
        console.log("Error updating price:", error);
      }
    }
  }

  async function transferOwnership() {
    if (!newOwner) return;

    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, AssessmentABI.abi, signer);

      try {
        const transaction = await contract.transferOwnership(newOwner);
        await transaction.wait();
        fetchOwner();
      } catch (error) {
        console.log("Error transferring ownership:", error);
      }
    }
  }

  useEffect(() => {
    fetchPrice();
    fetchOwner();
  }, []);

  return (
    <div className="App" id="app" style={{
      backgroundColor: "#f0f0f0",
      color: "black",
      borderRadius: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      padding: "20px",
    }}>
      <div className="App-header">
        <div className="description" style={{ marginBottom: "20px" }}>
          <h1>Metacrafter Mobile Store</h1>
          <h2>Enter Mobile Brand</h2>
          <h3>with model</h3>
        </div>

        <div className="custom-buttons" style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={fetchPrice} style={{ margin: "20px", padding: "10px 20px", border: "3px black solid", borderRadius: "10px", color: "black" }}>
            Get Mobile Brand
          </button>
          <button onClick={setPrice} style={{ margin: "20px", backgroundColor: "black", border: "3px white solid", padding: "10px 20px", borderRadius: "10px", color: "white" }}>
            Set Price
          </button>
        </div>

        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Enter mobile brand"
          style={{
            border: "5px black solid",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "10px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />

        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder="Set price in wei"
          style={{
            border: "5px black solid",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "10px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />

        <h2 className="naming" style={{
          padding: "20px",
          backgroundColor: "white",
          color: "black",
          border: "3px solid black",
          borderRadius: "10px",
          textAlign: "center",
        }}> Last entry: {currentNaming}</h2>

        <h2 className="price" style={{
          padding: "20px",
          backgroundColor: "white",
          color: "black",
          border: "3px solid black",
          borderRadius: "10px",
          textAlign: "center",
        }}> Current Price: {currentPrice} wei</h2>

        <input
          onChange={(e) => setNewOwner(e.target.value)}
          value={newOwner}
          placeholder="New owner address"
          style={{
            border: "5px black solid",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "10px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
        <button onClick={transferOwnership} style={{
          margin: "20px",
          backgroundColor: "black",
          border: "3px white solid",
          padding: "10px 20px",
          borderRadius: "10px",
          color: "white",
        }}>
          Transfer Ownership
        </button>
      </div>
    </div>
  );
}



