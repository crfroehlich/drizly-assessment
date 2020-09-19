import { expect } from 'chai';
import 'mocha';

/**
 * Returns the median value in an array
 * @param sortedArray - An array that has already been sorted by value
 */
const findMedian = (sortedArray: number[]): number => {
  /*
    Get the (approximate) middle index of the array.
  */
  const middle = Math.floor(sortedArray.length / 2);
  /*
    There are two possible values for median depending on whether the array has an even or odd number of members.
  */
  const median = sortedArray.length % 2 !== 0 ? sortedArray[middle] : (sortedArray[middle - 1] + sortedArray[middle]) / 2;
  // For debugging, uncomment the following line
  // console.log(median);
  return median;
}

/**
 * Here, we just use the language's native `sort` method. Since the vast majority of languages
 * implement utility methods on collections, use this for a first pass.
 */
describe('Asserts correctness of found median using sorted array via native `Array.prototype.sort()` method', () => {
  const sortArray = (array: number[]) => {
    /*
      This mutates the original array by reference, so we do not need the return value for our purposes here.
      The optional argument to `sort` is a function that can alter the logic by which sort is executed.
      Since we know that each member of the array must be a number, we can simply determine whether each pair being evaluated is larger, smaller or equal.
    */
    array.sort((first, second) => first - second);
    return array;
  }

  it('median is greater than or equal to 5', () => {
    const median = findMedian(sortArray([1, 6, 3, 5, 8, 9, 4, 10, 2]));
    expect(median).to.be.at.least(5);
  });

  it('median is greater than or equal to 5.5', () => {
    const median = findMedian(sortArray([1, 6, 3, 5, 8, 9, 4, 10, 2, 7]));
    expect(median).to.be.at.least(5.5);
  });
});

/**
 * Implement a merge sort algorithm and then use it for testing median values
 */
describe('Asserts correctness of found median using sorted array via `mergeSort()` method', () => {
  /**
   * Merges two arrays with a simple sort subroutine
   * @param arrayLeft -
   * @param arrayRight
   */
  const merge = (arrayLeft: number[], arrayRight: number[]): number[] => {
    const ret: number[] = [];

    /*
      Continue for as long as we have values to merge in both arrays.
      This loop will mutate the contents of each array, so this
    */
    while(arrayLeft.length && arrayRight.length){
      /*
        If the first value in the left array is less than the first value in the right array,
        then remove the first value from the left array and add it to the end of the return array
      */
      if (arrayLeft[0] < arrayRight[0]) {
        ret.push(arrayLeft.shift()!);
      /*
        Else remove the first value from the right array and add it to the end of the return array
      */
      } else {
        ret.push(arrayRight.shift()!);
      }
    }

    // Return the list sorted and merged with the rest operator.
    return [...ret, ...arrayLeft, ...arrayRight];
  }

  /**
   * Sorts an array of numbers in ascending order
   * @param sortableArray - An array to sort
   */
  const mergeSort = (sortableArray: number[]): number[] => {
    /*
      Get the (approximate) middle index of the array
    */
    const middle = sortableArray.length/2;
    if(sortableArray.length < 2){
      return sortableArray;
    }

    /*
      Get the first half of the array and remove it from the original array.
      The original array will now be the "second" half.
    */
    const arrayLeft = sortableArray.splice(0,middle);

    /*
      Merge the first and second half of the array recursively to arrive at a sorted array.
    */
    return merge(mergeSort(arrayLeft),mergeSort(sortableArray));
  }

  it('median is greater than or equal to 5', () => {
    const median = findMedian(mergeSort([1, 6, 3, 5, 8, 9, 4, 10, 2]));
    expect(median).to.be.at.least(5);
  });

  it('median is greater than or equal to 5.5', () => {
    const median = findMedian(mergeSort([1, 6, 3, 5, 8, 9, 4, 10, 2, 7]));
    expect(median).to.be.at.least(5.5);
  });
});
