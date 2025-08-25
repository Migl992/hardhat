import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MyTokenModule", (m) => {
  // Deploys the contract named "MyToken" from contracts/MyToken.sol
  const token = m.contract("MyToken"); // no constructor args
  return { token };
});