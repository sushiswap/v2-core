import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";

// Defining bytecode and abi from original contract on mainnet to ensure bytecode matches and it produces the same pair code hash
import { abi, bytecode } from "../deployments/ethereum/ERC20.json";

const func: DeployFunction = async function ({
    ethers,
    getNamedAccounts,
    deployments,
    getChainId,
}: HardhatRuntimeEnvironment) {

    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    const deployed = await deploy("DAI", {
        contract: {
            abi,
            bytecode,
        },
        from: deployer,
        args: ["DAI", "DAI", 1000_000_000],
        log: true,
        deterministicDeployment: false,
    });

    await run("verify:verify", {
        address: deployed.address,
        contract: "contracts/MyToken.sol:MyToken",
        constructorArguments: ["DAI", "DAI", 1000_000_000], // Add the same constructor arguments here
    });
};

func.tags = ["TokenC"];

export default func;
