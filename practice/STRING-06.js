
export function getDisplayedAddress(address) {
  if(typeof address !== "object" || address === null || Array.isArray(address)) return false;

  const obj = {...address};
  const output = Object.values(obj)
    .reduce((acc, value) => {
     if (typeof value === 'number') {
       acc = `${value} `;
     } else {
       acc = acc + `${value}, `;
     }

     return acc;
    },'');

  return output.slice(0, output.length - 2)
}

// console.log(getDisplayedAddress({
//   number: 123, 
//   street: 'Nguyen Cong Tru', 
//   ward: 'Ward 11', 
//   district: 'Binh Thanh District',
//   city: 'HCMC'
//  }));