// models
const {Transaction} = require('../models/transaction');
const {Block} = require('../models/block');
const {BlockChain} = require('../models/blockchain');

const clients = require("../network/clients");
console.log("1: create block")

function run() {
    // start serving

    clients.up();

    // test

    let chain = new BlockChain();
    console.log('Mining block 1...');

    chain.addBlock(new Block(1, "17/9/2020", {
        amount: 4
    }));
    console.log('Mining block 2...');
    chain.addBlock(new Block(2, "18/9/2020", {
        amount: 8
    }));

    console.log('Is blockchain valid? ' + chain.isChainValid());

    chain.chain[1].data = {
        amount: 100
    };
    chain.chain[1].data = chain.chain[1].calculateHash();

    console.log('Is blockchain valid? ' + chain.isChainValid());

    console.log(JSON.stringify(chain, null, 4));

    chain.createTransaction(new Transaction('address1', 'address2', 100));
    chain.createTransaction(new Transaction('address2', 'address1', 50));

    console.log('\nStarting the miner');
    chain.miningPendingTransaction('x-address');
    console.log('\nBalance of x is', chain.getBalanceOfAddress('x-address'));

    console.log('\nStarting the again');
    chain.miningPendingTransaction('x-address');
    console.log('\nBalance of x is', chain.getBalanceOfAddress('x-address'));

    console.log('\nStarting the again');
    chain.miningPendingTransaction('x-address');
    console.log('\nBalance of x is', chain.getBalanceOfAddress('x-address'));

}

module.exports.start = () => {
    run()
}