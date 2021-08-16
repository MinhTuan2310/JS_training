export function countURLs(str) {
  if(typeof str !== 'string' || str.trim().length === 0) return "invalid param";

  return str
  .split(" ")
  .filter(item => hasProtocol(item) && hasDomain(item) && HasDomainName(item))
  .reduce((acc, item) => ++acc, 0);
}

function hasProtocol(str) {
  const protocol = ["http", "ws", "wss"];

  let flag = false;
  protocol.forEach(item => {
    if(str.startsWith(item)) flag = true;
  });

  return flag;
}

function hasDomain(str) {
  const domain = [".com", ".com.vn", ".vn"];

  let flag = false;
  domain.forEach(item => {
    if(str.endsWith(item)) flag = true;
  });

  return flag;
}

function HasDomainName(str) {
  return str.slice(str.indexOf(":") + 3, str.indexOf(".")).length >= 3;
}
