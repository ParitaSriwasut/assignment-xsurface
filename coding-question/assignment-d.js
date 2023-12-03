// D.Create a function that receives input from question C and always displays a bullet list of Outputs with this format style.
// Example:
// This is A, It correctly outputs from question C.
// This is B, It correctly outputs from question C.

const input = ["B", "J", "D", "I", "G", "A"];

function mapOutput() {
  for (let i = 0; i < input.length; i++) {
    console.log(`This is ${input[i]}, It correctly outputs from question C.`);
  }
}
mapOutput();
