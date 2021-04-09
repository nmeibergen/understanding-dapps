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

where the 

## What's a reasonable gas price?
A reasonable gas price depends on the speed you want for your transaction to be adopted in the blockchain: when there is a high congestion of transaction, miners will validate the transaction with the highest gas price, that's simply demand-and-supply.

Best is thus to simply check what the current prices are, which you can find on many sites, such as the [Etherscan Gas Tracker](https://etherscan.io/gastracker).

## More to read
A great article on Ether, gas, gas-price, wei, etc. can be found [here](https://cryptotesters.com/blog/ethereum-gas).

# Open questions
* How is a block created? What does it take to create one? Why can't we simply create a 'false' transaction saying that someone paid me a lot?