/*
"use strict";
console.log("Truth Table for Disjunction");
console.log("var1\t!var1");
var var1 = true;
console.log(var1 + "\t" + !var1);
var var1 = false;
console.log(var1 + "\t" + !var1);
*/

console.log("____Opgave 25 D  ______");
console.log("var1\tvar2\tvar1 && var2");
let var3 = true;
let var4 = true;

console.log(var3 + "\t" + var4 + "\t" + (var3 || !var4));
console.log(var3 + "\t" + !var4 + "\t" + (var3 || !var4));
console.log(!var3 + "\t" + var4 + "\t" + (var3 || !var4));
console.log(!var3 + "\t" + !var4 + "\t" + (!var3 || !var4));
