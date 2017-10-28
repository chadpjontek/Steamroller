function steamrollArray(arr) {
  var newArr = [];
  flattenArray(arr);
  function flattenArray(array) {
    if (!Array.isArray(array)) {
      newArr.push(array);
    } else {
      for (var i = 0; i < array.length; i++) {
        flattenArray(array[i]);
      }
    }
  }
  return newArr;
}
// Examples
steamrollArray([[["a"]], [["b"]]]); // returns ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]); // returns [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]); // returns [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // returns [1, {}, 3, 4]