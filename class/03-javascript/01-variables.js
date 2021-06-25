document.write(1+1)

console.log("안녕하세요")

let 상자 = "철수"
console.log(상자)

// let 상자 = "영희" => 에러
상자 = "영희"
console.log(상자)


const bbb = 8    // "8"과 다름
console.log(bbb)


// bbb = 5                =>에러
// console.log(bbb)  //상수는 변경이 불가능하다

const myMoney = 2000
console.log(myMoney)

const classmates = ["철수", "영희", "훈이"]
// undefined
classmates[0]
// "철수"
classmates[1]
// "영희"
const email = "codecamp@gmail.com"
// undefined
email.length
// 18
email[0]
// "c"
email[1]
// "o"
email.includes("@")
// true
email.split("@")
// (2) ["codecamp", "gmail.com"]
email.split("@")[0]
// "codecamp"
email.split("@")[1]
// "gmail.com"
const front = email.split("@")[0]
// undefined
const back = email.split("@")[1]
// undefined
front
// "codecamp"
back
// "gmail.com"
const newFront = []
// undefined
newFront.push(front[0])
// 1
newFront
// ["c"]
newFront.push(front[1])
// 2
newFront.push(front[2])
// 3
newFront.push(front[3])
// 4
newFront
// (4) ["c", "o", "d", "e"]
newFront.push("*")
// 5
newFront.push("*")
// 6
newFront.push("*")
// 7
newFront.push("*")
// 8
newFront
// (8) ["c", "o", "d", "e", "*", "*", "*", "*"]
newFront.join("")
// "code****"
2+2
// 4
2+2
// 4
"철수" + "영희"
// "철수영희"
newFront.join("") + "@" + back
// "code****@gmail.com"
const result = newFront.join("") + "@" + back
// undefined
result
// "code****@gmail.com"
result
// "code****@gmail.com"