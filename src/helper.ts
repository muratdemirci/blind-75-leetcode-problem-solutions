import * as types from "./types";

// Helper function to create a graph from an array
export function createGraph(arr: number[][]): types.Node {
  const nodes: types.Node[] = arr.map(([val]) => new types.Node(val));
  arr.forEach(([val, ...neighbors], i) => {
    nodes[i].neighbors = neighbors.map((n) => nodes[n - 1]);
  });
  return nodes[0];
}

// The dfsGOH function is used for traversing a grid of heights.
export function dfsGOH(
  x: number,
  y: number,
  visited: types.Visited,
  m: number,
  n: number,
  heights: types.Grid
): void {
  visited[x][y] = true;

  // directions means the 4 directions we can go from a cell
  // [-1, 0]: Move up. Subtract 1 from the current row index.
  // [1, 0]: Move down. Add 1 to the current row index.
  // [0, -1]: Move left. Subtract 1 from the current column index.
  // [0, 1]: Move right. Add 1 to the current column index.

  const directions: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let dir of directions) {
    let newX = x + dir[0],
      newY = y + dir[1];
    if (
      newX < 0 ||
      newX >= m ||
      newY < 0 ||
      newY >= n ||
      visited[newX][newY] ||
      heights[newX][newY] < heights[x][y]
    ) {
      continue;
    }
    dfsGOH(newX, newY, visited, m, n, heights);
  }
}

// dfsGOL function is used for traversing a grid of land ("1") and water ("0")
export function dfsGOL(row: number, col: number, grid: types.GridString): void {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] === "0"
  ) {
    return;
  }
  const directions: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Mark the cell as visited
  grid[row][col] = "0";

  // Visit all adjacent cells
  for (let dir of directions) {
    dfsGOL(row + dir[0], col + dir[1], grid);
  }
}
// dfs based topological sorting function for directed graphs.
export function topologicalSort(
  v: string,
  visited: Set<string>,
  stack: string[],
  adjList: Map<string, string[]>
) {
  visited.add(v);
  if (adjList.has(v)) {
    for (let neighbor of adjList.get(v)!) {
      if (!visited.has(neighbor)) {
        topologicalSort(neighbor, visited, stack, adjList);
      }
    }
  }
  stack.push(v);
}
// dfs based graph validation function for undirected graphs.
export function dfsGraphValidation(
  node: number,
  parent: number,
  adjList: number[][],
  visited: boolean[]
): boolean {
  visited[node] = true;

  for (let neighbor of adjList[node]) {
    if (neighbor !== parent) {
      if (
        visited[neighbor] ||
        !dfsGraphValidation(neighbor, node, adjList, visited)
      ) {
        return false;
      }
    }
  }

  return true;
}

// Helper function to convert an array to a linked list
export function arrayToList(nums: number[]): types.ListNode | null {
  let dummyHead = new types.ListNode(0);
  let currentNode = dummyHead;
  nums.forEach((num) => {
    currentNode.next = new types.ListNode(num);
    currentNode = currentNode.next!;
  });
  return dummyHead.next;
}

// Helper function to convert a linked list to an array
export function listToArray(node: types.ListNode | null): number[] {
  let nums: number[] = [];
  while (node) {
    nums.push(node.val);
    node = node.next;
  }
  return nums;
}

// Helper function to convert an array to a linked list with a cycle
export function arrayToListWithCycle(
  nums: number[],
  pos: number
): types.ListNode | null {
  let dummyHead = new types.ListNode(0);
  let currentNode = dummyHead;
  let cycleNode: types.ListNode | null = null;
  nums.forEach((num, index) => {
    currentNode.next = new types.ListNode(num);
    currentNode = currentNode.next!;
    if (index === pos) {
      cycleNode = currentNode;
    }
  });
  if (cycleNode) {
    currentNode.next = cycleNode;
  }
  return dummyHead.next;
}

export function mergeTwoLists(
  l1: types.ListNode | null,
  l2: types.ListNode | null
): types.ListNode | null {
  let head = new types.ListNode(0);
  let point = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      point.next = l1;
      l1 = l1.next;
    } else {
      point.next = l2;
      l2 = l1;
      l1 = point.next.next;
    }
    point = point.next;
  }
  if (!l1) {
    point.next = l2;
  } else {
    point.next = l1;
  }
  return head.next;
}

export function searchHelper(
  this: any,
  word: string,
  index: number,
  node: types.TrieNode
): boolean {
  if (index === word.length) {
    return node.isEndOfWord;
  }

  if (word[index] === ".") {
    for (let child of node.children) {
      if (child !== null && this.searchHelper(word, index + 1, child)) {
        return true;
      }
    }
    return false;
  } else {
    let child = node.children[word.charCodeAt(index) - "a".charCodeAt(0)];
    return child !== null && this.searchHelper(word, index + 1, child);
  }
}
