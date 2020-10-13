// Input: [1, 2, 2, 3, 4, 6, 7, 8, 6]
// Output: [1, 2, 3, 4, 6, 7, 8]

// ---------------------------------------

const array = [1, 2, 2, 3, 4, 6, 7, 8, 6];

const result1 = Array.from(new Set(array));
console.log(result1);

const anotherResult = array.filter((item, index) => {
  return array.indexOf(item) === index;
});
console.log(anotherResult);

//----------------------------------------

const array = [1, 2, 2, 3, 4, 6, 7, 8, 6];

function name(array) {
  const result = array.filter((item, index) => array.indexOf(item) === index);
  return result;
}

const result = name(array);
console.log(result);

// ---------------------------------------
