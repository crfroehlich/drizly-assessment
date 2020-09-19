# drizly-assessment
Drizly Software Engineer Blind Assessment

## Code Problem

You are given a feature to display the median price of a given beverage type. Given an n sized unsorted array of integer prices, write a function findMedian([]) to return the median price. You can assume that the array will contain at least one element.
Tests:

```
findMedian([1,6,3,5,8,9,4,10,2]) => 5
findMedian([1,6,3,5,8,9,4,10,2,7]) => 5.5
```

The solution to the problem is located in `drizly.test.ts`, which is written in TypeScript. You can run this test by following these steps:

1. `git clone git@github.com:crfroehlich/drizly-assessment.git`
1. `cd drizly-assessment`
1. `yarn install`
1. `yarn test`

In the console you will see the output of the two tests that assert the correctness of the solution. The code is fully commented to help explain the process.

Since a `median` is, roughly speaking the value that splits a collection into two halves; then given an array of numbers, we need only to numerically sort the numbers in the array and then determine the middle position. As most languages implement such a sorting algorithm natively, I have used this for the first example and then used a merge-sort algorithm for the second example. The results of sorting are identical as is the answer to the code challenge.

## Developer Question

```
As it pertains to the role you are interviewing for, please describe a time when a technical project or assignment didn’t go as planned. How would you approach the situation differently in the future? Please include information about the purpose of the project, the people involved, what went wrong, the consequences of it not going as planned and how you would do things differently in the future.
```

