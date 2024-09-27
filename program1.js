// const getTotalIsles = function (grid) {


//   // write your code here

// };

// module.exports = getTotalIsles;


const getTotalIsles = function(grid) {
  if (!grid || grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;
  let islandCount = 0;

  const dfs = (i, j) => {
      // Base case: if out of bounds or current cell is water, return
      if (i < 0 || j < 0 || i >= numRows || j >= numCols || grid[i][j] === 'W') {
          return;
      }

      // Mark the current cell as visited by changing 'L' to 'W'
      grid[i][j] = 'W';

      // Explore all four possible directions (up, down, left, right)
      dfs(i - 1, j); // up
      dfs(i + 1, j); // down
      dfs(i, j - 1); // left
      dfs(i, j + 1); // right
  };

  for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
          
          if (grid[i][j] === 'L') {
              islandCount++;
              dfs(i, j); // Mark all connected landmasses as visited
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
