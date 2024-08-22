// SPDX-License-Identifier: MIT
pragma solidity =0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply) public ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * (10 ** uint256(decimals())));
    }
}
