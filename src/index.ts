import * as helper from "./helper";
import * as types from "./types";

// Array solutions start here
export function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
}

export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

export function containsDuplicate(nums: number[]): boolean {
  const map: { [key: number]: boolean } = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    }

    map[nums[i]] = true;
  }

  return false;
}

export function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const left = new Array(length).fill(1);
  const right = new Array(length).fill(1);
  const output = new Array(length);

  for (let i = 1; i < length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < length; i++) {
    output[i] = left[i] * right[i];
  }

  return output;
}

export function maxSubArray(nums: number[]): number {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}

export function maxProduct(nums: number[]): number {
  let maxCurrent = nums[0];
  let minCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMax = maxCurrent;
    maxCurrent = Math.max(nums[i], maxCurrent * nums[i], minCurrent * nums[i]);
    minCurrent = Math.min(nums[i], tempMax * nums[i], minCurrent * nums[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}

export function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

export function searchInRotated(nums: number[], target: number): number {
  return nums.indexOf(target);
}

export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return result;
}

export function containerWithMostWater(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
// Array solutions ends here

// Binary solutions starts here
export function sumOfTwoIntegers(a: number, b: number): number {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
}

export function hammingWeight(n: number | string): number {
  let count = 0;
  let binaryString = typeof n === "number" ? n.toString(2) : n;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "1") {
      count++;
    }
  }

  return count;
}

export function countBits(n: number): number[] {
  let ans = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i & (i - 1)] + 1;
  }

  return ans;
}

export function missingNumber(nums: number[]): number | undefined {
  if (nums.length === 0) {
    return undefined;
  }
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  const numsSum = nums.reduce((a, b) => a + b, 0);
  return totalSum - numsSum;
}

export function reverseBits(n: number): number {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    result |= n & 1;
    n >>= 1;
  }
  return result >>> 0;
}
// Binary solutions ends here

// Dynamic Programming solutions starts here
export function climbStairs(n: number): number {
  const stairs: number[] = new Array(n + 1).fill(0);
  stairs[0] = 1;
  stairs[1] = 1;

  for (let i = 2; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }

  return stairs[n];
}

export function coinChange(coins: number[], amount: number): number {
  const MAX = amount + 1;
  const minCoins: number[] = new Array(MAX).fill(MAX);
  minCoins[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coins[j]] + 1);
      }
    }
  }

  return minCoins[amount] > amount ? -1 : minCoins[amount];
}

export function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const lengths: number[] = new Array(nums.length).fill(1);
  let maxSoFar = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
    maxSoFar = Math.max(maxSoFar, lengths[i]);
  }

  return maxSoFar;
}

export function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const commonSubseqLengths: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        commonSubseqLengths[i][j] = commonSubseqLengths[i - 1][j - 1] + 1;
      } else {
        commonSubseqLengths[i][j] = Math.max(
          commonSubseqLengths[i - 1][j],
          commonSubseqLengths[i][j - 1]
        );
      }
    }
  }

  return commonSubseqLengths[m][n];
}

export function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const wordSet = new Set(wordDict);
  const wordBreaks: boolean[] = new Array(n + 1).fill(false);
  wordBreaks[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (wordBreaks[j] && wordSet.has(s.substring(j, i))) {
        wordBreaks[i] = true;
        break;
      }
    }
  }

  return wordBreaks[n];
}

export function combinationSum4(nums: number[], target: number): number {
  const combinations: number[] = new Array(target + 1).fill(0);
  combinations[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (num <= i) {
        combinations[i] += combinations[i - num];
      }
    }
  }

  return combinations[target];
}

export function houseRobber(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  const maxRobbed: number[] = new Array(n).fill(0);
  maxRobbed[0] = nums[0];
  maxRobbed[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    maxRobbed[i] = Math.max(maxRobbed[i - 1], maxRobbed[i - 2] + nums[i]);
  }

  return maxRobbed[n - 1];
}

export function houseRobberII(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));

  function robRange(nums: number[], start: number, end: number): number {
    let prevMax = 0;
    let currMax = 0;

    for (let i = start; i <= end; i++) {
      let temp = currMax;
      currMax = Math.max(prevMax + nums[i], currMax);
      prevMax = temp;
    }

    return currMax;
  }
}

