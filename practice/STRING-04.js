function checkDomain(str) {
  const domainList = [".com", ".vn", ".com.vn"];

  return domainList.some(domain => domain.endsWith(domain));
}

function checkSpecialDigit(str) {

  return str.includes("@") && str.indexOf("@") >= 3;
}

function checkY(str) {

  return str.slice(str.indexOf("@") + 1, str.indexOf(".")).length >= 3;
}

export function countEmails(str) {
  if(typeof str !== 'string' || str.trim().length === 0) return 'invalid param';
  if(str.search("@") <= 0) return 0;

  return str
    .split(" ")
    .filter(item => checkSpecialDigit(item) && checkDomain(item) && checkY(item))
    .length;
}

// console.log(countEmails("my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn"));