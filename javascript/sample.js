'use strict';

let num = 10;

// インクリメント
num++;
console.log(num);

// デクリメント
num--;
console.log(num);

/* インクリメントは前置か後置かで結果の値が変わる
++num;
console.log(num);

--num;
console.log(num);
*/

// 後置演算子を使うことが一般的
// 前置と後置の違い
let num1 = 20;
// インクリメントしてから代入
let num2 = 20;
// 代入してからインクリメント
let ans1 = ++num1;
let ans2 = num2++;

console.log(ans1);
console.log(ans2);

// 条件分岐 if
const p = 200;

if (p >= 100) {
  console.log('100以上の値です');
} else {
  console.log('100未満の値です');
}

// 比較演算子
let haha = 100;
let hahaha = '100';

if(haha === hahaha) {
  console.log('同じ');
} else {
  console.log('同じではない');
}

// 条件分岐　switch
const mama = 1;

switch(mama) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  default:
    console.log('other');
    break;
}

// 入場料を計算
// テストは境界値を使用すると良い
const age = 5;

if (age >= 12) {
  console.log('5,000yen');
} else if( age >= 6) {
  console.log('2,500yen');
} else {
  console.log('1,000yen');
}



console.log('I\'m Yuta Nakamura.')
console.log("I'm Yuta Nakamura.")

console.log('\¥ \t aaa \n bbb')

let x;
x = 1;
console.log(x);

x = 2;
console.log(x);


// let x;
let y = 10;
console.log(y);

y = 11;
console.log(y);

let str = "Hello Javascript";
console.log(str);

let i, j, k;

const a = 1;
console.log(a);
// a = 2 ;

const prefecture = 'Tokyo';

// for
/*for				
	for(初期化式；　ループ継続条件式；　増減式）{			
		繰り返し実行したい処理を記述		
	}			*/

for(let o = 101; o <= 103; o++){
 console.log(o);
}

/* while(条件式) {
  条件式がtrueの時に実行したい処理
  }  */

let v = 1;
while(v <= 3) {
  console.log(v);
  v++;
}
// 1,2,3

let r = 5;
do {
  console.log(r);
  r++;
} while (r <= 8);
//  5,6,7,8

// １〜１００の整数値がある
// 合計値を計算してコンソールに出力する
let sum = 0;
for(let c = 1; c <= 100; c++){
  sum = sum + c;
}
console.log(sum);

const colors = ['Red', 'Green', 'Blue'];
// console.log(colors.length);
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 連想配列
const user = {name: 'Olivia', gender: 'woman', birth: '1990/1/1'};
console.log(user.name);
console.log(user.gender);
console.log(user.birth);


// テストの点数の集計
let scores = [100, 90, 80, 70, 60];
let sum1 = 0;

for(let q = 0; q < scores.length; q++) {
  sum1 += scores[q];
}
console.log(sum1);
console.log(sum1 / scores.length);
// または
const average = sum1 / scores.length;
console.log(average);


/*===================================
function関数

function 関数名(引数１,引数２,...){
  任意の処理
  return 戻り値
}
*/
console.log('function関数');

function getSquare( height, width ) {
  return height * width;
}

console.log(getSquare(3,5));


/* 関数リテラル（無名関数・匿名関数）名前を持たない
const 定数名 = function(引数１,　引数２,...) {
  任意の処理
  return 戻り値
}
console.log(定数名)
*/

const getSquare =  function(height, width) {
  return height * width;
}

console.log(getSquare(3,5));

/* アロー関数（関数リテラルの省略記法）　これが推奨　
const 定数　= (引数1, 引数２,...) => {
  実行する処理
  return 戻り値
} */

const getSquare = (height, width) => {
  return height * width;
}
console.log(getSquare(3,5));


// コンストラクター
const getSquare 
  = new Function('height', 'width', 'return height * width');
console.log(getSquare(3, 5));



// 1個100円のリンゴ13個を購入
// 合計金額を返す


function price(unitPrice, n) {
  return unitPrice * n;
  }
  console.log(price(100,13));

  const price = (unitPrice, n) => {
    return unitPrice * n;
  }
  console.log(price(100,130));

  // DOM idで取得

  // <p id="result">Javascriptの練習</p>
  // <input id="button" type="button" value="Get!"></input>

  const e = document.getElementById("button");
  e.addEventListener('click', () => {
    // console.log("Clicked!");
    const result = document.getElementById('result');
    console.log(result.innerText);
}, false);