export function numDecodings(s: string): number {
  if (s[0] === "0") return 0;

  const n = s.length;
  const decodeWays: number[] = new Array(n + 1).fill(0);
  decodeWays[0] = 1;
  decodeWays[1] = 1;

  for (let i = 2; i <= n; i++) {
    const oneDigit = Number(s.slice(i - 1, i));
    const twoDigits = Number(s.slice(i - 2, i));

    if (oneDigit >= 1) {
      decodeWays[i] += decodeWays[i - 1];
    }

    if (twoDigits >= 10 && twoDigits <= 26) {
      decodeWays[i] += decodeWays[i - 2];
    }
  }

  return decodeWays[n];
}

export function uniquePaths(m: number, n: number): number {
  const paths: number[][] = Array(m)
    .fill(0)
    .map(() => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
    }
  }

  return paths[m - 1][n - 1];
}

export function jumpGame(nums: number[]): boolean {
  let maxReachableIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReachableIndex) return false;
    maxReachableIndex = Math.max(maxReachableIndex, i + nums[i]);
    if (maxReachableIndex >= nums.length - 1) return true;
  }

  return false;
}
// Dynamic Programming solutions ends here
// Graph solutions starts here
export function cloneGraph(node: types.Node | null): types.Node | null {
  if (node === null) {
    return null;
  }
  if (!node) return null;
  const hash: { [key: string]: types.Node } = {};

  let queue: types.Node[] = [node];
  const visited = new Set<number>();

  while (queue.length) {
    const { val, neighbors } = queue.shift()!;
    if (!visited.has(val)) {
      hash[val] = new types.Node(val);
      visited.add(val);
      queue.push(...neighbors);
    }
  }

  queue = [node];
  visited.clear();
  while (queue.length) {
    const { val, neighbors } = queue.shift()!;
    if (!visited.has(val)) {
      neighbors.forEach((neighbor) => {
        if (hash[neighbor.val]) {
          hash[val].neighbors.push(hash[neighbor.val]);
        }
      });
      visited.add(val);
      queue.push(...neighbors);
    }
  }

  return hash[node.val];
}

export function canFinish(
  numCourses: number,
  prerequisites: types.Prerequisite[]
): boolean {
  const indegrees = new Array(numCourses).fill(0);
  const adjacencyList = new Map<types.Course, types.Course[]>();

  // Initialize adjacency list and indegrees
  for (let i = 0; i < numCourses; i++) {
    adjacencyList.set(i, []);
  }

  for (const [course, prerequisite] of prerequisites) {
    indegrees[course]++;
    adjacencyList.get(prerequisite)?.push(course);
  }

  const queue: types.Course[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const course = queue.shift()!;
    for (const nextCourse of adjacencyList.get(course) || []) {
      indegrees[nextCourse]--;
      if (indegrees[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return indegrees.every((indegree) => indegree === 0);
}

export function pacificAtlanticWaterFlow(
  heights: number[][]
): types.Coordinate[] {
  if (!heights || !heights[0]) {
    return [];
  }

  const m = heights.length;
  const n = heights[0].length;
  const pacific = Array.from({ length: m }, () => new Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => new Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    helper.dfsGOH(i, 0, pacific, m, n, heights);
    helper.dfsGOH(i, n - 1, atlantic, m, n, heights);
  }

  for (let i = 0; i < n; i++) {
    helper.dfsGOH(0, i, pacific, m, n, heights);
    helper.dfsGOH(m - 1, i, atlantic, m, n, heights);
  }

  const result: types.Coordinate[] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

export function numberOfIslands(grid: types.GridString): number {
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        helper.dfsGOL(i, j, grid);
        islandCount++;
      }
    }
  }

  return islandCount;
}

export function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

export function alienDictionary(words: string[]): string[] {
  if (words.length === 1) {
    return Array.from(new Set(words[0].split("")));
  }

  let adjList = new Map<string, string[]>();
  let visited = new Set<string>();
  let stack: string[] = [];

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        if (!adjList.has(word1[j])) {
          adjList.set(word1[j], []);
        }
        adjList.get(word1[j])!.push(word2[j]);
        break;
      }
    }
  }

  for (let node of adjList.keys()) {
    if (!visited.has(node)) {
      helper.topologicalSort(node, visited, stack, adjList);
    }
  }

  return stack.reverse();
}

