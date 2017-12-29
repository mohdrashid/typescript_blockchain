import Block = require('../block/block');

class Blockchain{

    private chain:Array<Block>;
    public difficulty:number;

    constructor(){
        this.chain = [ this.initialize() ];
        this.difficulty = 2;
    }

    //Creates Genesis Block
    initialize():Block{
        return new Block(0, new Date(), "Genesis Block", "0");
    }

    getLatestBlock():Block{
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock):String{
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
        return newBlock.hash;
    }

    isChainValid():Boolean{
        for(let i=1;i<this.chain.length;i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if (previousBlock.index + 1 !== currentBlock.index) {
                return false;
            }
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

export = Blockchain;