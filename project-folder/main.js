import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// this is to dissplay the total portfolio value and allocations
function displayPortfolio() {
    const portfolioValue = calculatePortfolioValue();
    console.log("Total Portfolio Value: $", portfolioValue);

    const allocations = getPortfolioAllocation();
    console.log("Portfolio Allocation:");
    allocations.forEach(asset => {
        console.log(`${asset.name}: ${asset.allocation}%`);
    });
}

// Making a few transactions
function performTransactions() {
    try {
        const buyTransaction = new Transaction(1, 'buy', 10); // Buying 10 units of Bond 1
        buyTransaction.execute();

        const sellTransaction = new Transaction(2, 'sell', 5); // Selling 5 units of Stock 2
        sellTransaction.execute();
    } catch (error) {
        console.error(error.message);
    }
}

// this is to display portfolio before transactions
console.log("Initial Portfolio:");
displayPortfolio();

// this is to perform transactions
performTransactions();

// this is to display portfolio after transactions
console.log("\nUpdated Portfolio:");
displayPortfolio();