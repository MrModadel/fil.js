
let arr = [1,2,false,"hello",24,'world',undefined,'error',22];
let arrNumder =  arr.filter(item => typeof item === "number");
console.log(arrNumder);

let arrNumL = arrNumder.length;
console.log(arrNumL);
if (arrNumL % 2 === 0 ){
   console.log("good");
} else {
   console.log("bad");
}