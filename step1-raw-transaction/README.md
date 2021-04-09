# Step1: Raw transactions
In this part part we'll execute a 'manual' transaction to a test blockchain network - the Ropsten network, this is a network that is most similar to the real Ethereum network. There are multiple test networks, and each has its pro's and cons, for a quick overview see [here](https://ethereum.stackexchange.com/questions/27048/comparison-of-the-different-testnets). In what follows we'll always use Ropsten for testing purposes.

Executing a manual transaction means that we won't be using any out of the box frameworks like *truffle*. Instead we'll only use `web3`, the [Ethereum Javascript API](https://github.com/ChainSafe/web3.js).

In this example we'll write a transaction to a smart contract that has already been written and has been published. It's a simple contract, which you can view as a class which contains an attribute called `greeting` which we can change by running the function `greet`. You can check out the exact specification of the contract [here](https://ropsten.etherscan.io/address/0xcbe74e21b070a979b9d6426b11e876d4cb618daf#code), giving you a glimpse of the transparency of such contracts. Running this function is exactly what we'll do here such that subsequently we can run the function `getGreeting` to indeed see that the attribute `greeting` has changed.

# Getting started
## Get a provider
The blockchain is a peer-to-peer network, and therefore, to interract with it you need to become a peer, which includes syncing all the whole blockchain onto your machine. This is a fairly painful proces considering the fact that the size of such chain is likely to be larger that the space you wanted to sacrifice, not considering that downloading it might take you hours/days. 
To circumvent this, [we'll consider a provider](https://decrypt.co/resources/what-is-infura), in particular, we'll consider Infura. You can think of Infura as a proxy for you: you tell your script that you wish to execute your blockchain requests simply from Infura. 

To use Infura, create an account [here](https://infura.io/). Next you are requested to create a project, if you're not, simply head towards 'Ethereum' in the left pane of the dashboard and create a project. When you have created a project, you can view the 'Settings' tab where you'll find endpoints for the different Ethereum chains. In particular, for this script we'll use the Ropsten network, so consider the corresponding endpoint, which you'll need in the configuration below.

## Create an ethereum account
You will need an Ethereum account. I'd suggest you get [MetaMask](https://medium.com/@seanschoi/what-is-metamask-really-what-is-it-7bc1bf48c75), which is, among others, a wallet and thus creates an address for you on the several Ethereum blockchains. It furthermore allows for executing transactions 

## Get yourself some Ethers
You will need some Ethers to perform the transactions that we are about to make. In order to an Ether (which will be more than enough) head towards https://faucet.ropsten.be/, and request Ethers on the Ropsten network.

### Gas vs Ether?

## Setup your computer
To setup your environment laptop, simply make sure you have Node and yarn installed. Next install the required packages, e.g. `yarn install`.

Create a `.env` file with specs as follows:

```
PROVIDER=[Your provider endpoint]
ACCOUNT_ADDRESS=[Your address (starts with 0x)]
PRIVATE_KEY=[Your private key]
```

Interested to see what happend, check it out on .... using the hash

# Open questions
* Raw transaction vs signed transaction, what's the difference and where can we see this difference?  
* As we'll see later on, we can use `web3.eth.getAccounts().then(console.log)` to list all accounts that can be used (not sure where these come from). However if we run this here it won't work immediately. Is this a truffle thing?