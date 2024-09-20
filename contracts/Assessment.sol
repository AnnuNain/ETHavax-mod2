// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Assessment {
    // State variables
    string public name;
    uint256 public price;
    address public owner;

    // Events
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event PriceUpdated(uint256 indexed oldPrice, uint256 indexed newPrice);

    // Modifier to restrict access to owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    // Constructor to initialize the contract with name, price, and owner
    constructor(string memory _name, uint256 _price, address _owner) {
        name = _name;
        price = _price;
        owner = _owner;
        emit OwnershipTransferred(address(0), _owner);  // Emit event for owner initialization
    }

    // Function to update the price, restricted to the owner
    function setPrice(uint256 _newPrice) public onlyOwner {
        require(_newPrice > 0, "Price must be greater than zero");
        emit PriceUpdated(price, _newPrice);  // Emit event before updating
        price = _newPrice;
    }

    // Function to retrieve the current price
    function getPrice() public view returns (uint256) {
        return price;
    }

    // Function to transfer ownership to a new address, restricted to the current owner
    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0), "New owner cannot be the zero address");
        emit OwnershipTransferred(owner, _newOwner);
        owner = _newOwner;
    }
}
