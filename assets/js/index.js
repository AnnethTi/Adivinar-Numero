let indexLeft = 1;
let indexRigth = 100;
let indexMedium = parseInt((indexLeft+indexRigth)/2);
let congrats = document.getElementById('congrats')

const showNumber = ( number ) => {
    const showNumber = document.getElementById('showNumber')
    showNumber.innerHTML = `${number}`
}

const findNumber = () =>{
    while ( !isYourNumber(indexMedium) ){
        if( isYourNumberUnder(indexMedium) ){
            indexRigth = indexMedium - 1
        }else{
            indexLeft = indexMedium + 1
        }
        indexMedium = parseInt((indexLeft+indexRigth)/2);
    }
    congratsFnc(indexMedium)
}
const isYourNumber = (number) => {
    return confirm(`¿Tu número es ... ${number}?`)
    
}
const isYourNumberUnder = (number) => {
    return confirm(` ¿Tu número es menor a ... ${number}?`)
}

//showNumber(indexMedium)
const congratsFnc = ( number ) => {
    congrats.innerHTML = `Tu número es el ${number}, excelente decisión`

}

//findNumber()

