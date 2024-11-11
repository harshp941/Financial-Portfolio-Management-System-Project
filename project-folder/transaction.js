import { getAssetById } from './asset.js';

// Making the Transaction class
export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    }

   
     execute() {
        const asset = getAssetById(this.assetId); // this is to get the asset by ID
        if (!asset) {
            throw new Error("Asset not found");
        }

        if (this.type === "buy") {
            asset.quantity += this.quantity;
            console.log(`${this.quantity} units of ${asset.name} bought.`);
        } else if (this.type === "sell") {
            if (asset.quantity < this.quantity) {  // these are the error statments
                throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }
            asset.quantity -= this.quantity;
            console.log(`${this.quantity} units of ${asset.name} sold.`);
        } else {
            throw new Error("Invalid transaction type ");
        }
    }
}