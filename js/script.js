const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);

function girar(){
    let rand = Math.random()*10200;
calcular(rand);

function calcular(rand){
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0]))*360;
    console.log(valor);
    ruleta.style.transform="rotate("+rand+"deg)";

    setTimeout(() =>{
        switch(true){
            case valor > 0 && valor <= 60:
                alert("te has ganado: BONO DE $20.000")
            break; 
            case valor > 60 && valor <= 120:
                alert("te has ganado: BONO DE $30.000")
            break; 
            case valor > 120 && valor <= 180:
                alert("te has ganado: BONO DE $10.000")
            break; 
            case valor > 180 && valor <= 240:
                alert("te has ganado: BONO DE $20.000")
            break; 
            case valor > 240 && valor <= 300:
                alert("te has ganado: PREMIO SORPRESA")
            break; 
            case valor > 300 && valor <= 360:
                alert("te has ganado: BONO DE $10.000")
            break; 
        }
    },5000)
   
}

}

