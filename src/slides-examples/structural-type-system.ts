type Human = {
  age: number;
};

type Car = {
  age: number;
};

const getAge = (human: Human) => human.age;

const someCar: Car = {
  age: 12
};

getAge(someCar);
