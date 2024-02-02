export type Course = number;
export type Prerequisite = [Course, Course];
export type Coordinate = [number, number];
export type Grid = number[][];
export type GridString = string[][];
export type Visited = boolean[][];
export type ParentArray = number[];
export type Interval = [number, number];
export type Matrix = number[][];
export type Cell = [number, number, number];

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Definition for a Node.
export class Node {
  val: number;
  neighbors: Node[];

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export type StackNode = {
  node: TreeNode | null;
  depth: number;
};

export class TrieNode {
  children: TrieNode[];
  isEndOfWord: boolean;

  constructor() {
    this.children = Array(26).fill(null);
    this.isEndOfWord = false;
  }
}

export class searchTree {
  children: (searchTree | null)[];
  ref: number;

  constructor() {
    this.children = new Array(26).fill(null);
    this.ref = -1;
  }

  insert(w: string, ref: number): void {
    let node: searchTree = this;
    for (let i = 0; i < w.length; i++) {
      const c = w.charCodeAt(i) - 97;
      if (node.children[c] == null) {
        node.children[c] = new searchTree();
      }
      node = node.children[c] as searchTree;
    }
    node.ref = ref;
  }
}

export type Frequency = {
  num: number;
  count: number;
};
