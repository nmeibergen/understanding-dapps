# Understanding Decentralized Apps
This repository is dedicated to giving you a better understanding of what decentrilized applications are and how you can build them. The focus is on the Ethereum blockchain.

It arised from my personal attempt to understand them and writing the code. I quickly noticed that there is so much information and collecting what is necessary for a somewhat complete comprehension is not a simple task. Therefore I have made my own notes and I hope these are helpful for anyone else with the same interest of building decentralized apps.

## How this repo works
The contents of this repo are split in two parts. 
1. **Code to give you a broad understanding of how to write decentrelized apps**
This is split up in several subrepos each focusing on someting new. In step 1 a 'raw' piece of code is provided that performs a simple transaction almost no initial requirements. Next we build up and use more common tools that make your live easier, however starting with them doesn't allow you to appreciate what they do for you.
2. **General information provided in this Readme**
There are multiple topics related to (Ethereum) blockchain that may arise during these subrepos that are more general, these will be described in this Readme.

# What is gas and how much does it cost?
## What's Gas?
Executing a transaction doesn't come for free: miners have to do computational work to validate and execute your transaction, therefore you pay something. The more computationally expensive the transaction, the more expensive it gets.  

The amount of Gas relates to the amount of calculation power required for some transaction, e.g. something that requires 1 Gas needs very little power, whereas if it requires 1e6 Gas, it's a lot more. A good example is that transferring Ether from one account to another has a fixed Gas requirement, namely: 21.000 Gas.

You may often here one speak of 'paying gas' for a transaction. That is true, however it may seem like it is something fixed, which it's not. When people say you have to pay an x amount of gas, that is analogous to saying that something costs x barrels of crude oil. The question is then of course: what's the oil price? 

## What does it cost?
So, the amount of Gas itself is just a measure of calculation power and by itself doesn't tell you anything of the costs in money. To that end there is the Gas price which is expressed in Wei, or usually giga Wei:

```
gWei = 1e6 Wei = 1e-9 Ether
```

A Wei is the smallest amount of ether and corresponds `1e-18 Ether`. 

If you thus want to know how much you have to pay for a transaction you simply multiply the amount of gas with the gas price, and there you go, i.e.

```
'transaction fee' = gas-price * amount-of-gas
```

## What's a reasonable gas price?
A reasonable gas price depends on the speed you want for your transaction to be adopted in the blockchain: when there is a high congestion of transaction, miners will validate the transaction with the highest gas price, that's simply demand-and-supply.

Best is thus to simply check what the current prices are, which you can find on many sites, such as the [Etherscan Gas Tracker](https://etherscan.io/gastracker).

## More to read
A great article on Ether, gas, gas-price, wei, etc. can be found [here](https://cryptotesters.com/blog/ethereum-gas).

# Open questions
* How is a block created? What does it take to create one? Why can't we simply create a 'false' transaction saying that someone paid me a lot?

# Next topics of interest
* Writing apps for Iota