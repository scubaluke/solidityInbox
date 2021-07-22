const dotenv = require('dotenv');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3')
const { interface, bytecode } = require('./compile');

dotenv.config()
const endpoint = `https://rinkeby.infura.io/v3/b16bb0aaa18a4383a6f68ab11f94350a`

const provider = new HDWalletProvider(process.env.mnemonic, endpoint)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account', accounts[0]);

    const result  = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
    
    console.log('contract deployed to', result);
}
deploy()