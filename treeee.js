/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// preorder = [3,9,20,15,7] inorder = [9,3,15,20,7]

// 先序遍历 中序遍历

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  } else if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  let value = preorder[0];
  let index = inorder.indexOf(value);

  let inLeft = inorder.slice(0, index);
  let inRight = inorder.slice(index + 1);
  let preLeft = preorder.slice(1, index + 1);
  let preRight = preorder.slice(index + 1);

  let node = new TreeNode(value);

  node.left = buildTree(preLeft, inLeft);
  node.right = buildTree(preRight, inRight);
  return node;
}

function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0) {
    return null;
  }
  if (pre.length === 1) {
    return new TreeNode(pre[0]);
  }
  const value = pre[0];
  const index = vin.indexOf(value);
  const vinLeft = vin.slice(0, index);
  const vinRight = vin.slice(index + 1);
  const preLeft = pre.slice(1, index + 1);
  const preRight = pre.slice(index + 1);
  const node = new TreeNode(value);
  node.left = reConstructBinaryTree(preLeft, vinLeft);
  node.right = reConstructBinaryTree(preRight, vinRight);
  return node;
}

let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];

// console.log(reConstructBinaryTree(preorder, inorder));
console.log(buildTree(preorder, inorder));
