const layersOrder = [
    { name: 'BACKGROUND', number: 11 },
    { name: 'SKIN', number: 13 },
    { name: 'EARRINGS', number: 7 },
    { name: 'GLASSES', number: 15 },
    { name: 'HAIR', number: 24 },
    { name: 'CHAIN', number: 4 },
    { name: 'CLOTHES', number: 21 },
];
  
const format = {
    width: 3000,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };