// const cityList = [
//   {id: 1, name: 'Tp. Ho Chi Minh'},
//   {id: 2, name: ' Tp Phan Thiet'}
// ];


// // Map
// const cityMap = cityList.reduce((map, city) => {
//   map.set(city.id, city);

//   return map;
// }, new Map());

// console.log(cityMap);
// console.log(cityMap.get(1).name); 

// // Obj
// const cityMap2 = cityList.reduce((map, city) => {
//   map[city.id]  = city;

//   return map;
// }, {});

// console.log(cityMap2);
  

const cars = [
  { name: 'CX6', price: 2000, brand: 'Mazda' },
  { name: 'Innova', price: 5000, brand: 'Toyota' },
  { name: 'Fortuner', price: 7000, brand: 'Toyota' },
  { name: 'Camry', price: 19000, brand: 'Toyota' },
];



function transformArray(cars) {
  if(!Array.isArray(cars) || cars.length === 0) return [];

  const res = [];
  const map = {};
  
  for (let i = 0; i < cars.length; i++) {
     let car = cars[i]; 

    if(!(car.brand in map)) {
      map[car.brand] = {brand: car.brand, cars: []}; // update key
      res.push(map[car.brand]); //push value of map[key]
    }
    
    map[car.brand].cars.push(car);
  }

  return res;


  // return cars.reduce((res, car) => {
  //   if(!(car.brand in map)) {
  //     map[car.brand] = {brand: car.brand, cars: []};
  //     res.push(map[car.brand]);
  //   }
  //   map[car.brand].cars.push(car);

  //   return res;
  // }, [])
}

console.log(transformArray(cars)); 