// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  //   let sum = 0;
  // col 列
  let col = grid[0].length,
    row = grid.length;

  for (let i = 0; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 0; i < col; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[row - 1][col - 1];

  //   let route = [];
  //   let i = 0,
  //     j = 0;
  //   while (i < cow && j < row) {}
};

// public int minPathSum(int[][] grid) {
//     int width = grid[0].length, high = grid.length;
//     if (high == 0 || width == 0) return 0;
//     // 初始化
//     for (int i = 1; i < high; i++) grid[i][0] += grid[i - 1][0];
//     for (int i = 1; i < width; i++) grid[0][i] += grid[0][i - 1];
//     for (int i = 1; i < high; i++)
//         for (int j = 1; j < width; j++)
//             grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
//     return grid[high - 1][width - 1];
// }

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minPathSum(grid));
