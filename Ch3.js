//3.2 Array and Object
// 1. Array 생성하기
const arr1 = [];
const arr2 = new Array(); // empty array []
const arr3 = new Array(5); // 5: length of array
const arr4 = new Array(5).fill(3); // [3,3,3,3,3]
const arr5 = Array.from(Array(5), function (v, k) {
  //v:value, k:index
  return k + 1;
}); // [1,2,3,4,5]

//2. Array functions
const arr6 = [1, 2, 3, 4, 5, 6];
arr6.join(","); // 1,2,3,4,5,6
arr6.reverse(); // [6,5,4,3,2,1]

const arr7 = [7, 8, 9, 10];
arr6.concat(arr7); // join two arrays [1,2,3,..,10]

// control last element
arr6.push(7, 8); // add [1,2,3,4,5,6,7,8]
arr6.pop(); // delete arr6=[1,2,3,4,5,6] return 7
// control first element
arr6.unshift(10); // add [10,1,2,3,4,5,6]
arr6.shift(); // delete [1,2,3,4,5,6]
// control middle element
arr6.slice(2, 5); // slice index 2 to (5-1) elements: [3,4,5]. 원본 array 변화 X
arr6.splice(2, 3); // delete 3 elements from index 2: [1,2,6]

//3. Array loop
const arr8 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < 5; i += 1) {
  arr8[i];
}
for (const item of arr8) {
  item;
}
//4. Object 생성하기
const obj1 = {};
const obj2 = new Object(); // {}

// add element (둘이 같은 결과)
obj2["key"] = "value"; // {key: "value"}
obj2.key = "value";
// delete element
delete obj2.key;

//key 존재 여부 확인하기 -> boolean return
"key" in obj2; //true
"hello" in obj2; //false

//key, value 집합 알아내기
Object.keys(obj2); // ["key1","key2","key3"]
Object.values(obj2); // ["value1","value2","value3"]

// Objet loop
for (const key in obj2) {
  console.log(key, obj2[key]);
}
