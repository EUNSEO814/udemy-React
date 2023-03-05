// primitives: string, boolean, number
// More Complex types: arrays, objects
// Function types, parameters

// primitives
let age: number;

age = 12;

let username: string;

username = "Max";

let isInstructor: boolean;

isInstructor = true;

// More Complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "John",
  age: 18,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference === 타입 추론

let course = "React-The Complete Guide";

// course = 25134
//타입을 지정해 주지 않았지만 오류가 남. 왜? 타입 추론 때문에! -불필요한 작업하지말고 타입추론을 이용하자!

//
//
//
// 유니온(union) 타입 === 서로 다른 형태의 객체를 동일한 변수에 저장해야 하는 경우 -> 한 개 이상의 타입을 지정할 수 있게 해주는 기능

let course2: string | number = "Some Course";

course2 = 54215;

// Type Aliases === 타입 별칭

type Person = {
  name: string;
  age: number;
};

let person2: Person;

person2 = {
  name: "emma",
  age: 22,
};

let people2: Person[];

// Functions & Types

function add3(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}
// return문이 없음. -> 이럴때는 void라는 특별한 반환 타입을 갖음.
// void는 null 또는 undefined와 비슷하지만 항상 함수와 결합해서 사용한다는 특징이 있음
// void는 함수에 반환 값이 없다는 걸 뜻힘

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); //['a', 'b', 'c' , 'd']

// updatedArray[0].split("");
//error -> updatedArray는 number[], split은 string만
// stringArray[0].split("");
