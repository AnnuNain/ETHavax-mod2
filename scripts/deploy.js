const hre = require("hardhat");

async function main() {
  // Get the contract factory for "Assessment"
  const Assessment = await hre.ethers.getContractFactory("Assessment");
  
  // Deploy the contract with initial values (name, price, owner address)
  const assessment = await Assessment.deploy("APPLE", 100, "0xYourOwnerAddressHere");

  await assessment.deployed();

  console.log("Assessment deployed to:", assessment.address);
}

// Error handling in case something goes wrong
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