export function graphValidTree(n: number, edges: number[][]): boolean {
  let adjList = new Array(n).fill(0).map(() => new Array());
  let visited = new Array(n).fill(false);

  // Create adjacency list
  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  // DFS from node 0
  if (!helper.dfsGraphValidation(0, -1, adjList, visited)) {
    return false;
  }

  // Check if all nodes have been visited
  for (let v of visited) {
    if (!v) {
      return false;
    }
  }

  return true;
}

export function numberOfConnectedComponents(
  n: number,
  edges: number[][]
): number {
  let parent = new Array(n);
  let rank = new Array(n).fill(0);
  let count = n;

  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  function find(node: number): number {
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  }

  function union(node1: number, node2: number): void {
    if (node1 >= n || node2 >= n) {
      throw new Error("Node is out of range");
    }
    let root1 = find(node1);
    let root2 = find(node2);
    if (root1 !== root2) {
      if (rank[root1] > rank[root2]) {
        parent[root2] = root1;
      } else if (rank[root1] < rank[root2]) {
        parent[root1] = root2;
      } else {
        parent[root2] = root1;
        rank[root1]++;
      }
      count--;
    }
  }

  for (let [node1, node2] of edges) {
    union(node1, node2);
  }

  return count;
}
// Graph solutions ends here

// Interval solutions starts here
export function insertInterval(
  intervals: types.Interval[],
  newInterval: types.Interval
): types.Interval[] {
  const result: types.Interval[] = [];
  let i = 0;

  // Add all intervals ending before newInterval starts to result
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge all overlapping intervals to one considering newInterval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the union of intervals we got
  result.push(newInterval);

  // Add all the rest
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

export function mergeIntervals(intervals: types.Interval[]): types.Interval[] {
  if (!intervals.length) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result: types.Interval[] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = result[result.length - 1];
    const currentInterval = intervals[i];

    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}

export function nonOverlappingIntervals(intervals: types.Interval[]): number {
  if (!intervals.length) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let end = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      // If the current interval overlaps with the previous one, increment the count
      count++;
    } else {
      // Otherwise, update the end time
      end = intervals[i][1];
    }
  }

  return count;
}

export function meetingRooms(intervals: types.Interval[]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}

export function meetingRoomsII(intervals: types.Interval[]): number {
  const starts = intervals.map((a) => a[0]).sort((a, b) => a - b);
  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  let rooms = 0;
  let endPointer = 0;

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPointer]) {
      rooms++;
    } else {
      endPointer++;
    }
  }

  return rooms;
}
// Interval solutions ends here

// Linked List solutions starts here
export function reverseList(
  head: types.ListNode | null
): types.ListNode | null {
  let currentNode = head;
  let previousNode = null;

  while (currentNode) {
    const nextNode = currentNode.next;

    currentNode.next = previousNode;
    previousNode = currentNode;

    if (!nextNode) return currentNode;

    currentNode = nextNode;
  }

  return currentNode;
}

export function linkedListCycle(head: types.ListNode | null): boolean {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer?.next) {
    slowPointer = slowPointer!.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}

export function mergeTwoSortedLists(
  list1: types.ListNode | null,
  list2: types.ListNode | null
): types.ListNode | null {
  let dummyHead = new types.ListNode(0);
  let currentNode = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  // If one of the lists is not empty, append it to the merged list
  if (list1 !== null) {
    currentNode.next = list1;
  } else if (list2 !== null) {
    currentNode.next = list2;
  }

  return dummyHead.next;
}

