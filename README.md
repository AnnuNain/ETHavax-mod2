#METACRAFTERS

Smart Contract Integration with Frontend
This project demonstrates the integration of a smart contract with a frontend application using Ethereum, React, and Hardhat.

Smart Contract
The smart contract used in this project is Assessment.sol. It allows users to set and fetch a product name and price, manage ownership, and track changes through events.

Frontend
The frontend application is built using React and interacts with the deployed smart contract. The main functionality includes fetching the current product name and price, setting a new name, and updating the price.

Prerequisites
Node.js
MetaMask extension for your browser

Getting Started
Clone the repository: git clone

Install the dependencies:
cd npm install

Start a local Ethereum network:
npx hardhat node

This command starts a local Ethereum network using Hardhat. Make sure to note the network URL and use it to configure MetaMask in the next step.

Configure MetaMask:
Install the MetaMask extension for your browser. Create an Ethereum network in MetaMask and set the network URL to connect to your local Hardhat network.
Import an account from your local Hardhat network into MetaMask. .
Deploy the Smart Contract:
To deploy the Assessment smart contract to your local network, run the following command in your project directory:

npx hardhat run scripts/deploy.js --network localhost
Make sure the local Ethereum network is running before deploying the contract.

Update the Frontend Configuration:
In the index.js file, update the nameAddress variable with the deployed contract address obtained from the deployment step.
#Start the Frontend Development Server:
npm run dev
Open your browser and navigate to http://localhost:3000 to access the frontend application.

Usage
The main page of the frontend application displays the current product name and price fetched from the smart contract. To update the product name or price:

Enter a new name or price in the input fields.
Click the "Set Name" or "Set Price" button.
Ensure you have sufficient funds in the MetaMask account connected to the local Ethereum network. The updated values will be stored on the blockchain, and the page will display the new product name and price.

Resources
Ethereum
React
Hardhat
MetaMask

Authors
Annu

License
This project is licensed under the MIT License.
