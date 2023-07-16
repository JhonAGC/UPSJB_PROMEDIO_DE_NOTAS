

// notas:

const notas={
    n1:"",
    n2:"",
    n3:"",
    n4:"",
    parcial01:"",
    parcial02:""
}




const Resultado = document.querySelector("#res");
const campoResultado = document.querySelectorAll("input");
const formulario = document.querySelector(".contenedor__form")
const input = document.querySelectorAll(".campo__field");


campoResultado[0].addEventListener("input",validar);
campoResultado[1].addEventListener("input",validar);
campoResultado[2].addEventListener("input",validar);
campoResultado[3].addEventListener("input",validar);
campoResultado[4].addEventListener("input",validar);
campoResultado[5].addEventListener("input",validar);
formulario.addEventListener("submit",calculo)



//funcion pricipal:

function calculo(evento){
    evento.preventDefault();

    const {n1,n2,n3,n4,parcial01,parcial02} = notas


    if (n1 == ""||n2==""|| n3==""|| n4==""|| parcial01==""|| parcial02=="") {
        
        mostrarAlerta(" TODO LOS CAMPOS SON OBLIGATIORIOS", "error");
    }else if (calcular() > 20) {
        mostrarAlerta(" NOTA NO VALIDA ", "error");
    } else if (calcular() >= 10.60){
        Resultado.textContent = ` ✅ Nota Aprobatoria:  ${calcular().toFixed(1)}`;
    }else{

        Resultado.textContent = ` ❌ Nota No Aprobatoria:  ${calcular().toFixed(1)}`;
    }      
    
}



// funcion validar

function validar(e){

    notas[e.target.id]=e.target.value
    

}

//funcion calcular nota
function calcular (){
    return (parseFloat(n1.value * 0.75)+
    parseFloat(n2.value * 0.75)+
    parseFloat(n3.value * 0.75)+
    parseFloat(n4.value * 0.75)+
    parseFloat(parcial01.value)+
    parseFloat(parcial02.value))/5
    
}

//funcion alerta
function mostrarAlerta(mensaje, error = null ){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje; 

    if (error) {
        alerta.classList.add("error")
    }else{
        alerta.classList.add("correcto");
    }
    formulario.appendChild(alerta)
    
    setTimeout(() => {
        alerta.remove();
    }, 2000);
}



