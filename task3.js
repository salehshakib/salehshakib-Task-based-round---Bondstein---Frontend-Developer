function findIndicesWithSum(list, targetSum) {
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    const currentSum = list[left] + list[right];
    if (currentSum === targetSum) {
      return [left, right];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
const numbers = [1, 3, 5, 7, 7, 15];
const targetSum = 12;
const result = findIndicesWithSum(numbers, targetSum);
if (result) {
  const [index1, index2] = result;
  console.log(`Indices with sum ${targetSum}: ${index1}, ${index2}`);
} else {
  console.log(`No indices found with sum ${targetSum}`);
}
