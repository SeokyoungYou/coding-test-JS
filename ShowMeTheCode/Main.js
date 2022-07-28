var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\r\n"); ///dev/stdin
let money = 0;
const typesN = parseInt(input[0]);
const arrType = Array.from(Array(typesN), function (v, k) {
  return k + 1;
});
const loadPriceCi = input[1].split(" ").map(Number); // 가격 array
let disInfosAjDj = [];
function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
}
function loadDiscountInfo() {
  for (var i = 2; i < input.length - 1; i++) {
    let disInfo = [];
    let disInfoNum = parseInt(input[i]);
    for (var j = 0; j < disInfoNum; j++) {
      i++;
      disInfo.push(input[i].split(" ").map(Number));
    }
    disInfosAjDj.push(disInfo);
  }
}
function buy(n, price) {
  money += price[n - 1];
  if (disInfosAjDj[n - 1]) {
    for (var i = 0; i < disInfosAjDj[n - 1].length; i++) {
      let disInfo = disInfosAjDj[n - 1][i];
      price[disInfo[0] - 1] > disInfo[1]
        ? (price[disInfo[0] - 1] -= disInfo[1])
        : (price[disInfo[0] - 1] = 1);
    }
  }
}
function simulation() {
  let typePerm = permutation(arrType, typesN);
  var arrMoney = [];
  for (var i = 0; i <= typePerm.length - 1; i++) {
    let priceCi = loadPriceCi.slice();
    for (var j = 0; j <= typesN - 1; j++) {
      buy(typePerm[i][j], priceCi);
    }
    arrMoney.push(money);
    money = 0;
  }
  return Math.min(...arrMoney);
}
loadDiscountInfo();
console.log(simulation());
