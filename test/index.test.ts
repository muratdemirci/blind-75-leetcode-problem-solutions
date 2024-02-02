import { describe, test, expect } from "@jest/globals";
import * as algo75 from "../src";
import * as helper from "../src/helper";
import * as types from "../src/types";

// Array tests starts here
describe("twoSum function", () => {
  test("twoSum returns correct indices", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = algo75.twoSum(nums, target);
    expect(result).toEqual(expected);
  });

  test("twoSum returns empty array when no solution exists", () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    const expected: any[] = [];
    const result = algo75.twoSum(nums, target);
    expect(result).toEqual(expected);
  });
});

describe("maxProfit function", () => {
  test("maxProfit returns maximum profit", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const expected = 5;
    const result = algo75.maxProfit(prices);
    expect(result).toEqual(expected);
  });

  test("maxProfit returns 0 when no profit can be made", () => {
    const prices = [7, 6, 4, 3, 1];
    const expected = 0;
    const result = algo75.maxProfit(prices);
    expect(result).toEqual(expected);
  });
});

describe("containsDuplicate function", () => {
  test("containsDuplicate returns true when array contains duplicate", () => {
    const nums = [1, 2, 3, 1];
    const expected = true;
    const result = algo75.containsDuplicate(nums);
    expect(result).toEqual(expected);
  });

  test("containsDuplicate returns false when array contains no duplicate", () => {
    const nums = [1, 2, 3, 4];
    const expected = false;
    const result = algo75.containsDuplicate(nums);
    expect(result).toEqual(expected);
  });
});

describe("productExceptSelf function", () => {
  test("productExceptSelf returns correct output for array with multiple elements", () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    const result = algo75.productExceptSelf(nums);
    expect(result).toEqual(expected);
  });

  test("productExceptSelf returns correct output for array with two elements", () => {
    const nums = [1, 2];
    const expected = [2, 1];
    const result = algo75.productExceptSelf(nums);
    expect(result).toEqual(expected);
  });

  test("productExceptSelf returns correct output for array with one element", () => {
    const nums = [1];
    const expected = [1];
    const result = algo75.productExceptSelf(nums);
    expect(result).toEqual(expected);
  });

  test("productExceptSelf returns incorrect output for incorrect input", () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 7]; // incorrect expected output
    const result = algo75.productExceptSelf(nums);
    expect(result).not.toEqual(expected);
  });
});

describe("maxSubArray function", () => {
  test("maxSubArray returns correct output for array with multiple elements", () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const expected = 6;
    const result = algo75.maxSubArray(nums);
    expect(result).toEqual(expected);
  });

  test("maxSubArray returns correct output for array with one element", () => {
    const nums = [1];
    const expected = 1;
    const result = algo75.maxSubArray(nums);
    expect(result).toEqual(expected);
  });

  test("maxSubArray returns incorrect output for incorrect input", () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const expected = 7; // incorrect expected output
    const result = algo75.maxSubArray(nums);
    expect(result).not.toEqual(expected);
  });
});

describe("maxProduct function", () => {
  test("maxProduct returns correct output for array with multiple elements", () => {
    const nums = [2, 3, -2, 4];
    const expected = 6;
    const result = algo75.maxProduct(nums);
    expect(result).toEqual(expected);
  });

  test("maxProduct returns correct output for array with one element", () => {
    const nums = [2];
    const expected = 2;
    const result = algo75.maxProduct(nums);
    expect(result).toEqual(expected);
  });

  test("maxProduct returns incorrect output for incorrect input", () => {
    const nums = [2, 3, -2, 4];
    const expected = 8; // incorrect expected output
    const result = algo75.maxProduct(nums);
    expect(result).not.toEqual(expected);
  });
});

describe("searchInRotated function", () => {
  test("searchInRotated returns correct index for target in array", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 0;
    const expected = 4;
    const result = algo75.searchInRotated(nums, target);
    expect(result).toEqual(expected);
  });

  test("searchInRotated returns -1 for target not in array", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 3;
    const expected = -1;
    const result = algo75.searchInRotated(nums, target);
    expect(result).toEqual(expected);
  });

  test("searchInRotated returns incorrect index for incorrect input", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 0;
    const expected = 3; // incorrect expected output
    const result = algo75.searchInRotated(nums, target);
    expect(result).not.toEqual(expected);
  });
});

describe("threeSum function", () => {
  test("threeSum returns correct triplets for given input", () => {
    const nums: number[] = [-1, 0, 1, 2, -1, -4];
    const expected: number[][] = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    const result = algo75.threeSum(nums);
    // Sort the outer array and inner arrays for a consistent order
    const sortedResult = result
      .map((triplet) => triplet.sort((a, b) => a - b))
      .sort();
    const sortedExpected = expected
      .map((triplet) => triplet.sort((a, b) => a - b))
      .sort();
    expect(sortedResult).toEqual(sortedExpected);
  });

  test("threeSum returns empty array for input with no valid triplets", () => {
    const nums: number[] = [0, 1, 1];
    const expected: number[][] = [];
    const result = algo75.threeSum(nums);
    expect(result).toEqual(expected);
  });
});

describe("containerWithMostWater function", () => {
  test("containerWithMostWater returns correct maximum area", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const expected = 49;
    const result = algo75.containerWithMostWater(height);
    expect(result).toEqual(expected);
  });

  test("containerWithMostWater returns 0 for array with single element", () => {
    const height = [1];
    const expected = 0;
    const result = algo75.containerWithMostWater(height);
    expect(result).toEqual(expected);
  });

  test("containerWithMostWater returns incorrect output for incorrect input", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const expected = 48; // incorrect expected output
    const result = algo75.containerWithMostWater(height);
    expect(result).not.toEqual(expected);
  });
});

// Array tests ends here

// Binary tests starts here
describe("sumOfTwoIntegers function", () => {
  test("sumOfTwoIntegers returns correct sum", () => {
    const a = 2;
    const b = 3;
    const expected = 5;
    const result = algo75.sumOfTwoIntegers(a, b);
    expect(result).toEqual(expected);
  });

  test("sumOfTwoIntegers returns 0 for two zeros", () => {
    const a = 0;
    const b = 0;
    const expected = 0;
    const result = algo75.sumOfTwoIntegers(a, b);
    expect(result).toEqual(expected);
  });

  test("sumOfTwoIntegers returns incorrect output for incorrect input", () => {
    const a = 2;
    const b = 3;
    const expected = 6; // incorrect expected output
    const result = algo75.sumOfTwoIntegers(a, b);
    expect(result).not.toEqual(expected);
  });
});

describe("hammingWeight function", () => {
  test("hammingWeight returns correct count of '1' bits", () => {
    const n = "00000000000000000000000000001011";
    const expected = 3;
    const result = algo75.hammingWeight(n);
    expect(result).toEqual(expected);
  });

  test("hammingWeight returns 0 for binary string with no '1' bits", () => {
    const n = "00000000000000000000000000000000";
    const expected = 0;
    const result = algo75.hammingWeight(n);
    expect(result).toEqual(expected);
  });

  test("hammingWeight returns incorrect output for incorrect input", () => {
    const n = "00000000000000000000000000001011";
    const expected = 4; // incorrect expected output
    const result = algo75.hammingWeight(n);
    expect(result).not.toEqual(expected);
  });
});

