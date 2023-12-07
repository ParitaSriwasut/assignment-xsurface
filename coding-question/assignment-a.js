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
