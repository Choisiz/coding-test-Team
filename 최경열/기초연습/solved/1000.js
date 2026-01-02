const fs =require('fs')
//버퍼를 반환하므로 문자열이 아니여서 .toString()으로 문자열반환
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
let a = Number(input[0])
let b =Number(input[1])
console.log(a+b)