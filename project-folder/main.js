// Import required functions and classes
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Reference to the HTML elements for updating the UI
const portfolioValueElement = document.getElementById('portfolio-value');
const portfolioAllocationElement = document.getElementById('portfolio-allocation').getElementsByTagName('tbody')[0];
const transactionLogElement = document.getElementById('transaction-log');

// Function to display the total portfolio value and allocations in the HTML
function displayPortfolio() {
    const portfolioValue = calculatePortfolioValue();
    portfolioValueElement.textContent = `$${portfolioValue.toFixed(2)}`;

    // Display the portfolio allocation
    const allocations = getPortfolioAllocation();
    allocations.forEach(asset => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${asset.name}</td><td>${asset.allocation}%</td>`;
        portfolioAllocationElement.appendChild(row);
    });
}

// Function to log transactions to the HTML
function logTransaction(transactionMessage) {
    const listItem = document.createElement('li');
    listItem.textContent = transactionMessage;
    transactionLogElement.appendChild(listItem);
}

// this is to perform a few transactions
function performTransactions() {
    try {
        const buyTransaction = new Transaction(1, 'buy', 10); // Buying 10 units of Stock A
        buyTransaction.execute();
        logTransaction(`Bought 10 units of Vanguard ETF.`);

        const sellTransaction = new Transaction(2, 'sell', 5); // Selling 5 units of Bond B
        sellTransaction.execute();
        logTransaction(`Sold 5 units of Apple Stock.`);
    } catch (error) {
        logTransaction(`Error: ${error.message}`);
    }
}


// this is to perform some transactions
performTransactions();

// Display updated portfolio value and allocation
console.log("\nUpdated Portfolio:");
displayPortfolio();