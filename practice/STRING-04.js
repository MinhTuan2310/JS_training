 export function countEmails(str) {
  if(typeof str !== 'string' || str.trim().length === 0) return 'invalid param';
  if(str.search("@") <= 0) return 0;

  return str
    .split(" ")
    .filter(item => item.includes("@") && (item.endsWith(".com") || item.endsWith(".vn") || item.endsWith(".com.vn")) && item.indexOf("@") >= 3 && item.slice(item.indexOf("@") + 1, item.indexOf(".")).length >= 3)
    .reduce((acc, item) => ++acc, 0);
}

