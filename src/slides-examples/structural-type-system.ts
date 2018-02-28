type Human = {
  age: number
};

type Car = {
  age: number,
  horsePower: number
};

const getAge = (human: Human) => human.age;

const someCar: Car = {
  age: 12,
  horsePower: 100
};

getAge(someCar);