export function mergeKSortedLists(
  lists: Array<types.ListNode | null>
): types.ListNode | null {
  if (lists.length === 0) return null;
  let interval = 1;
  while (interval < lists.length) {
    for (let i = 0; i < lists.length - interval; i = i + interval * 2) {
      lists[i] = helper.mergeTwoLists(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }
  return lists[0];
}

export function removeNthNodeFromEndofList(
  head: types.ListNode | null,
  n: number
): types.ListNode | null {
  let firstPointer: types.ListNode | null = head;
  let secondPointer: types.ListNode | null = head;

  // Advances first pointer so that the gap between first and second is n nodes apart
  for (let i = 0; i < n; i++) {
    if (firstPointer) firstPointer = firstPointer.next;
  }

  // If firstPointer is null, head is the node to remove
  if (firstPointer === null) {
    return head ? head.next : null;
  }

  // Move first to the end, maintaining the gap
  while (firstPointer.next !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer!.next;
  }

  // Skip the next node of secondPointer
  secondPointer!.next = secondPointer!.next!.next;
  return head;
}

export function reorderList(head: types.ListNode | null): void {
  if (head === null) return;

  // Find the middle of the linked list
  let slow: types.ListNode | null = head;
  let fast: types.ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev: types.ListNode | null = null;
  let curr: types.ListNode | null = slow;
  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // Merge the first half and the reversed second half
  let firstHalfIter: types.ListNode | null = head;
  let secondHalfIter: types.ListNode | null = prev;
  while (secondHalfIter!.next !== null) {
    const temp: types.ListNode | null = firstHalfIter!.next;
    firstHalfIter!.next = secondHalfIter;
    firstHalfIter = temp;

    const temp2: types.ListNode | null = secondHalfIter!.next;
    secondHalfIter!.next = firstHalfIter;
    secondHalfIter = temp2;
  }
}
// Linked List solutions ends here

// Matrix solutions starts here
export function setMatrixZeroes(matrix: types.Matrix): void {
  let isCol = false;
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  for (let i = 0; i < rowLength; i++) {
    if (matrix[i][0] === 0) {
      isCol = true;
    }

    for (let j = 1; j < colLength; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < rowLength; i++) {
    for (let j = 1; j < colLength; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < colLength; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isCol) {
    for (let i = 0; i < rowLength; i++) {
      matrix[i][0] = 0;
    }
  }
}

export function spiralMatrixOrder(matrix: types.Matrix): number[] {
  if (matrix.length === 0) return [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  const result: number[] = [];

  while (true) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    if (++top > bottom) break;

    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    if (--right < left) break;

    for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
    if (--bottom < top) break;

    for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
    if (++left > right) break;
  }

  return result;
}

export function rotateImage(matrix: types.Matrix): void {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
}

export function wordSearch(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function isSafe(x: number, y: number, start: number): boolean {
    return (
      x >= 0 && y >= 0 && x < rows && y < cols && board[x][y] === word[start]
    );
  }

  function dfs(x: number, y: number, start: number): boolean {
    if (start === word.length) return true;
    if (!isSafe(x, y, start)) return false;

    board[x][y] = "#"; // mark as visited
    for (const [dx, dy] of directions) {
      if (dfs(x + dx, y + dy, start + 1)) return true;
    }
    board[x][y] = word[start]; // backtrack

    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
}
// Matrix solutions ends here

// String solutions starts here
export function lengthOfLongestSubstring(s: string): number {
  let left: number = 0;
  let right: number = 0;
  let maxLength: number = 0;
  const chars = new Set<string>();

  while (right < s.length) {
    if (!chars.has(s[right])) {
      chars.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      chars.delete(s[left]);
      left++;
    }
  }

  return maxLength;
}

export function longestRepeatingCharacterReplacement(
  s: string,
  k: number
): number {
  const count = new Array(26).fill(0);
  let maxCount: number = 0;
  let maxLength: number = 0;
  let left: number = 0;

  for (let right: number = 0; right < s.length; right++) {
    count[s.charCodeAt(right) - 65]++;
    maxCount = Math.max(maxCount, count[s.charCodeAt(right) - 65]);

    if (right - left + 1 - maxCount > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

export function minWindowSubstring(s: string, t: string): string {
  const map = new Map<string, number>();
  for (let char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let left: number = 0;
  let right: number = 0;
  let required = map.size;
  let minLength = Infinity;
  let minLeft: number = 0;

  while (right < s.length) {
    const char = s[right];
    if (map.has(char)) {
      map.set(char, map.get(char)! - 1);
      if (map.get(char) === 0) required--;
    }

    while (required === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }

      const char = s[left];
      if (map.has(char)) {
        map.set(char, (map.get(char) || 0) + 1);
        if (map.get(char)! > 0) required++;
      }

      left++;
    }

    right++;
  }

  return minLength === Infinity
    ? ""
    : s.substring(minLeft, minLeft + minLength);
}

export function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const frequencyCounter: Record<string, number> = {};

  for (let char of s) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (let char of t) {
    if (!frequencyCounter[char]) {
      return false;
    }
    frequencyCounter[char]--;
  }

  return true;
}

export function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};

  for (let str of strs) {
    const sorted = str.split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(str);
  }

  return Object.values(map);
}

export function validParentheses(s: string): boolean {
  const stack: string[] = [];
  const bracketMap: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (bracketMap[char]) {
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

export function validPalindrome(s: string): boolean {
  const alphanumericString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedString = alphanumericString.split("").reverse().join("");
  return alphanumericString === reversedString;
}

export function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  let start = 0;
  let maxLength = 1;

  // Helper function to expand around the center for odd and even length palindromes
  const expandAroundCenter = (left: number, right: number): number => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);
    const len2 = expandAroundCenter(i, i + 1);

    const currentMaxLength = Math.max(len1, len2);

    if (currentMaxLength > maxLength) {
      maxLength = currentMaxLength;
      start = i - Math.floor((currentMaxLength - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
}

export function palindromicSubstrings(s: string): number {
  // 76 ms runtime, 51.42 MB Memory. TODO: make it better
  let count = 0;

  // Helper function to expand around the center for odd and even length palindromes
  const expandAroundCenter = (left: number, right: number): void => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++; // Increment count when a palindrome is found
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // Count palindromic substrings with odd length
    expandAroundCenter(i, i);

    // Count palindromic substrings with even length
    expandAroundCenter(i, i + 1);
  }

  return count;
}

export function encodeDecodeStrings(strings: string[]): string[] {
  // Check if the input is an array
  if (!Array.isArray(strings)) {
    console.error("Invalid input. Expected an array.");
    return [];
  }

  if (strings.length === 0) {
    return strings; // Return an empty array if the input is empty
  }

  const delimiter: string = ":;";

  // Encode an array of strings into a single encoded string
  const encodedStr: string = strings.join(delimiter);

  // Decode the encoded string back into an array of strings
  const decodedStrings: string[] = encodedStr.split(delimiter);

  return decodedStrings;
}
// String solutions ends here

// Tree solutions starts here
export function maximumDepthofBinaryTree(root: types.TreeNode | null): number {
  const stack: types.StackNode[] = [{ node: root, depth: 1 }];

  let max: number = 0;

  while (stack.length) {
    const { node, depth } = stack.pop() as types.StackNode;
    if (node) {
      max = Math.max(depth, max);
      stack.push({ node: node.left, depth: depth + 1 });
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }
  return max;
}

export function isSameTree(
  p: types.TreeNode | null,
  q: types.TreeNode | null
): boolean {
  // Base case: if both nodes are null, they are the same
  if (p === null && q === null) {
    return true;
  }

  // Check if the current nodes have the same value and recursively check left and right subtrees
  return (
    p !== null &&
    q !== null &&
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}

export function invertBinaryTree(
  root: types.TreeNode | null
): types.TreeNode | null {
  // Base case: if the node is null, return null
  if (root === null) {
    return null;
  }

  // Swap the left and right subtrees recursively
  const temp = root.left;
  root.left = invertBinaryTree(root.right);
  root.right = invertBinaryTree(temp);

  return root;
}

export function binaryTreeMaximumPathSum(root: types.TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const res: number[] = [root.val];

  // return max path sum without split
  function dfs(root: types.TreeNode | null): number {
    if (!root) {
      return 0;
    }

    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);
    leftMax = Math.max(leftMax, 0);
    rightMax = Math.max(rightMax, 0);

    // compute max path sum WITH split
    res[0] = Math.max(res[0], root.val + leftMax + rightMax);
    return root.val + Math.max(leftMax, rightMax);
  }

  dfs(root);
  return res[0];
}

export function binaryTreeLevelOrderTraversal(
  root: types.TreeNode | null
): number[][] {
  if (!root) {
    return [];
  }

  const result: number[][] = [];
  const queue: types.TreeNode[] = [root];

  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    const currentLevelValues: number[] = [];

    for (let i = 0; i < currentLevelSize; i++) {
      const currentNode = queue.shift()!;
      currentLevelValues.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevelValues);
  }

  return result;
}

export class serializeAndDeserializeBinaryTree {
  serialize(root: types.TreeNode | null): string {
    if (!root) {
      return "[]";
    }

    const serialized: (number | null)[] = [root.val];
    const queue: (types.TreeNode | null)[] = [root];

    while (queue.length > 0) {
      const current = queue.shift()!;

      if (current) {
        if (current.left) {
          serialized.push(current.left.val);
          queue.push(current.left);
        } else {
          serialized.push(null);
        }

        if (current.right) {
          serialized.push(current.right.val);
          queue.push(current.right);
        } else {
          serialized.push(null);
        }
      }
    }

    // Remove trailing nulls
    while (
      serialized.length > 0 &&
      serialized[serialized.length - 1] === null
    ) {
      serialized.pop();
    }

    return JSON.stringify(serialized);
  }

  deserialize(data: string): types.TreeNode | null {
    const serialized = JSON.parse(data) as (number | null)[] | null;

    if (!serialized || serialized.length === 0) {
      return null;
    }

    const root: types.TreeNode = {
      val: serialized.shift() as number,
      left: null,
      right: null,
    };
    const queue: types.TreeNode[] = [root];

    while (serialized.length > 0) {
      const current = queue.shift()!;

      const leftVal = serialized.shift();
      if (leftVal !== null && leftVal !== undefined) {
        const leftNode: types.TreeNode = {
          val: leftVal as number,
          left: null,
          right: null,
        };
        current.left = leftNode;
        queue.push(leftNode);
      }

      const rightVal = serialized.shift();
      if (rightVal !== null && rightVal !== undefined) {
        const rightNode: types.TreeNode = {
          val: rightVal as number,
          left: null,
          right: null,
        };
        current.right = rightNode;
        queue.push(rightNode);
      }
    }

    return root;
  }
}

export function subtreeofAnotherTree(
  root: types.TreeNode | null,
  subRoot: types.TreeNode | null
): boolean {
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  const isSame = (
    r: types.TreeNode | null,
    s: types.TreeNode | null
  ): boolean => {
    if (!r && !s) {
      return true;
    }

    if (r && s && r.val === s.val) {
      return isSame(r.left, s.left) && isSame(r.right, s.right);
    }

    return false;
  };

  if (isSame(root, subRoot)) {
    return true;
  }

  return (
    subtreeofAnotherTree(root.left, subRoot) || // Check if the left subtree is the same
    subtreeofAnotherTree(root.right, subRoot) // Check if the right subtree is the same
  );
}

export function constructBinaryTreefromPreorderandInorderTraversal(
  preorder: number[],
  inorder: number[]
): types.TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }

  const rootVal = preorder[0];
  const root = new types.TreeNode(rootVal);

  const rootIndexInInorder = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, rootIndexInInorder);
  const rightInorder = inorder.slice(rootIndexInInorder + 1);

  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);

  root.left = constructBinaryTreefromPreorderandInorderTraversal(
    leftPreorder,
    leftInorder
  );
  root.right = constructBinaryTreefromPreorderandInorderTraversal(
    rightPreorder,
    rightInorder
  );

  return root;
}

export function isValidBST(root: types.TreeNode | null): boolean {
  let prevVal: number | null = null;

  const inorderTraversal = (node: types.TreeNode | null): boolean => {
    if (node === null) {
      return true;
    }

    // Check the left subtree
    if (!inorderTraversal(node.left)) {
      return false;
    }

    // Check the current node's value
    if (prevVal !== null && node.val <= prevVal) {
      return false;
    }
    prevVal = node.val;

    // Check the right subtree
    return inorderTraversal(node.right);
  };

  return inorderTraversal(root);
}

export function kthSmallestElementnaBST(
  root: types.TreeNode | null,
  k: number
): number {
  let result: number = 0;
  let count: number = 0;

  const inorderTraversal = (node: types.TreeNode | null) => {
    if (node === null) {
      return;
    }

    // Traverse the left subtree
    inorderTraversal(node.left);

    // Update the counter and check if we've reached the kth smallest element
    count++;
    if (count === k) {
      result = node.val;
      return;
    }

    // Traverse the right subtree
    inorderTraversal(node.right);
  };

  inorderTraversal(root);

  return result;
}

export function lowestCommonAncestorofaBST(
  root: types.TreeNode | null,
  p: types.TreeNode | null,
  q: types.TreeNode | null
): types.TreeNode | null {
  if (root === null) {
    return null;
  }

  if (p!.val < root.val && q!.val < root.val) {
    return lowestCommonAncestorofaBST(root.left, p, q);
  }

  if (p!.val > root.val && q!.val > root.val) {
    return lowestCommonAncestorofaBST(root.right, p, q);
  }

  return root;
}

export class prefixTree {
  root: types.TrieNode;

  constructor() {
    this.root = new types.TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (let char of word) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[index] === null) {
        node.children[index] = new types.TrieNode();
      }
      node = node.children[index];
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (let char of word) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[index] === null) {
        return false;
      }
      node = node.children[index];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (let char of prefix) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[index] === null) {
        return false;
      }
      node = node.children[index];
    }
    return true;
  }
}

