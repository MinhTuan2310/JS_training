function findLastUrl(strList) {
  if(!Array.isArray(strList)) return false;

  return strList
  .reverse()
  .find(str => isCorrectProtocol(str) && IsCorrectDomain(str) && IsCorrectDomainName(str));
}

function isCorrectProtocol(str) {
  const protocolList = ['http', 'https', 'ws', 'wss'];
  return protocolList.some(protocol => str.includes(protocol));
}

function IsCorrectDomain(str) {
  const domainList = [".com", ".com.vn", ".com"];
  return domainList.some(domain => str.includes(domain));
}

function IsCorrectDomainName(str) {
  return str
  .slice(str.indexOf("/") + 2, str.indexOf("."))
  .length >= 3;
}

console.log(findLastUrl([]));
console.log(findLastUrl(['https://google.com', 'wss://chat.sample.com']));