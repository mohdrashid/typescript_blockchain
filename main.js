const Blockchain = require('./blockchain/blockchain');
const Block = require('./block/block');

let bc = new Blockchain();
bc.difficulty=7;
console.log("Mining block 1");
let hash = bc.addBlock(new Block(1, new Date(), {"price":1}, "1"));
console.log("Hash Address: "+hash)
console.log("Mining block 2");
let hash2 = bc.addBlock(new Block(2, new Date(), {"price":1}, "1"));
console.log("Hash Address: "+hash2);
console.log("Mining block 3");
let hash3 = bc.addBlock(new Block(3, new Date(), {"price":1}, "1"));
console.log("Hash Address: "+hash3)
//console.log(bc.chain)