describe("countBits function", () => {
  test("countBits returns correct count of '1' bits for each number up to n", () => {
    const n = 5;
    const expected = [0, 1, 1, 2, 1, 2];
    const result = algo75.countBits(n);
    expect(result).toEqual(expected);
  });

  test("countBits returns [0] for n = 0", () => {
    const n = 0;
    const expected = [0];
    const result = algo75.countBits(n);
    expect(result).toEqual(expected);
  });

  test("countBits returns incorrect output for incorrect input", () => {
    const n = 2;
    const expected = [0, 1]; // incorrect expected output
    const result = algo75.countBits(n);
    expect(result).not.toEqual(expected);
  });
});

describe("missingNumber function", () => {
  // Positive Test
  test("missingNumber returns correct missing number for given input", () => {
    const nums: number[] = [3, 0, 1];
    const expected: number = 2;
    const result = algo75.missingNumber(nums);
    expect(result).toEqual(expected);
  });

  // Negative Test
  test("missingNumber returns undefined for empty array", () => {
    const nums: number[] = [];
    const result = algo75.missingNumber(nums);
    expect(result).toBeUndefined();
  });

  test("missingNumber returns correct missing number for given input", () => {
    const nums: number[] = [0, 1];
    const expected: number = 2;
    const result = algo75.missingNumber(nums);
    expect(result).toEqual(expected);
  });

  test("missingNumber returns correct missing number for given input", () => {
    const nums: number[] = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    const expected: number = 8;
    const result = algo75.missingNumber(nums);
    expect(result).toEqual(expected);
  });
});

describe("reverseBits function", () => {
  test("reverseBits returns correct reversed bits for given input", () => {
    const n: number = parseInt("00000010100101000001111010011100", 2);
    const expected: number = parseInt("00111001011110000010100101000000", 2);
    const result = algo75.reverseBits(n);
    expect(result).toEqual(expected);
  });

  test("reverseBits returns correct reversed bits for given input", () => {
    const n: number = parseInt("11111111111111111111111111111101", 2);
    const expected: number = parseInt("10111111111111111111111111111111", 2);
    const result = algo75.reverseBits(n);
    expect(result).toEqual(expected);
  });
});
// Binary tests ends here

// Dynamic Programming tests starts here
describe("climbStairs function", () => {
  test("climbStairs returns correct number of distinct ways for given input", () => {
    const n: number = 2;
    const expected: number = 2;
    const result = algo75.climbStairs(n);
    expect(result).toEqual(expected);
  });

  test("climbStairs returns correct number of distinct ways for given input", () => {
    const numberOfSteps: number = 3;
    const expectedWays: number = 3;
    const calculatedWays = algo75.climbStairs(numberOfSteps);
    expect(calculatedWays).toEqual(expectedWays);
  });
});

describe("coinChange function", () => {
  test("coinChange returns the fewest number of coins that you need to make up the amount", () => {
    const coins: number[] = [1, 2, 5];
    const amount: number = 11;
    const expected: number = 3;
    const result = algo75.coinChange(coins, amount);
    expect(result).toEqual(expected);
  });

  test("coinChange returns -1 when the amount cannot be made up by any combination of the coins", () => {
    const coins: number[] = [2];
    const amount: number = 3;
    const expected: number = -1;
    const result = algo75.coinChange(coins, amount);
    expect(result).toEqual(expected);
  });

  test("coinChange returns 0 when the amount is 0", () => {
    const coins: number[] = [1];
    const amount: number = 0;
    const expected: number = 0;
    const result = algo75.coinChange(coins, amount);
    expect(result).toEqual(expected);
  });
});

describe("lengthOfLIS function", () => {
  test("lengthOfLIS returns the length of the longest increasing subsequence", () => {
    const nums: number[] = [10, 9, 2, 5, 3, 7, 101, 18];
    const expected: number = 4;
    const result = algo75.lengthOfLIS(nums);
    expect(result).toEqual(expected);
  });

  test("lengthOfLIS returns the length of the longest increasing subsequence", () => {
    const nums: number[] = [0, 1, 0, 3, 2, 3];
    const expected: number = 4;
    const result = algo75.lengthOfLIS(nums);
    expect(result).toEqual(expected);
  });

  test("lengthOfLIS returns the length of the longest increasing subsequence when all elements are the same", () => {
    const nums: number[] = [7, 7, 7, 7, 7, 7, 7];
    const expected: number = 1;
    const result = algo75.lengthOfLIS(nums);
    expect(result).toEqual(expected);
  });
});

describe("longestCommonSubsequence function", () => {
  test("longestCommonSubsequence returns the length of the longest common subsequence", () => {
    const text1: string = "abcde";
    const text2: string = "ace";
    const expected: number = 3;
    const result = algo75.longestCommonSubsequence(text1, text2);
    expect(result).toEqual(expected);
  });

  test("longestCommonSubsequence returns the length of the longest common subsequence when both strings are the same", () => {
    const text1: string = "abc";
    const text2: string = "abc";
    const expected: number = 3;
    const result = algo75.longestCommonSubsequence(text1, text2);
    expect(result).toEqual(expected);
  });

  test("longestCommonSubsequence returns 0 when there is no common subsequence", () => {
    const text1: string = "abc";
    const text2: string = "def";
    const expected: number = 0;
    const result = algo75.longestCommonSubsequence(text1, text2);
    expect(result).toEqual(expected);
  });
});

describe("wordBreak function", () => {
  test("wordBreak returns true when the string can be segmented into a space-separated sequence of one or more dictionary words", () => {
    const s: string = "leetcode";
    const wordDict: string[] = ["leet", "code"];
    const expected: boolean = true;
    const result = algo75.wordBreak(s, wordDict);
    expect(result).toEqual(expected);
  });

  test("wordBreak returns true when the string can be segmented into a space-separated sequence of one or more dictionary words", () => {
    const s: string = "applepenapple";
    const wordDict: string[] = ["apple", "pen"];
    const expected: boolean = true;
    const result = algo75.wordBreak(s, wordDict);
    expect(result).toEqual(expected);
  });

  test("wordBreak returns false when the string cannot be segmented into a space-separated sequence of one or more dictionary words", () => {
    const s: string = "catsandog";
    const wordDict: string[] = ["cats", "dog", "sand", "and", "cat"];
    const expected: boolean = false;
    const result = algo75.wordBreak(s, wordDict);
    expect(result).toEqual(expected);
  });
});

describe("combinationSum4 function", () => {
  test("combinationSum4 returns the number of possible combinations that add up to target", () => {
    const nums: number[] = [1, 2, 3];
    const target: number = 4;
    const expected: number = 7;
    const result = algo75.combinationSum4(nums, target);
    expect(result).toEqual(expected);
  });

  test("combinationSum4 returns 0 when no combinations add up to target", () => {
    const nums: number[] = [9];
    const target: number = 3;
    const expected: number = 0;
    const result = algo75.combinationSum4(nums, target);
    expect(result).toEqual(expected);
  });
});

describe("houseRobber function", () => {
  test("houseRobber returns the maximum amount of money that can be robbed without alerting the police", () => {
    const nums: number[] = [1, 2, 3, 1];
    const expected: number = 4;
    const result = algo75.houseRobber(nums);
    expect(result).toEqual(expected);
  });

  test("houseRobber returns the maximum amount of money that can be robbed without alerting the police", () => {
    const nums: number[] = [2, 7, 9, 3, 1];
    const expected: number = 12;
    const result = algo75.houseRobber(nums);
    expect(result).toEqual(expected);
  });

  test("houseRobber returns 0 when there are no houses to rob", () => {
    const nums: number[] = [];
    const expected: number = 0;
    const result = algo75.houseRobber(nums);
    expect(result).toEqual(expected);
  });
});

