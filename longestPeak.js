// Write a function that takes in an array of integers and returns the 
// length of the longest peak in an array.

// A peak is defined as adjacent integers in the array that are *strictly* 
// increasing until they reach a tip(the highest value in the peak), at which point
// they become *strictly* decreasing. At least three integers are required to form 
// a peak.

// For example, the integers *1, 4, 10, 2* form a peak, but the integers *4, 0, 10*
// don't and neither do the integers *1, 2, 2, 0*. Similarly, the integers *1, 2, 3* 
// don't form a peak because there aren't any strictly decreasing integers after the 3. 

// Sample input: array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// Sample output:         6 (0, 10, 6, 5, -1, -3)  


//Naive approach: We need to loop through the array to check and keep track of 
//for several things. First, we need to check where our peaks are in the array.
//Second, we need to count the length of the peak once we've found a peak. 
//Third, we should compare the length of the current peak we're checking with 
//the length of the longest peak we've found so far. 
//Once we've gone through the entire array, we'll have found the longest length.

//
//O(n) time | O(1) space
function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1;
  while(i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if(!isPeak) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx = i + 2;
    while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIdx;
  }
  return longestPeakLength;
}