export class addAndSearchWordsDataStructure {
  root: types.TrieNode;

  constructor() {
    this.root = new types.TrieNode();
  }

  addWord(word: string): void {
    let node: types.TrieNode = this.root;
    for (let char of word) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[index] === null) {
        node.children[index] = new types.TrieNode();
      }
      node = node.children[index];
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    return helper.searchHelper(word, 0, this.root);
  }
}

//TODO: 505 ms runtime, 54.95 MB Memory. Make it better
export function wordSearchII(board: string[][], words: string[]): string[] {
  const tree = new types.searchTree();

  for (let i = 0; i < words.length; ++i) {
    tree.insert(words[i], i);
  }

  const m = board.length;
  const n = board[0].length;
  const ans: string[] = [];
  const dirs: number[] = [-1, 0, 1, 0, -1];

  const dfs = (node: types.searchTree, i: number, j: number) => {
    const idx = board[i][j].charCodeAt(0) - 97;

    if (node.children[idx] == null) {
      return;
    }
    node = node.children[idx] as types.searchTree;

    if (node.ref != -1) {
      ans.push(words[node.ref]);
      node.ref = -1;
    }

    const c = board[i][j];
    board[i][j] = "#";

    for (let k = 0; k < 4; ++k) {
      const x = i + dirs[k];
      const y = j + dirs[k + 1];
      if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] != "#") {
        dfs(node, x, y);
      }
    }
    board[i][j] = c;
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      dfs(tree, i, j);
    }
  }
  return ans;
}
// Tree solutions ends here

