export function countURLs(str) {
  if(typeof str !== 'string' || str.trim().length === 0) return "invalid param";

  return str
  .split(" ")
  .filter(item => hasProtocol(item) && hasDomain(item) && HasDomainName(item))
  .length;
}

function hasProtocol(str) {
  const protocolList = ["http", "ws", "wss"];

  return protocolList.some(protocol => str.startsWith(protocol));
}

function hasDomain(str) {
  const domainList = [".com", ".com.vn", ".vn"];

  return domainList.some(domain => str.endsWith(domain));
}

function HasDomainName(str) {
  return str.slice(str.indexOf(":") + 3, str.indexOf(".")).length >= 3;
}

console.log(countURLs("my website is: http://ezfrontend.com you can visit it"));