describe("houseRobberII function", () => {
  test("houseRobberII returns the maximum amount of money that can be robbed without alerting the police", () => {
    const nums: number[] = [2, 3, 2];
    const expected: number = 3;
    const result = algo75.houseRobberII(nums);
    expect(result).toEqual(expected);
  });

  test("houseRobberII returns the maximum amount of money that can be robbed without alerting the police", () => {
    const nums: number[] = [1, 2, 3, 1];
    const expected: number = 4;
    const result = algo75.houseRobberII(nums);
    expect(result).toEqual(expected);
  });

  test("houseRobberII returns the maximum amount of money that can be robbed without alerting the police", () => {
    const nums: number[] = [1, 2, 3];
    const expected: number = 3;
    const result = algo75.houseRobberII(nums);
    expect(result).toEqual(expected);
  });

  test("houseRobberII returns 0 when there are no houses to rob", () => {
    const nums: number[] = [];
    const expected: number = 0;
    const result = algo75.houseRobberII(nums);
    expect(result).toEqual(expected);
  });
});

describe("numDecodings function", () => {
  test("numDecodings returns the number of ways to decode the string", () => {
    const s: string = "12";
    const expected: number = 2;
    const result = algo75.numDecodings(s);
    expect(result).toEqual(expected);
  });

  test("numDecodings returns the number of ways to decode the string", () => {
    const s: string = "226";
    const expected: number = 3;
    const result = algo75.numDecodings(s);
    expect(result).toEqual(expected);
  });

  test("numDecodings returns the number of ways to decode the string", () => {
    const s: string = "06";
    const expected: number = 0;
    const result = algo75.numDecodings(s);
    expect(result).toEqual(expected);
  });

  test("numDecodings returns 0 when the string starts with '0'", () => {
    const s: string = "01";
    const expected: number = 0;
    const result = algo75.numDecodings(s);
    expect(result).toEqual(expected);
  });
});

describe("uniquePaths function", () => {
  test("uniquePaths returns the number of unique paths from the top-left corner to the bottom-right corner of the grid", () => {
    const m: number = 3;
    const n: number = 7;
    const expected: number = 28;
    const result = algo75.uniquePaths(m, n);
    expect(result).toEqual(expected);
  });

  test("uniquePaths returns the number of unique paths from the top-left corner to the bottom-right corner of the grid", () => {
    const m: number = 3;
    const n: number = 2;
    const expected: number = 3;
    const result = algo75.uniquePaths(m, n);
    expect(result).toEqual(expected);
  });

  test("uniquePaths returns 1 when the grid is 1x1", () => {
    const m: number = 1;
    const n: number = 1;
    const expected: number = 1;
    const result = algo75.uniquePaths(m, n);
    expect(result).toEqual(expected);
  });
});

describe("jumpGame function", () => {
  test("jumpGame returns true if it is possible to reach the last index of the array", () => {
    const nums: number[] = [2, 3, 1, 1, 4];
    const expected: boolean = true;
    const result = algo75.jumpGame(nums);
    expect(result).toEqual(expected);
  });

  test("jumpGame returns false if it is not possible to reach the last index of the array", () => {
    const nums: number[] = [3, 2, 1, 0, 4];
    const expected: boolean = false;
    const result = algo75.jumpGame(nums);
    expect(result).toEqual(expected);
  });

  test("jumpGame returns false if it is not possible to reach the last index of the array", () => {
    const nums: number[] = [1, 0, 1, 0];
    const expected: boolean = false;
    const result = algo75.jumpGame(nums);
    expect(result).toEqual(expected);
  });
});
// Dynamic Programming tests ends here

// Graph tests starts here
describe("cloneGraph function", () => {
  test("cloneGraph correctly clones a graph", () => {
    const input = [
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ];
    const graph = helper.createGraph(input);
    const clonedGraph = algo75.cloneGraph(graph);

    expect(clonedGraph).not.toBe(graph); // Ensure the graphs are not the same instance

    // Traverse both graphs and compare their structure
    const queueOriginal = [graph];
    const queueCloned = [clonedGraph];
    const visitedOriginal = new Set();
    const visitedCloned = new Set();

    while (queueOriginal.length > 0 && queueCloned.length > 0) {
      const nodeOriginal = queueOriginal.shift();
      const nodeCloned = queueCloned.shift();

      if (nodeOriginal && nodeCloned) {
        visitedOriginal.add(nodeOriginal);
        visitedCloned.add(nodeCloned);

        expect(nodeOriginal.val).toEqual(nodeCloned.val);
        expect(nodeOriginal.neighbors.length).toEqual(
          nodeCloned.neighbors.length
        );

        for (let i = 0; i < nodeOriginal.neighbors.length; i++) {
          if (!visitedOriginal.has(nodeOriginal.neighbors[i])) {
            queueOriginal.push(nodeOriginal.neighbors[i]);
          }
          if (!visitedCloned.has(nodeCloned.neighbors[i])) {
            queueCloned.push(nodeCloned.neighbors[i]);
          }
        }
      }
    }

    // Ensure both graphs have the same number of nodes
    expect(visitedOriginal.size).toEqual(visitedCloned.size);
  });

  test("cloneGraph should return null when the input is null", () => {
    const graph: types.Node | null = null;
    const clonedGraph = algo75.cloneGraph(graph);
    expect(clonedGraph).toBeNull();
  });
});

describe("canFinish function", () => {
  type Prerequisite = types.Interval;
  test("should return true when all courses can be finished", () => {
    const numCourses: number = 2;
    const prerequisites: Prerequisite[] = [[1, 0]];
    const result = algo75.canFinish(numCourses, prerequisites);
    expect(result).toBe(true);
  });

  test("should return false when not all courses can be finished", () => {
    const numCourses: number = 2;
    const prerequisites: Prerequisite[] = [
      [1, 0],
      [0, 1],
    ];
    const result = algo75.canFinish(numCourses, prerequisites);
    expect(result).toBe(false);
  });
});

describe("pacificAtlanticWaterFlow", () => {
  it("returns the correct output for the given input", () => {
    const heights = [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ];
    const expected = [
      [0, 4],
      [1, 3],
      [1, 4],
      [2, 2],
      [3, 0],
      [3, 1],
      [4, 0],
    ];
    const result = algo75.pacificAtlanticWaterFlow(heights);
    expect(result).toEqual(expected);
  });

  it("returns the correct output for a single cell grid", () => {
    const heights = [[1]];
    const expected = [[0, 0]];
    const result = algo75.pacificAtlanticWaterFlow(heights);
    expect(result).toEqual(expected);
  });

  it("returns an empty array for an empty input", () => {
    const heights: number[][] = [];
    const expected: number[][] = [];
    const result = algo75.pacificAtlanticWaterFlow(heights);
    expect(result).toEqual(expected);
  });
});

describe("numberOfIslands", () => {
  it("should return correct number of islands for given grid", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    const expected = 1;
    expect(algo75.numberOfIslands(grid)).toEqual(expected);
  });

  it("should return 0 for grid with no islands", () => {
    const grid = [
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    const expected = 0;
    expect(algo75.numberOfIslands(grid)).toEqual(expected);
  });

  it("should return correct number of islands for given grid", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    const expected = 3;
    expect(algo75.numberOfIslands(grid)).toEqual(expected);
  });
});

