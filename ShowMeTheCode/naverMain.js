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
  // let  userBrands = getLikedBrands(U.id);
  // let  genderBrands = getTopBrandsForGender(U.gender);
  let solution = [];
  let userBrandsName = [];
  for (const obj of userBrands) {
    userBrandsName.push(obj.name);
  }
  if (userBrandsName.length < N) {
    let i = 0;
    while (userBrandsName.length < N) {
      userBrandsName.push(genderBrands[i].name);
      const set = new Set(userBrandsName);
      userBrandsName = [...set];
    }
  }
  return new Promise((resolve, reject) => {
    // Resolve the promise with the result
    if (userBrandsName.length < N) {
      reject("CustomError");
    } else {
      resolve(console.log(userBrandsName));
    }
  });
}

solution(3);
