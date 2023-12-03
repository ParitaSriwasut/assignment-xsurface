// B.Create a function that converts the format of this variable
// Input: {
// customer: "Xsurface",
// contact: [
// {name: “Max”},
// {name: “Mike”},
// {name: “Adam”}],
// address: “Sukhumvit 62”,
//   }
// Output: [ {
// name: “Max”,
// customer: "Xsurface",
// address: “Sukhumvit 62”,
//  	},{
// name: “Mike”,
// customer: "Xsurface",
// address: “Sukhumvit 62”,
//  	 },{
// name: “Adam”,
// customer: "Xsurface",
// address: “Sukhumvit 62”,
//   }]

const input = {
  customer: "Xsurface",
  contact: [{ name: "Max" }, { name: "Mike" }, { name: "Adam" }],
  address: "Sukhumvit 62",
};

function mapInputByName(input) {
  const result = input.contact.map((contact) => ({
    name: contact.name,
    customer: input.customer,
    address: input.address,
  }));
  return result;
}

const mapOutput = mapInputByName(input);
console.log(mapOutput);
