const dotenv = require('dotenv');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3')
const { interface, bytecode } = require('./compile');
env.config()

const provider = new HDWalletProvider(process.env.mnemonic)