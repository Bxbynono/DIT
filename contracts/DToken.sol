// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title DToken Contract
 */
contract NamgayToken is ERC20 {
    string public name = "DToken";
    string public description = "A Token For Reward";
    string public symbol = "DiT";
    uint8 public decimals = 2;
    uint256 public INITIAL_SUPPLY = 10000000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
