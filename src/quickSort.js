function quickSort(
  compare,
  elements,
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  // pivot
  // partitionIndex
}

// this function returns???
function partition(compare, elements, lowerIndex, upperIndex) {
  // pivotValue is an upperIndex, left
  // elements.length-1
  const pivotValue = elements[upperIndex];
  // partiionIndex is a lowerIndex
  // 0
  let partitionIndex = lowerIndex;

  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, elements[index]);

    if (comparison > 0) {
      if (partitionIndex !== index) {
        // switch the elements
        [elements[index], elements[partitionIndex]] = [
          elements[partitionIndex],
          elements[index],
        ];
      }
      partitionIndex++;
    }
  }
  //
  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];
  return partitionIndex;
}

module.exports = quickSort;
