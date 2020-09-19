const SHA256 = require("crypto-js/sha256");

class Block{
    constructor(timestamp, transaction, previousHash=''){
        this.timestamp = timestamp;
        this.transaction = transaction;
        this.previousHash = previousHash;
        this.hash = '';
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.previousHash + this.timestamp + 
            JSON.stringify(this.data) + this.nonce).toString();
    }
    // proof of work
    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Block Mined: ' + this.hash);
    }
}

module.exports = {Block};