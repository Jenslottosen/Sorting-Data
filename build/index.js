"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SortData_1 = require("./SortData");
const Numbers_1 = require("./Numbers");
const dateArray = [
    new Date(2100, 9, 24),
    new Date(2035, 9, 24),
    new Date(2001, 9, 24),
    new Date(2029, 9, 24),
];
const years = dateArray.map((date) => {
    return date.getFullYear();
});
const numbersData = new Numbers_1.Numbers(years);
const sortData = new SortData_1.SortData(numbersData);
sortData.sort();
console.log(numbersData.number);
