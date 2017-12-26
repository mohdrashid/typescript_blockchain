"use strict";
var Block = require("../block/block");
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        this.chain = [this.initialize()];
        this.difficulty = 2;
    }
    //Creates Genesis Block
    Blockchain.prototype.initialize = function () {
        return new Block(0, new Date(), "Genesis Block", "0");
    };
    Blockchain.prototype.getLatestBlock = function () {
        return this.chain[this.chain.length - 1];
    };
    Blockchain.prototype.addBlock = function (newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
        return newBlock.hash;
    };
    Blockchain.prototype.isChainValid = function () {
        for (var i = 1; i < this.chain.length; i++) {
            var currentBlock = this.chain[i];
            var previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    };
    return Blockchain;
}());
module.exports = Blockchain;
