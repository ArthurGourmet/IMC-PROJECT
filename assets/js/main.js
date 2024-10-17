const form = document.querySelector('.formulario');
const peso=form.querySelector('.peso');
const Altura=form.querySelector('.altura');
const resultado = document.querySelector('.resultado');
const error = form.querySelector('.erro')

form.addEventListener('submit',(e)=>{

    e.preventDefault()
    limpa()
    imc()
})
function limpa(){
    error.innerHTML = " "
}
function erro(msg){
    error.innerHTML = " "
    error.innerText = `${msg}`

}
function calculo(pesoR,alturaR){
  return  pesoR / alturaR**2
}
function imc(){
    const pesoReal = Number(peso.value)
    const alturaReal = Number(Altura.value)
    const IMC =calculo(pesoReal,alturaReal).toFixed(1) ;
    isValid(pesoReal,alturaReal)
    result(IMC)
}
function isValid(pesoReal,alturaReal){
    if(pesoReal < 14 ){
        erro(`peso invalido`)
        return
    }
    if(alturaReal < 0.3){
        erro(`altura invalida`)
        return
    } 
}
function result(IMC){
    if(IMC < 18.5){
        coloca(`abaixo do peso`,1)
    }else if(IMC >= 18.5 && IMC <= 24.9){
        coloca(`peso normal`,2,IMC)

    }else if(IMC >= 25 && IMC <= 29.9){
        coloca(`sobrepeso`,3,IMC)

    }else if(IMC >= 30 && IMC <= 34.9){
        coloca(`grau de obesidade 1`,4,IMC)

    }else if(IMC >= 35 && IMC <= 39.9){
        coloca(`grau de obesidade 2`,4,IMC)

    }else if(IMC >40){
        coloca(`grau de obesidade 3`,4,IMC)

    }
}
function coloca(msg,n,IMC){
    resultado.innerHTML=' '
    resultado.innerText = `${msg}  imc (${IMC})`
    if(n ===1){
        
        resultado.classList.remove('orange')
        resultado.classList.add('red');

    }else if(n=== 2){
    
        resultado.classList.remove('orange')
        resultado.classList.remove('red')
        resultado.classList.add('green');
    }else if(n=== 3){
        resultado.classList.add('orange');
    }else{
        resultado.classList.remove('orange')
        resultado.classList.add('red');
    }
  
}