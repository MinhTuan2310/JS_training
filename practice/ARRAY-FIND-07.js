function findFirstEmail(strList) {
  if(!Array.isArray(strList)) return false;

  return strList
    .find(str => str.includes("@") && IsCorrectDomain(str) && str.slice(0, str.indexOf("@")).length >= 3 && str.slice(str.indexOf("@") + 1, str.indexOf(".")).length >= 3);
}

function IsCorrectDomain(str) {
  const domainList = [".com", ".com.vn", ".com"];
  return domainList.some(domain => str.includes(domain));
}

console.log(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com']));
console.log(findFirstEmail(['abc@easy.frontend']));