describe("longestConsecutive", () => {
  it("should return the length of the longest consecutive elements sequence", () => {
    const nums = [100, 4, 200, 1, 3, 2];
    const expected = 4;
    expect(algo75.longestConsecutive(nums)).toEqual(expected);
  });

  it("should return the length of the longest consecutive elements sequence", () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    const expected = 9;
    expect(algo75.longestConsecutive(nums)).toEqual(expected);
  });

  it("should return 0 when there are no consecutive elements", () => {
    const nums = [100, 200, 300, 400, 500];
    const expected = 1;
    expect(algo75.longestConsecutive(nums)).toEqual(expected);
  });
});

describe("alienDictionary", () => {
  it("should return correct order of characters for valid input", () => {
    const words = ["baa", "abcd", "abca", "cab", "cad"];
    const expected = ["b", "d", "a", "c"];
    const result = algo75.alienDictionary(words);
    expect(result).toEqual(expected);
  });

  it("should return empty array for empty input", () => {
    const words: string[] = [];
    const expected: string[] = [];
    const result = algo75.alienDictionary(words);
    expect(result).toEqual(expected);
  });

  it("should return single character for single word input", () => {
    const words = ["a"];
    const expected = ["a"];
    const result = algo75.alienDictionary(words);
    expect(result).toEqual(expected);
  });

  it("should return empty array for words that do not allow ordering", () => {
    const words = ["abc", "ab"];
    const expected: string[] = [];
    const result = algo75.alienDictionary(words);
    expect(result).toEqual(expected);
  });
});

describe("graphValidTree", () => {
  test("returns true for a valid tree", () => {
    const n = 5;
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ];
    expect(algo75.graphValidTree(n, edges)).toBe(true);
  });

  test("returns false for an invalid tree", () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 3],
      [1, 4],
    ];
    expect(algo75.graphValidTree(n, edges)).toBe(false);
  });
});

describe("numberOfConnectedComponents", () => {
  test("should return the correct number of components", () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [3, 4],
    ];
    expect(algo75.numberOfConnectedComponents(n, edges)).toBe(2);
  });

  test("should return n when there are no edges", () => {
    const n = 3;
    const edges: number[][] = [];
    expect(algo75.numberOfConnectedComponents(n, edges)).toBe(n);
  });

  test("should return 1 when all nodes are connected", () => {
    const n = 4;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
    ];
    expect(algo75.numberOfConnectedComponents(n, edges)).toBe(1);
  });

  test("should throw an error when a node is out of range", () => {
    const n = 3;
    const edges = [
      [0, 1],
      [1, 4],
    ];
    expect(() => algo75.numberOfConnectedComponents(n, edges)).toThrow();
  });
});
// Graph tests ends here

// Interval tests starts here
describe("insertInterval", () => {
  it("should merge overlapping intervals correctly", () => {
    const intervals: types.Interval[] = [
      [1, 3],
      [6, 9],
    ];
    const newInterval: types.Interval = [2, 5];
    const expected: types.Interval[] = [
      [1, 5],
      [6, 9],
    ];
    expect(algo75.insertInterval(intervals, newInterval)).toEqual(expected);
  });

  it("should merge multiple overlapping intervals correctly", () => {
    const intervals: types.Interval[] = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ];
    const newInterval: types.Interval = [4, 8];
    const expected: types.Interval[] = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];
    expect(algo75.insertInterval(intervals, newInterval)).toEqual(expected);
  });
});

describe("mergeIntervals", () => {
  it("should merge overlapping intervals correctly", () => {
    const intervals: types.Interval[] = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const expected: types.Interval[] = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    expect(algo75.mergeIntervals(intervals)).toEqual(expected);
  });
  it("should merge intervals that end and start at the same point", () => {
    const intervals: types.Interval[] = [
      [1, 4],
      [4, 5],
    ];
    const expected: types.Interval[] = [[1, 5]];
    expect(algo75.mergeIntervals(intervals)).toEqual(expected);
  });
});

describe("nonOverlappingIntervals", () => {
  it("should return the minimum number of intervals to remove", () => {
    const intervals: types.Interval[] = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ];
    const expected = 1;
    expect(algo75.nonOverlappingIntervals(intervals)).toEqual(expected);
  });

  it("should return the minimum number of intervals to remove when all intervals are the same", () => {
    const intervals: types.Interval[] = [
      [1, 2],
      [1, 2],
      [1, 2],
    ];
    const expected = 2;
    expect(algo75.nonOverlappingIntervals(intervals)).toEqual(expected);
  });

  it("should return 0 when no intervals need to be removed", () => {
    const intervals: types.Interval[] = [
      [1, 2],
      [2, 3],
    ];
    const expected = 0;
    expect(algo75.nonOverlappingIntervals(intervals)).toEqual(expected);
  });
});

describe("meetingRooms", () => {
  it("should return true when all meetings can be attended", () => {
    const intervals: types.Interval[] = [
      [1, 5],
      [6, 10],
      [11, 15],
    ];
    expect(algo75.meetingRooms(intervals)).toBe(true);
  });

  it("should return false when not all meetings can be attended", () => {
    const intervals: types.Interval[] = [
      [1, 5],
      [4, 10],
      [11, 15],
    ];
    expect(algo75.meetingRooms(intervals)).toBe(false);
  });
});

describe("meetingRoomsII", () => {
  it("should return the correct minimum number of meeting rooms", () => {
    const intervals: types.Interval[] = [
      [0, 30],
      [5, 10],
      [15, 20],
    ];
    const expected = 2;
    expect(algo75.meetingRoomsII(intervals)).toEqual(expected);
  });

  it("should return 1 when only one meeting room is needed", () => {
    const intervals: types.Interval[] = [
      [1, 5],
      [6, 10],
      [11, 15],
    ];
    const expected = 1;
    expect(algo75.meetingRoomsII(intervals)).toEqual(expected);
  });

  it("should return 0 when there are no meetings", () => {
    const intervals: types.Interval[] = [];
    const expected = 0;
    expect(algo75.meetingRoomsII(intervals)).toEqual(expected);
  });
});
// Interval tests ends here

