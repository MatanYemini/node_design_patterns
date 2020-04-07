var Shopper = require('./Shopper');
var {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem');

var alex = new Shopper('Alex', 100);

var walkman = new InventoryItem('Walkman', 29.99);
var necklace = new InventoryItem('Necklace', 9.99);
var gloden_neck = new GoldenInventoryItem(necklace);
var diamod_golden = new DiamondInventoryItem(gloden_neck);

alex.purchase(gloden_neck);
alex.purchase(walkman);

alex.printStatus();
