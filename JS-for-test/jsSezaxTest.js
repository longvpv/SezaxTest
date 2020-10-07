// Input: [1, 2, 2, 3, 4, 6, 7, 8, 6]
// Output: [1, 2, 3, 4, 6, 7, 8]

// ---------------------------------------

const array = [1, 2, 2, 3, 4, 6, 7, 8, 6];

const result = Array.from(new Set(array));
console.log(result);

const anotherResult = array.filter((item, index) => {
  return array.indexOf(item) === index;
});
console.log(anotherResult);

// ---------------------------------------
