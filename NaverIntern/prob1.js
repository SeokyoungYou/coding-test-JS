let userBrands = [
  { id: 1, name: "Logestyx" },
  { id: 10, name: "Gladlear" },
];
let genderBrands = [
  { id: 6, name: "Burylaze Slapgalt" },
  { id: 1, name: "Logestyx" },
  { id: 7, name: "Izarpure" },
];

function solution(N) {
  return new Promise((resolve, reject) => {
    // Resolve the promise with the result
    if (userBrands.length < N) {
      reject("CustomError");
    } else {
      resolve(console.log(userBrands));
    }
  });
}

solution(2);
