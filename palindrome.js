// 文字列を逆順にして返す
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// 回文ならtrueを、違うならfalseを返す
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}