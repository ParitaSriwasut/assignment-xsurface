// Pt.1 Basic JS, CSS
// A.Create a function that converts the format of this variable
// Input: [
// { name: "Alex", tel: "0991112222", code: "xsf0001"},
// { name: "Jane", tel: "0812221234", code: "xsf0002"},
// { name: "Alex", tel: "0832214433", code: "xsf0001"},
// { name: "Alex", tel: "0991113122", code: "xsf0003"}
// ]
// Output: [
// { name: "Alex", tel: ["0991112222", "0832214433"], code: "xsf0001"},
// { name: "Jane", tel: "0812221234", code: "xsf0002"},
// { name: "Alex", tel: "0991113122", code: "xsf0003"}
// ]

const inputA = [
  { name: "Alex", tel: "0991112222", code: "xsf0001" },
  { name: "Jane", tel: "0812221234", code: "xsf0002" },
  { name: "Alex", tel: "0832214433", code: "xsf0001" },
  { name: "Alex", tel: "0991113122", code: "xsf0003" },
];

function mapInputByCode(input) {
  const result = Object.values(
    input.reduce((acc, item) => {
      const key = `${item.code}`;

      //if acc is null checks key is present if not assign a new one
      acc[key] = acc[key] || { name: item.name, tel: [], code: item.code };
      acc[key].tel.push(item.tel);

      return acc;
    }, {})
  );

  return result;
}
const mapOutput = mapInputByCode(inputA);

console.log(mapOutput);

// const input = [
//   { name: "Alex", tel: "0991112222", code: "xsf0001" },
//   { name: "Jane", tel: "0812221234", code: "xsf0002" },
//   { name: "Alex", tel: "0832214433", code: "xsf0001" },
//   { name: "Alex", tel: "0991113122", code: "xsf0003" },
//   { name: "Alex", tel: "0991113112", code: "xsf0001" },
//   { name: "Jane", tel: "0981113122", code: "xsf0002" },
//   { name: "Jane", tel: "0981114522", code: "xsf0004" },
//   { name: "Lily", tel: "0961113129", code: "xsf0005" },
// ];

// function mapInputByCode(input) {
//   const result = [];

//   input.forEach((el) => {
//     //create a key that unique identifier. Shouldn't has same key
//     const key = `${el.code}`;
//     const existEntry = result.find((entry) => entry.code === el.code); //find current value that has same code.

//     if (existEntry) {
//       existEntry.tel.push(el.tel); //if entry has same code push it to result array
//     } else {
//       result.push({ name: el.name, tel: [el.tel], code: el.code });
//       //if not create new entry result array ({ name: el.name, tel: [el.tel], code: el.code })
//     }
//   });
//   return result;
// }

// const mapOutput = mapInputByCode(input);
// console.log(mapOutput);
