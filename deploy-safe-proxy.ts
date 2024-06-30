import hre from "hardhat";
import Mocha from "mocha";
import * as dotenv from "dotenv";
import { JsonRpcProvider, Wallet } from "ethers";
dotenv.config();

async function main() {
        const user = process.env.PUBLIC_KEY!;
        const provider = new JsonRpcProvider("https://bsc-testnet.publicnode.com");
        const signer = new Wallet(process.env.PRIVATE_KEY!, provider);
        const singleton = process.env.SAFE_ADDRESS!;
        const contract = await hre.ethers.getContractAt(
            "SafeProxyFactory",
            "0x6Ad2A1A37fec4a5c1Bc6ec333E9e8Bdd2f538126"
          );
          let tx = await contract.createProxyWithNonce(singleton, "0x" , 236);
          await tx.wait();
          console.log(tx);
}

main();