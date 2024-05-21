const express = require('express');
const Web3 = require('web3');

const app = express();
// Connect to an Ethereum node (e.g., Infura)
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/9cb28c4a374248b98e156106f2dde570'));

// Define a route to get the latest block number
app.get('/', async (req, res) => {
  try {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    res.send(`The latest block number is ${latestBlockNumber}`);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});