// Linked List tests starts here
describe("reverseList", () => {
  test("reverseList reverses the list", () => {
    const head = helper.arrayToList([1, 2, 3, 4, 5]);
    const reversed = algo75.reverseList(head);
    expect(helper.listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  test("reverseList reverses the list with two elements", () => {
    const head = helper.arrayToList([1, 2]);
    const reversed = algo75.reverseList(head);
    expect(helper.listToArray(reversed)).toEqual([2, 1]);
  });

  test("reverseList handles an empty list", () => {
    const head = helper.arrayToList([]);
    const reversed = algo75.reverseList(head);
    expect(helper.listToArray(reversed)).toEqual([]);
  });
});

describe("linkedListCycle", () => {
  test("linkedListCycle identifies a cycle in the list", () => {
    const head = helper.arrayToListWithCycle([3, 2, 0, -4], 1);
    expect(algo75.linkedListCycle(head)).toBe(true);
  });

  test("linkedListCycle identifies a cycle in the list with two elements", () => {
    const head = helper.arrayToListWithCycle([1, 2], 0);
    expect(algo75.linkedListCycle(head)).toBe(true);
  });

  test("linkedListCycle identifies no cycle in the list with one element", () => {
    const head = helper.arrayToListWithCycle([1], -1);
    expect(algo75.linkedListCycle(head)).toBe(false);
  });
});

describe("mergeTwoSortedLists", () => {
  test("mergeTwoSortedLists merges two sorted lists into one sorted list", () => {
    const list1 = helper.arrayToList([1, 2, 4]);
    const list2 = helper.arrayToList([1, 3, 4]);
    const mergedList = algo75.mergeTwoSortedLists(list1, list2);
    expect(helper.listToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("mergeTwoSortedLists merges two empty lists into one empty list", () => {
    const list1 = helper.arrayToList([]);
    const list2 = helper.arrayToList([]);
    const mergedList = algo75.mergeTwoSortedLists(list1, list2);
    expect(helper.listToArray(mergedList)).toEqual([]);
  });

  test("mergeTwoSortedLists merges an empty list and a list with a single element", () => {
    const list1 = helper.arrayToList([]);
    const list2 = helper.arrayToList([0]);
    const mergedList = algo75.mergeTwoSortedLists(list1, list2);
    expect(helper.listToArray(mergedList)).toEqual([0]);
  });
});

describe("mergeKSortedLists", () => {
  it("merges the lists into one sorted list", () => {
    // Create the linked lists from the input arrays
    const lists = [
      new types.ListNode(1, new types.ListNode(4, new types.ListNode(5))),
      new types.ListNode(1, new types.ListNode(3, new types.ListNode(4))),
      new types.ListNode(2, new types.ListNode(6)),
    ];

    // Call the function and convert the result to an array
    const result = algo75.mergeKSortedLists(lists);
    const resultArray: number[] = [];
    let currentNode: types.ListNode | null = result;
    while (currentNode !== null) {
      resultArray.push(currentNode.val);
      currentNode = currentNode.next;
    }

    // Check if the result matches the expected output
    expect(resultArray).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  it("returns null when the input is an empty array", () => {
    // Call the function with an empty array
    const result = algo75.mergeKSortedLists([]);

    // Check if the result is null
    expect(result).toBeNull();
  });

  it("returns null when the input is an array containing an empty list", () => {
    // Call the function with an array containing an empty list
    const result = algo75.mergeKSortedLists([null]);

    // Check if the result is null
    expect(result).toBeNull();
  });
});

describe("removeNthNodeFromEndofList", () => {
  it("removes the nth node from the end of the list", () => {
    // Create the linked list from the input array
    const head = new types.ListNode(
      1,
      new types.ListNode(
        2,
        new types.ListNode(3, new types.ListNode(4, new types.ListNode(5)))
      )
    );

    // Call the function and convert the result to an array
    const result = algo75.removeNthNodeFromEndofList(head, 2);
    const resultArray: number[] = [];
    let currentNode: types.ListNode | null = result;
    while (currentNode !== null) {
      resultArray.push(currentNode.val as number); // Add type assertion here
      currentNode = currentNode.next;
    }

    // Check if the result matches the expected output
    expect(resultArray).toEqual([1, 2, 3, 5]);
  });

  it("removes the only node from the list when n is 1", () => {
    // Create the linked list from the input array
    const head = new types.ListNode(1);

    // Call the function
    const result = algo75.removeNthNodeFromEndofList(head, 1);

    // Check if the result is null (indicating an empty list)
    expect(result).toBeNull();
  });

  it("removes the last node from the list when n is 1", () => {
    // Create the linked list from the input array
    const head = new types.ListNode(1, new types.ListNode(2));

    // Call the function and convert the result to an array
    const result = algo75.removeNthNodeFromEndofList(head, 1);
    const resultArray: number[] = [];
    let currentNode: types.ListNode | null = result;
    while (currentNode !== null) {
      resultArray.push(currentNode.val as number); // Add type assertion here
      currentNode = currentNode.next;
    }

    // Check if the result matches the expected output
    expect(resultArray).toEqual([1]);
  });
});

describe("reorderList", () => {
  it("reorders the list correctly", () => {
    // Create the linked list from the input array
    const head = new types.ListNode(
      1,
      new types.ListNode(2, new types.ListNode(3, new types.ListNode(4)))
    );

    // Call the function
    algo75.reorderList(head);

    // Convert the result to an array
    const resultArray: number[] = [];
    let currentNode: types.ListNode | null = head;
    while (currentNode !== null) {
      resultArray.push(currentNode.val as number); // Add type assertion here
      currentNode = currentNode.next;
    }

    // Check if the result matches the expected output
    expect(resultArray).toEqual([1, 4, 2, 3]);
  });

  it("reorders a list of five elements correctly", () => {
    // Create the linked list from the input array
    const head = new types.ListNode(
      1,
      new types.ListNode(
        2,
        new types.ListNode(3, new types.ListNode(4, new types.ListNode(5)))
      )
    );

    // Call the function
    algo75.reorderList(head);

    // Convert the result to an array
    const resultArray: number[] = [];
    let currentNode: types.ListNode | null = head;
    while (currentNode !== null) {
      resultArray.push(currentNode.val as number); // Add type assertion here
      currentNode = currentNode.next;
    }

    // Check if the result matches the expected output
    expect(resultArray).toEqual([1, 5, 2, 4, 3]);
  });
});

// Linked List tests ends here

// Matrix tests starts here
describe("setMatrixZeroes", () => {
  it("sets the entire row and column to 0's for each 0 in the matrix", () => {
    // Define the input matrix
    const matrix: types.Matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];

    // Call the function
    algo75.setMatrixZeroes(matrix);

    // Check if the result matches the expected output
    expect(matrix).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
  });

  it("sets the entire row and column to 0's for each 0 in a 3x4 matrix", () => {
    // Define the input matrix
    const matrix: types.Matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];

    // Call the function
    algo75.setMatrixZeroes(matrix);

    // Check if the result matches the expected output
    expect(matrix).toEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
  });
});

describe("spiralMatrixOrder", () => {
  it("returns all elements of the matrix in spiral order", () => {
    // Define the input matrix
    const matrix: types.Matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    // Call the function
    const result = algo75.spiralMatrixOrder(matrix);

    // Check if the result matches the expected output
    expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it("returns all elements of a 3x4 matrix in spiral order", () => {
    // Define the input matrix
    const matrix: types.Matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];

    // Call the function
    const result = algo75.spiralMatrixOrder(matrix);

    // Check if the result matches the expected output
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });
});

describe("rotateImage", () => {
  it("rotates the image by 90 degrees clockwise", () => {
    // Define the input matrix
    const matrix: types.Matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    // Call the function
    algo75.rotateImage(matrix);

    // Check if the result matches the expected output
    expect(matrix).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it("rotates a 4x4 image by 90 degrees clockwise", () => {
    // Define the input matrix
    const matrix: types.Matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];

    // Call the function
    algo75.rotateImage(matrix);

    // Check if the result matches the expected output
    expect(matrix).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });
});

describe("wordSearch", () => {
  it("finds the word in the board", () => {
    // Define the input board and word
    const board: types.GridString = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCCED";

    // Call the function and store the result
    const result = algo75.wordSearch(board, word);

    // Check if the result matches the expected output
    expect(result).toBe(true);
  });

  it('finds the word "SEE" in the board', () => {
    // Define the input board and word
    const board: types.GridString = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "SEE";

    // Call the function and store the result
    const result = algo75.wordSearch(board, word);

    // Check if the result matches the expected output
    expect(result).toBe(true);
  });

  it('does not find the word "ABCB" in the board', () => {
    // Define the input board and word
    const board: types.GridString = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCB";

    // Call the function and store the result
    const result = algo75.wordSearch(board, word);

    // Check if the result matches the expected output
    expect(result).toBe(false);
  });

  it('finds the word "ABCESEEEFS" in the board', () => {
    // Define the input board and word
    const board: string[][] = [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCESEEEFS";

    // Call the function and store the result
    const result = algo75.wordSearch(board, word);

    // Check if the result matches the expected output
    expect(result).toBe(true);
  });
});
// Matrix tests ends here
// String tests starts here
describe("lengthOfLongestSubstring", () => {
  it("returns the length of the longest substring without repeating characters", () => {
    // Define the input string
    const s = "abcabcbb";

    // Call the function and store the result
    const result: number = algo75.lengthOfLongestSubstring(s);

    // Check if the result matches the expected output
    expect(result).toBe(3);
  });

  it("returns the length of the longest substring for a string with all identical characters", () => {
    // Define the input string
    const s = "bbbbb";

    // Call the function and store the result
    const result: number = algo75.lengthOfLongestSubstring(s);

    // Check if the result matches the expected output
    expect(result).toBe(1);
  });

  it("returns the length of the longest substring for a string with repeating characters", () => {
    // Define the input string
    const s = "pwwkew";

    // Call the function and store the result
    const result = algo75.lengthOfLongestSubstring(s);

    // Check if the result matches the expected output
    expect(result).toBe(3);
  });
});

describe("longestRepeatingCharacterReplacement", () => {
  it("returns the length of the longest substring containing the same letter after operations", () => {
    // Define the input string and k
    const s: string = "ABAB";
    const k: number = 2;

    // Call the function and store the result
    const result = algo75.longestRepeatingCharacterReplacement(s, k);

    // Check if the result matches the expected output
    expect(result).toBe(4);
  });

  it("returns the length of the longest substring containing the same letter after operations", () => {
    // Define the input string and k
    const s: string = "AABABBA";
    const k: number = 1;

    // Call the function and store the result
    const result: number = algo75.longestRepeatingCharacterReplacement(s, k);

    // Check if the result matches the expected output
    expect(result).toBe(4);
  });
});

describe("minWindowSubstring", () => {
  it("returns the minimum window substring of s such that every character in t is included in the window", () => {
    // Define the input strings
    const s: string = "ADOBECODEBANC";
    const t: string = "ABC";

    // Call the function and store the result
    const result: string = algo75.minWindowSubstring(s, t);

    // Check if the result matches the expected output
    expect(result).toBe("BANC");
  });

  it("returns the minimum window substring of s such that every character in t is included in the window", () => {
    // Define the input strings
    const s: string = "a";
    const t: string = "a";

    // Call the function and store the result
    const result: string = algo75.minWindowSubstring(s, t);

    // Check if the result matches the expected output
    expect(result).toBe("a");
  });

  it("returns the minimum window substring of s such that every character in t is included in the window", () => {
    // Define the input strings
    const s: string = "a";
    const t: string = "aa";

    // Call the function and store the result
    const result: string = algo75.minWindowSubstring(s, t);

    // Check if the result matches the expected output
    expect(result).toBe("");
  });

  it("returns the minimum window substring of s such that every character in t is included in the window", () => {
    // Define the input strings
    const s: string = "aaaaaaaaaaaabbbbbcdd";
    const t: string = "abcdd";

    // Call the function and store the result
    const result: string = algo75.minWindowSubstring(s, t);

    // Check if the result matches the expected output
    expect(result).toBe("abbbbbcdd");
  });
});

describe("validAnagram", () => {
  it("returns true if t is an anagram of s", () => {
    const s: string = "anagram";
    const t: string = "nagaram";
    const result: boolean = algo75.validAnagram(s, t);
    expect(result).toBe(true);
  });

  it("returns false if t is not an anagram of s", () => {
    const s: string = "rat";
    const t: string = "car";
    const result: boolean = algo75.validAnagram(s, t);
    expect(result).toBe(false);
  });
});

describe("groupAnagrams", () => {
  it("groups anagrams together", () => {
    const strs: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result: string[][] = algo75.groupAnagrams(strs);
    expect(result).toContainEqual(
      expect.arrayContaining(["eat", "tea", "ate"])
    );
    expect(result).toContainEqual(expect.arrayContaining(["tan", "nat"]));
    expect(result).toContainEqual(expect.arrayContaining(["bat"]));
  });

  it("groups anagrams together when input is an array with a single empty string", () => {
    const strs: string[] = [""];
    const result: string[][] = algo75.groupAnagrams(strs);
    expect(result).toEqual([[""]]);
  });

  it('groups anagrams together when input is an array with a single string "a"', () => {
    const strs: string[] = ["a"];
    const result: string[][] = algo75.groupAnagrams(strs);
    expect(result).toEqual([["a"]]);
  });
});

describe("validParentheses", () => {
  it("returns true for valid parentheses", () => {
    const s: string = "()";
    const result: boolean = algo75.validParentheses(s);
    expect(result).toBe(true);
  });

  it("returns true for valid parentheses", () => {
    const s: string = "()[]{}";
    const result: boolean = algo75.validParentheses(s);
    expect(result).toBe(true);
  });

  it("returns false for invalid parentheses", () => {
    const s: string = "(]";
    const result: boolean = algo75.validParentheses(s);
    expect(result).toBe(false);
  });
});

describe("validPalindrome", () => {
  it("returns true for a valid palindrome", () => {
    const s: string = "A man, a plan, a canal: Panama";
    const result: boolean = algo75.validPalindrome(s);
    expect(result).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    const s: string = "race a car";
    const result: boolean = algo75.validPalindrome(s);
    expect(result).toBe(false);
  });
});

describe("longestPalindrome", () => {
  it("should return the correct result for the given input", () => {
    const input: string = "babad";
    const expectedOutput: string = "bab";

    const result: string = algo75.longestPalindrome(input);

    expect(result).toBe(expectedOutput);
  });

  it('should return the correct result for the given input "cbbd"', () => {
    const input: string = "cbbd";
    const expectedOutput: string = "bb";

    const result: string = algo75.longestPalindrome(input);

    expect(result).toBe(expectedOutput);
  });
});

describe("palindromicSubstrings", () => {
  it('should return the correct result for the given input "abc"', () => {
    const input: string = "abc";
    const expectedOutput: number = 3;

    const result = algo75.palindromicSubstrings(input);

    expect(result).toBe(expectedOutput);
  });

  it('should return the correct result for the given input "aaa"', () => {
    const input: string = "aaa";
    const expectedOutput: number = 6;

    const result = algo75.palindromicSubstrings(input);

    expect(result).toBe(expectedOutput);
  });
});

describe("encodeDecodeStrings", () => {
  // Positive test case
  it("should encode and decode the array of strings correctly", () => {
    const input: string[] = ["lint", "code", "love", "you"];
    const expectedResult: string[] = ["lint", "code", "love", "you"];

    const result = algo75.encodeDecodeStrings(input);

    expect(result).toEqual(expectedResult);
  });

  // Negative test case
  it("should handle empty input array gracefully", () => {
    const input: string[] = [];
    const expectedResult: string[] = [];

    const result = algo75.encodeDecodeStrings(input);

    expect(result).toEqual(expectedResult);
  });

  // Negative test case
  it("should handle invalid input gracefully", () => {
    // Invalid input (not an array)
    const input: any = "notAnArray";
    const expectedResult: string[] = [];

    const result = algo75.encodeDecodeStrings(input);

    expect(result).toEqual(expectedResult);
  });
});
// String tests ends here

// Tree tests starts here
describe("maximumDepthofBinaryTree", () => {
  it("should return the correct result for the given binary tree", () => {
    // Example input
    const input: types.TreeNode = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    };

    // Expected output
    const expectedOutput: number = 3;

    // Call the function and check the result
    const result: number = algo75.maximumDepthofBinaryTree(input);

    expect(result).toBe(expectedOutput);
  });

  it("should return the correct result for the given binary tree", () => {
    // Example input
    const input: types.TreeNode = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    };

    // Expected output
    const expectedOutput: number = 3;

    // Call the function and check the result
    const result: number = algo75.maximumDepthofBinaryTree(input);

    expect(result).toBe(expectedOutput);
  });
});

describe("isSameTree", () => {
  it("should return true for identical binary trees", () => {
    // Example input
    const p: types.TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };

    const q: types.TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };

    // Expected output
    const expectedOutput: boolean = true;

    // Call the function and check the result
    const result: boolean = algo75.isSameTree(p, q);

    expect(result).toBe(expectedOutput);
  });

  it("should return false for different binary trees", () => {
    // Example input
    const p: types.TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: null,
    };

    const q: types.TreeNode = {
      val: 1,
      left: null,
      right: {
        val: 2,
        left: null,
        right: null,
      },
    };

    // Expected output
    const expectedOutput: boolean = false;

    // Call the function and check the result
    const result: boolean = algo75.isSameTree(p, q);

    expect(result).toBe(expectedOutput);
  });

  it("should return false for different binary trees", () => {
    // Example input
    const p: types.TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    };

    const q: types.TreeNode = {
      val: 1,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    };

    // Expected output
    const expectedOutput: boolean = false;

    // Call the function and check the result
    const result: boolean = algo75.isSameTree(p, q);

    expect(result).toBe(expectedOutput);
  });
});

describe("invertBinaryTree", () => {
  it("should invert the binary tree correctly", () => {
    // Example input
    const root: types.TreeNode = {
      val: 4,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      right: {
        val: 7,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: {
          val: 9,
          left: null,
          right: null,
        },
      },
    };

    // Expected output
    const expectedOutput: types.TreeNode = {
      val: 4,
      left: {
        val: 7,
        left: {
          val: 9,
          left: null,
          right: null,
        },
        right: {
          val: 6,
          left: null,
          right: null,
        },
      },
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 1,
          left: null,
          right: null,
        },
      },
    };

    // Call the function and check the result
    const result: types.TreeNode | null = algo75.invertBinaryTree(root);

    expect(result).toEqual(expectedOutput);
  });

  it("should invert the binary tree correctly", () => {
    // Example input
    const root: types.TreeNode = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };

    // Expected output
    const expectedOutput: types.TreeNode = {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    };

    // Call the function and check the result
    const result: types.TreeNode | null = algo75.invertBinaryTree(root);

    expect(result).toEqual(expectedOutput);
  });

  it("should return an empty tree for an empty input", () => {
    // Example input
    const root: types.TreeNode | null = null;

    // Expected output
    const expectedOutput: types.TreeNode | null = null;

    // Call the function and check the result
    const result: types.TreeNode | null = algo75.invertBinaryTree(root);

    expect(result).toEqual(expectedOutput);
  });
});

