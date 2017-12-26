import * as SHA256 from "crypto-js/sha256";
class Block{

    public index:string;
    public timestamp:Date;
    public data:Array<Object>;
    public previousHash:string;
    public hash:String;
    public nonce:number;

    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash():String{
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty):String{
        let difficultySolution:string="";
        for(let i=0; i<difficulty; i++){
            difficultySolution+="0";
        }
        while(this.hash.substring(0,difficulty) !== difficultySolution){
            this.nonce+=1;
            this.hash = this.calculateHash();
        }
        return this.hash;
    }
}

export = Block;