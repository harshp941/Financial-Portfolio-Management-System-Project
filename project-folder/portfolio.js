import { assets } from './asset.js';

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue(); // This gets the total value of the portfolio
    if (totalValue === 0) {
        return []; 
    }

    return assets.map(asset => {
        const assetValue = asset.price * asset.quantity; // This calculates the value of the asset
        const allocationPercentage = ((assetValue / totalValue) * 100).toFixed(2); // This calculates allocation as a percentage
        return {
            name: asset.name,
            allocation: allocationPercentage 
        };
    });
}
