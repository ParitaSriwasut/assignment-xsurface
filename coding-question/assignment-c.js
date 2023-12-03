// C.Create a function that converts the format of this variable
// const input = [
//   { name: "A", age: "30" },
//   { name: "B", age: "9" },
//   { name: "C", age: "20" },
//   { name: "D", age: "18" },
//   { name: "E", age: "11" },
//   { name: "F", age: "60" },
//   { name: "G", age: "27" },
//   { name: "H", age: "90" },
//   { name: "I", age: "21" },
//   { name: "J", age: "12" },
// ];
// Output: [“B”, “J”, “D”, “I”, “G”, “A”]

//output is B: "9", J: "12", D: "18", I: "21", G: "27", A: "30"
//Loop thought the objects checks the values by looping start from 3,6,9,12...
//the string number should not over than 30

const input = [
  { name: "A", age: 30 },
  { name: "B", age: 9 },
  { name: "C", age: 20 },
  { name: "D", age: 18 },
  { name: "E", age: 11 },
  { name: "F", age: 60 },
  { name: "G", age: 27 },
  { name: "H", age: 90 },
  { name: "I", age: 21 },
  { name: "J", age: 12 },
];

function sortedAge(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].age <= 30 && input[i].age % 3 == 0) {
      result.push(input[i]);
    }
  }
  //comparing the age if a-b if result is negative push a first
  result.sort((a, b) => a.age - b.age);

  //mapping to get the name
  const namesList = result.map((item) => item.name);

  return namesList;
}

console.log(sortedAge(input));
