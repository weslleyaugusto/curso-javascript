var num = [2,4,6,8]
num.push(10)
/*
for(var pos = 0 ; pos < num.length; pos++){
    console.log(`O índice ${pos} contém o valor ${num[pos]}`)
}*/
for(let pos in num){
    //console.log(num[pos])
    console.log(num[pos])
}