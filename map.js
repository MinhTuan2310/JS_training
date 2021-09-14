const cityList = [
  {id: 1, name: 'Tp. Ho Chi Minh'},
  {id: 2, name: ' Tp Phan Thiet'}
];


// Map
const cityMap = cityList.reduce((map, city) => {
  map.set(city.id, city);

  return map;
}, new Map());

console.log(cityMap);
console.log(cityMap.get(1).name); 

// Obj
const cityMap2 = cityList.reduce((map, city) => {
  map[city.id]  = city;

  return map;
}, {});

console.log(cityMap2);
  