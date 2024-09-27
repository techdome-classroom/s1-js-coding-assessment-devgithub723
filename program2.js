
const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;
  
  
  const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

  // Base case: empty pattern matches empty string
  dp[0][0] = true;

  // If the pattern starts with '*', it can match an empty string
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              // '*' can match any sequence, so we can ignore '*' or match one character
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
              // '?' can match one character, or the characters must match
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }

  // The answer is in the last cell of the DP table
  return dp[m][n];
};

module.exports = decodeTheRing;