describe("binaryTreeMaximumPathSum", () => {
  it("should return the correct maximum path sum", () => {
    // Example input
    const root: types.TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };

    // Expected output
    const expectedOutput: number = 6;

    // Call the function and check the result
    const result: number = algo75.binaryTreeMaximumPathSum(root);

    expect(result).toBe(expectedOutput);
  });

  it("should return the correct maximum path sum", () => {
    // Example input
    const root: types.TreeNode = {
      val: -10,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    };

    // Expected output
    const expectedOutput: number = 42;

    // Call the function and check the result
    const result = algo75.binaryTreeMaximumPathSum(root);

    expect(result).toBe(expectedOutput);
  });

  it("should handle an empty tree gracefully", () => {
    // Example input (empty tree)
    const root: types.TreeNode | null = null;

    // Expected output (assuming your implementation handles this case by returning a reasonable value)
    const expectedOutput: number = 0;

    // Call the function and check the result
    const result = algo75.binaryTreeMaximumPathSum(root);

    expect(result).toBe(expectedOutput);
  });
});

describe("binaryTreeLevelOrderTraversal", () => {
  it("should return the correct level order traversal for the example case", () => {
    // Example input
    const root: types.TreeNode = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    };

    // Expected output
    const expectedOutput: number[][] = [[3], [9, 20], [15, 7]];

    // Call the function and check the result
    const result: number[][] = algo75.binaryTreeLevelOrderTraversal(root);

    expect(result).toEqual(expectedOutput);
  });

  it("should return the correct level order traversal for a single-node tree", () => {
    // Example input
    const root: types.TreeNode = {
      val: 1,
      left: null,
      right: null,
    };

    // Expected output
    const expectedOutput: number[][] = [[1]];

    // Call the function and check the result
    const result: number[][] = algo75.binaryTreeLevelOrderTraversal(root);

    expect(result).toEqual(expectedOutput);
  });

  it("should return an empty array for an empty tree", () => {
    // Example input
    const root: types.TreeNode | null = null;

    // Expected output
    const expectedOutput: number[][] = [];

    // Call the function and check the result
    const result: number[][] = algo75.binaryTreeLevelOrderTraversal(root);

    expect(result).toEqual(expectedOutput);
  });
});

