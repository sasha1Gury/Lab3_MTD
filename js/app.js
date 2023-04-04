'use strict';
let a = [], flag = true;
//let n = prompt("interval");
let n = 10;
n = Number(n)
for(let i = 2; i<=n; i++){
	flag = true;
	for(let j = 2; j<i; j++){
		console.log(i, j)
		if(i%j == 0) {
			flag = false
			break;
		}
	}  if (flag) a.push(i)
}

console.log(a);
