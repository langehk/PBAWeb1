/*
"use strict";
console.log("Truth Table Conjunction");
console.log("var1\t!var1");
var var1 = true;

console.log(var1 + "\t" + !var1);
var var1 = false;
console.log(var1 + "\t" + !var1);
*/

console.log("____Opgave 25 C  ______");
console.log("var1\tvar2\tvar1 && var2");
let var1 = true;
let var2 = true;
console.log(var1 + "\t" + var2 + "\t" + (var1 && var2) + "\t");

console.log(var1 + "\t" + !var2 + "\t" + (!var1 && var2) + "\t");

console.log(!var1 + "\t" + var2 + "\t" + (!var1 && var2) + "\t");

console.log(!var1 + "\t" + !var2 + "\t" + (!var1 && var2) + "\t");
