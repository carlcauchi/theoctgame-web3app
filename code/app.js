const express = require('express');
const Web3 = require('web3');

const app = express();
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

app.get('/', async (req, res) => {
  const blockNumber = await web3.eth.getBlockNumber();
  res.send(`Current Ethereum Block Number: ${blockNumber}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});