const Web3 = require('web3');
require('dotenv').config();

// Connect to the blockchain via Infura 
// alternatively you could host your own node - not suggesting to do this, requires you to download a lot of files
const provider = new Web3.providers.HttpProvider(process.env.PROVIDER);
const web3 = new Web3(provider);

const contract_to = {
  address: '0xcbe74e21b070a979b9d6426b11e876d4cb618daf',
  // Get the contract ABI (similar to API as it provides the methodes, functions, values, etc.)
  abi: [{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getGreeting","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
}
const contract = new web3.eth.Contract(contract_to.abi, contract_to.address);

const account_from = {
  privateKey: process.env.PRIVATE_KEY,
  address: process.env.ACCOUNT_ADDRESS,
};

// Set the actions we'd like to perform
const myData = contract.methods.greet("Written by Nathan").encodeABI();

const deploy = async () => {
  console.log(`Attempting to send transaction from ${account_from.address} to ${contract_to.address}`);
  
  try {
    const txCount = await web3.eth.getTransactionCount(account_from.address);
    
    // Sign Tx with PK
    const createTransaction = await web3.eth.accounts.signTransaction({
        nonce:    web3.utils.toHex(txCount),
        to:       contract_to.address,
        gasLimit: web3.utils.toHex(2100000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        baseChain: "ropsten",
        data: myData  
      },
      account_from.privateKey
    );

    // Send Tx and Wait for Receipt
    const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
    );

    console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
    );
    
  } catch (error) {
    console.log(error);
  }
};

deploy();