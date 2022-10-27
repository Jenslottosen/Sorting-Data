import { SortData } from "./SortData";
import { Numbers } from "./Numbers";

const dateArray = [
  new Date(2100, 9, 24),
  new Date(2035, 9, 24),
  new Date(2001, 9, 24),
  new Date(2029, 9, 24),
];

const years = dateArray.map((date) => {
  return date.getFullYear();
});

const numbersData = new Numbers(years);
const sortData = new SortData(numbersData);
sortData.sort();
console.log(numbersData.number);
