export const assets = [
    { id: 1, name: "Vanguard ETF", type: "bond", price: 100, quantity: 50 },
    { id: 2, name: "Apple Stock", type: "stock", price: 200, quantity: 30 },
    { id: 3, name: "Fidelity Total Bond ", type: "bond", price: 150, quantity: 20 },
    { id: 4, name: "Invesco QQQ", type: "bond", price: 250, quantity: 10 }
];

// this is to help export the assets
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