// Heap solutions starts here
export function topKFrequentElements(nums: number[], k: number): number[] {
  const frequencyMap: Map<number, number> = new Map();
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const minHeap: types.Frequency[] = [];
  for (let [num, count] of frequencyMap) {
    if (minHeap.length < k) {
      minHeap.push({ num, count });
      if (minHeap.length === k) {
        minHeap.sort((a, b) => a.count - b.count);
      }
    } else if (count > minHeap[0].count) {
      minHeap[0] = { num, count };
      minHeap.sort((a, b) => a.count - b.count);
    }
  }

  return minHeap.map((frequency) => frequency.num);
}

//TODO: 1250 ms runtime, 86.76 MB Memory. Make it better
export class MedianFinder {
  private nums: number[];

  constructor() {
    this.nums = [];
  }

  addNum(num: number): void {
    const { nums } = this;
    let l = 0;
    let r = nums.length;
    while (l < r) {
      const mid = (l + r) >>> 1;
      if (nums[mid] < num) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    nums.splice(l, 0, num);
  }

  findMedian(): number {
    const { nums } = this;
    const n = nums.length;
    if ((n & 1) === 1) {
      return nums[n >> 1];
    }
    return (nums[n >> 1] + nums[(n >> 1) - 1]) / 2;
  }
}
// Heap solutions ends here
