var hora = new Date()
hora = hora.getHours()

console.log(hora)

if(hora < 5 && hora > 0) {
    console.log('Boa madrugada!')
}else if(hora < 12) {
    console.log('Bom dia!')
}else if(hora < 18) {
    console.log('Boa tarde!')
}else if(hora < 24) {
    console.log('Boa noite!')
}else {
    console.log('Hora invalida!')
}