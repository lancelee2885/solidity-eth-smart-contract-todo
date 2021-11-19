// Whenever you depoly a smart contract on a blockchain, you are actually chaning the state of blockchain
const TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