describe("serializeAndDeserializeBinaryTree", () => {
  it("should return the correct result for the example case", () => {
    // Example input
    const input: (number | null)[] = [1, 2, 3, null, null, 4, 5];

    // Create a codec instance
    const serializeAndDeserializeBinaryTree =
      new algo75.serializeAndDeserializeBinaryTree();

    // Serialize the input
    const serialized = serializeAndDeserializeBinaryTree.serialize(
      serializeAndDeserializeBinaryTree.deserialize(JSON.stringify(input))
    );

    // Expected output
    const expectedOutput: string = JSON.stringify(input);

    // Check if the serialized result matches the expected output
    expect(serialized).toEqual(expectedOutput);
  });

  it("should return the correct result for an empty tree", () => {
    // Example input
    const input: number[] = [];

    // Create a codec instance
    const serializeAndDeserializeBinaryTree =
      new algo75.serializeAndDeserializeBinaryTree();

    // Serialize the input
    const serialized: string = serializeAndDeserializeBinaryTree.serialize(
      serializeAndDeserializeBinaryTree.deserialize(JSON.stringify(input))
    );

    // Expected output
    const expectedOutput: string = JSON.stringify(input);

    // Check if the serialized result matches the expected output
    expect(serialized).toEqual(expectedOutput);
  });
});

