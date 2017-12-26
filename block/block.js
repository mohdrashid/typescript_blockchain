"use strict";
var SHA256 = require("crypto-js/sha256");
var Block = /** @class */ (function () {
    function Block(index, timestamp, data, previousHash) {
        if (previousHash === void 0) { previousHash = ''; }
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    Block.prototype.calculateHash = function () {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    };
    Block.prototype.mineBlock = function (difficulty) {
        var difficultySolution = "";
        for (var i = 0; i < difficulty; i++) {
            difficultySolution += "0";
        }
        while (this.hash.substring(0, difficulty) !== difficultySolution) {
            this.nonce += 1;
            this.hash = this.calculateHash();
        }
        return this.hash;
    };
    return Block;
}());
module.exports = Block;
