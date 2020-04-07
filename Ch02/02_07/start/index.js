var PersonBuilder = require('./PersonBuilder.js');

// Employees
var sue = new PersonBuilder('Sue')
  .makeEmployee()
  .makeManager(60)
  .build();

// Shoppers
var charles = new PersonBuilder('Charles')
  .withMoney(500)
  .withList(['ss', 'jj'])
  .build();

console.log(sue.toString());
console.log(charles.toString());
