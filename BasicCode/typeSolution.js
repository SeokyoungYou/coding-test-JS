//Stack(LIFO):바구니 === array
const stack = []; // array로 표현
stack.push(1); //[1]
stack.pop(); //3(제거된 요소 반환)


//Queue(FIFO):터널 ->  array로 클래스 구현
class Queue{
  constructor(){
    this.queue = []; //빈 array로 시작
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value){ // 맨뒤 삽입(rear++)
    this.queue[this.rear++] = value;
  } 
  dequeue(){ // 맨앞 제거)front++)
    const delValue = this.queue.[this.front]; //제거할 요소
    delete this.queue[this.front];
    this.front +=1; // array에서 점점 뒤로 이동함
    return delValue ; //제거된 요소 반환
  }
  peek(){ // 맨앞
    return this.queue[this.front];
  }
  size(){
    return this.rear - this.front;
  }
}
const queue = new Queue();


//Hash Table:사물함 === JS Object
const table = {};
table["key1"] =100;
console.log(table["key1"]); //100
delete table["key1"];
//Hash Table a) key에 obj 넣어야 할 때 -> Map 사용
const table = new Map();
table.set("key1",100);
const keyobj = {a:1}; // Warging: 이건 안먹고 미리 빈 {} 만들어서 넣는건 됨
table.set(keyobj, "A1");
table.delete(keyobj);
table.get("key1"); //100
table.keys();
table.values();
table.size;
table.clear();
//Hash Table b)중복 허용하지 않을 때 -> Set 사용(key, value 동일한 값 들어감)
const table = new Set();
table.add("key1");
table.has("key1"); //true
table.delete("key1");
table.size;
table.clear();


//Heap: 우선순위 큐 이진트리 형태 -> 직접 클래스 구현
class MaxHeap{
  constructor(){
    this.heap = [null]; // null array
  }
  push(value){ //
    this.heap.push(value); // 1. value가 가장 하위 node에 추가
    let currentIndex = this.heap.length -1; 
    let parentIndex = Math.floor(currentIndex /2);  

    // 부모모다 우선순위가 높은 경우 while문 실행
    while(parentIndex != 0 && this.heap[parentIndex]<value){
      const temp = this.heap[parentIndex];
      //부모와 값 바꾸기
      this.heap[parentIndex]=value;
      this.heap[currentIndex]= temp;
      //나->부모. 부모->상위부모: 상위(/2)이동
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex/2);
    }
  }
  pop(){// Root node만 제거 가능 
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop(); // Root node 제거

    let currentIndex=1;
    let leftIndex =2;
    let rightIndex =3;

    //제거 후 재정렬 알고리즘
    while(
      this.heap[currentIndex] <this.heap[leftIndex] ||
      this.heap[currentIndex] <this.heap[rightIndex]
    ){
      if(this.heap[leftIndex]<this.heap[rightIndex]){
        // 나와 자식의 값 바꾸고
        const temp = this.heap[currentIndex];
        this.heap[currentIndex]= this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        // 나->자식: 하위 이동
        currentIndex = rightIndex;
      }else{
        const temp = this.heap[currentIndex];
        this.heap[currentIndex]= this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      //자식->하위자식: 하위(*2)로 이동
      leftIndex = currentIndex*2;
      rightIndex = currentIndex*2+1;
    }
    return returnValue;
  }
}
const heap = new MaxHeap();
heap.push(23); //[null, 23]


//Trie: 문자열 저장하는 트리 ->직접 Node, Trie class 구현
class Node{
  constructor(value=""){
    this.value = value;
    this.children = new Map();
  }
}
class Trie{
  constructor(){
    this.root = new Node();
  }
  insert(string){
    let currentNode = this.root;
    //문자열의 각각 문자에 대해서
    for (const char of string){
    // 없다면 새로운 노드(현재+char) 만들기
      if(currentNode.children.has(char)){
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
    }
    //있다면 char 가져와서 현재 노드에 저장
    currentNode = currentNode.children.get(char);

  }
  has(string){ //insert에 true/false만 추가
    let currentNode = this.root;
    //문자열의 각각 문자에 대해서
    for (const char of string){
      // 없다면 새로운 노드(현재+char) 만들기
        if(currentNode.children.has(char)){
          return false; 
        }
      //있다면 char 가져와서 현재 노드에 저장
        currentNode = currentNode.children.get(char);
      }
      return true;
  }
}
const trie = new Trie();

//선형탐색:순서대로 하나씩
//아잔탐색 Binary Search: 절반 제외하기 -> array 사용이 편함
function binarySearch(array,findValue){
  let left =;
  let right = array.length-1; // index는 크기보다 1 작으니깐
  let mid = Math.floor((left+right)/2);
  while(left<right){
    if(array[mid]===findValue){
      return mid;
    }
    if(array[mid]<findValue){
      left= mid+1;
    } else{
      right=mid-1;
    }
    mid = Math.floor((left+right)/2);
  }
  return -1;
  
}

// 정렬 Sorting: 일정한 순서대로 나열
array.sort(); //ASCII 문자순서 정렬. 숫자크기정렬 X
array.sort((a,b)=>a-b); //오름차순 1,2,3,4,5
array.sort((a,b)=>b-a); //내림차순 



