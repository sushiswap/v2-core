import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  getChainId,
  ethers,
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const chainId = parseInt(await getChainId());

  if (!process.env.WNATIVE_ADDRESS) {
    throw Error(`No WNATIVE_ADDRESS for chain #${chainId}!`);
  }

  const factory = await ethers.getContract("UniswapV2Factory");

  await deploy(chainId === 42220 ? "UniswapV2Router02Celo" : "UniswapV2Router02", {
    from: deployer,
    args: [factory.address, process.env.WNATIVE_ADDRESS],
    log: true,
    deterministicDeployment: false,
  });
};

func.tags = ["UniswapV2Router02", "AMM"];

func.dependencies = ["UniswapV2Factory", "WETH9"];

export default func;