describe("subtreeofAnotherTree", () => {
  it("should return true for the provided example case", () => {
    // Example input
    const root = {
      val: 3,
      left: {
        val: 4,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    };

    const subRoot = {
      val: 4,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    };

    // Call the function and check the result
    const result: boolean = algo75.subtreeofAnotherTree(root, subRoot);

    // Expected output
    const expectedOutput: boolean = true;

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });

  it("should return false for different subtrees", () => {
    // Example input
    const root = {
      val: 3,
      left: {
        val: 4,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
      right: {
        val: 5,
        left: null,
        right: {
          val: 0,
          left: null,
          right: null,
        },
      },
    };

    const subRoot = {
      val: 4,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3, // Different value here
        left: null,
        right: null,
      },
    };

    // Call the function and check the result
    const result = algo75.subtreeofAnotherTree(root, subRoot);

    // Expected output
    const expectedOutput = false;

    // Check if the result matches the expected output using toEqual
    expect(result).toEqual(expectedOutput);
  });
});

describe("constructBinaryTreefromPreorderandInorderTraversal", () => {
  it("should construct the binary tree for the given example case", () => {
    // Example input
    const preorder: number[] = [3, 9, 20, 15, 7];
    const inorder: number[] = [9, 3, 15, 20, 7];

    // Call the function and get the root of the tree
    const result: types.TreeNode | null =
      algo75.constructBinaryTreefromPreorderandInorderTraversal(
        preorder,
        inorder
      );

    // Expected output (assuming TreeNode has a proper implementation for comparison)
    const expectedOutput = {
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    };

    // Check if the result matches the expected output using toEqual
    expect(result).toEqual(expectedOutput);
  });

  it("should construct the binary tree for the given example case", () => {
    // Example input
    const preorder: number[] = [-1];
    const inorder: number[] = [-1];

    // Call the function and get the root of the tree
    const result: types.TreeNode | null =
      algo75.constructBinaryTreefromPreorderandInorderTraversal(
        preorder,
        inorder
      );

    // Expected output (assuming TreeNode has a proper implementation for comparison)
    const expectedOutput = {
      val: -1,
      left: null,
      right: null,
    };

    // Check if the result matches the expected output using toEqual
    expect(result).toEqual(expectedOutput);
  });
});

describe("isValidBST", () => {
  it("should return true for a valid binary search tree", () => {
    // Example input
    const root = {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };

    // Call the function and get the result
    const result = algo75.isValidBST(root);

    // Expected output
    const expectedOutput = true;

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });

  it("should return false for an invalid binary search tree", () => {
    // Example input
    const root = {
      val: 5,
      left: { val: 1, left: null, right: null },
      right: {
        val: 4,
        left: { val: 3, left: null, right: null },
        right: { val: 6, left: null, right: null },
      },
    };

    // Call the function and get the result
    const result = algo75.isValidBST(root);

    // Expected output
    const expectedOutput = false;

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });
});

describe("kthSmallestElementnaBST", () => {
  it("should return the kth smallest value for the provided example case", () => {
    // Example input
    const root = {
      val: 3,
      left: { val: 1, left: null, right: { val: 2, left: null, right: null } },
      right: { val: 4, left: null, right: null },
    };

    // Call the function and get the result
    const result: number = algo75.kthSmallestElementnaBST(root, 1);

    // Expected output
    const expectedOutput: number = 1;

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });

  it("should return the kth smallest value for the provided example case", () => {
    // Example input
    const root = {
      val: 5,
      left: {
        val: 3,
        left: {
          val: 2,
          left: { val: 1, left: null, right: null },
          right: null,
        },
        right: { val: 4, left: null, right: null },
      },
      right: { val: 6, left: null, right: null },
    };

    // Call the function and get the result
    const result: number = algo75.kthSmallestElementnaBST(root, 3);

    // Expected output
    const expectedOutput: number = 3;

    // Check if the result matches the expected output
    expect(result).toBe(expectedOutput);
  });
});

describe("lowestCommonAncestorofaBST", () => {
  it("returns the lowest common ancestor of two nodes", () => {
    // Create the binary search tree from the array
    const root = new types.TreeNode(6);
    root.left = new types.TreeNode(2);
    root.right = new types.TreeNode(8);
    root.left.left = new types.TreeNode(0);
    root.left.right = new types.TreeNode(4);
    root.right.left = new types.TreeNode(7);
    root.right.right = new types.TreeNode(9);
    root.left.right.left = new types.TreeNode(3);
    root.left.right.right = new types.TreeNode(5);

    const p = new types.TreeNode(2);
    const q = new types.TreeNode(8);

    const result = algo75.lowestCommonAncestorofaBST(root, p, q);
    expect(result!.val).toBe(6);
  });

  it("returns the lowest common ancestor of two nodes", () => {
    // Create the binary search tree from the array
    const root = new types.TreeNode(6);
    root.left = new types.TreeNode(2);
    root.right = new types.TreeNode(8);
    root.left.left = new types.TreeNode(0);
    root.left.right = new types.TreeNode(4);
    root.right.left = new types.TreeNode(7);
    root.right.right = new types.TreeNode(9);
    root.left.right.left = new types.TreeNode(3);
    root.left.right.right = new types.TreeNode(5);

    const p: types.TreeNode = new types.TreeNode(2);
    const q: types.TreeNode = new types.TreeNode(4);

    const result: types.TreeNode | null = algo75.lowestCommonAncestorofaBST(
      root,
      p,
      q
    );
    expect(result!.val).toBe(2);
  });
});

describe("prefixTree", () => {
  it("inserts and searches words and checks prefixes", () => {
    const trie = new algo75.prefixTree();
    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(false);
    expect(trie.startsWith("app")).toBe(true);
    trie.insert("app");
    expect(trie.search("app")).toBe(true);
  });
});

describe("addAndSearchWordsDataStructure", () => {
  it("adds words and searches with wildcard", () => {
    const wordDictionary = new algo75.addAndSearchWordsDataStructure();
    wordDictionary.addWord("bad");
    wordDictionary.addWord("dad");
    wordDictionary.addWord("mad");
    expect(wordDictionary.search("pad")).toBe(false);
    expect(wordDictionary.search("bad")).toBe(true);
    expect(wordDictionary.search(".ad")).toBe(true);
    expect(wordDictionary.search("b..")).toBe(true);
  });
});

describe("wordSearchII", () => {
  it("finds words in the board", () => {
    const board: string[][] = [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ];
    const words: string[] = ["oath", "pea", "eat", "rain"];
    const expected: string[] = ["oath", "eat"];
    const result = algo75.wordSearchII(board, words);
    expect(result).toEqual(expected);
  });

  it("finds no words in the board", () => {
    const board: string[][] = [
      ["a", "b"],
      ["c", "d"],
    ];
    const words: string[] = ["abcb"];
    const expected: string[] = [];
    const result = algo75.wordSearchII(board, words);
    expect(result).toEqual(expected);
  });
});
// Tree tests ends here

// Heap tests starts here
describe("topKFrequentElements", () => {
  it("returns the k most frequent elements", () => {
    const nums: number[] = [1, 1, 1, 2, 2, 3];
    const k: number = 2;
    const expected: number[] = [1, 2].sort();
    const result = algo75.topKFrequentElements(nums, k).sort();
    expect(result).toEqual(expected);
  });

  it("returns the k most frequent element when array has only one element", () => {
    const nums: number[] = [1];
    const k: number = 1;
    const expected: number[] = [1];
    const result = algo75.topKFrequentElements(nums, k);
    expect(result).toEqual(expected);
  });
});

describe("MedianFinder", () => {
  it("returns the correct medians", () => {
    const medianFinder = new algo75.MedianFinder();
    expect(medianFinder.addNum(1)).toBeUndefined();
    expect(medianFinder.addNum(2)).toBeUndefined();
    expect(medianFinder.findMedian()).toBe(1.5);
    expect(medianFinder.addNum(3)).toBeUndefined();
    expect(medianFinder.findMedian()).toBe(2);
  });
});
// Heap tests ends here
