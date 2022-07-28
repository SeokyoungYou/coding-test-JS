// Map: 중복 숫자를 key, 횟수를 value에 저장
function secondSolution(arr) {
  let result = [];
  let map = new Map();
  arr.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1); //이미 있으면 value 올리기
    } else {
      map.set(element, 1); //없으면 value 1로 저장
    }
  });
  map.forEach((value) => {
    if (value > 1) {
      result.push(value);
    }
  });
  if (result.length === 0) result.push(-1);
  return result;
}

// Set: 중복 안되게 저장, count 따로 세기
function countOf(arr, value) {
  let count = 0;
  arr.forEach((element) => {
    if (element === value) count++;
  });
  return count;
}
function firstSolution(arr) {
  let result = [];
  let set = new Set([]); // 왜 set 안에 array 넣는거지?
  arr.forEach((element) => {
    if (set.has(element)) return; //가지고 있으면 다음 element로 넘어감
    set.add(element); //없으면 set에 추가
    count = countOf(arr, element); // 중복 count는 여기에서 한 번에 셈
    if (count > 1) result.push(count);
  });
  if (result.length === 0) result.push(-1);
  return result;
}
// My solution
function solution(arr) {
  let result = [];
  for (const num = 1; num <= 100; num++) {
    let repeat = 0;
    for (const element in arr) {
      if (num === element) {
        repeat++;
      }
    }

    if (repeat >= 2) {
      result.push(repeat);
    }
  }
  if (result.length === 0) {
    result.push(-1);
  }
  return result;
}
// Set, Mao 다시 공부

함수(){
    함수(){
        return
    }
    return
}
