let calcularIMC=()=>{
    
let altura = parseFloat(document.getElementById("altura").value);
let peso = parseFloat(document.getElementById("peso").value);

altura = altura/100;

let M = peso / (altura * altura)
let classificacao = null

if(M <= 18.49){
    classificacao = 'Baixo peso';
}
else if(M >= 18.50 && M <= 24.99){
    classificacao = 'Peso normal';
}
else{
    classificacao = 'Sobrepeso';
}

alert(`Você possui índice de massa corporal igual a ${Math.round(M)}, sendo classificado como: ${classificacao}`);


document.getElementById("altura").value = '';
document.getElementById("peso").value = '';
}



let receberNoticias=()=>{

    let email1 = document.getElementById("email1").value
    let alerta = document.getElementById("receber-informacao");

    let info=null;
    if(email1 === ''){
    document.getElementById("email1").value = '';
    document.getElementById("cSaude").checked = false;
    document.getElementById("cAlim").checked = false;
    document.getElementById("cBeleza").checked = false;
    document.getElementById("cFit").checked = false;
    document.getElementById("cBem").checked = false;

        info =  "<div class='alert alert-danger alert-dismissible tamanho-resposta'><button class='close' type='button' data-dismiss='alert'>&times;</button><strong>Você precisar digitar um e-mail válido!</strong></div>";
        
    }
    else{
    document.getElementById("email1").value = '';
    document.getElementById("cSaude").checked = false;
    document.getElementById("cAlim").checked = false;
    document.getElementById("cBeleza").checked = false;
    document.getElementById("cFit").checked = false;
    document.getElementById("cBem").checked = false;

       info =  "<div class='alert alert-success alert-dismissible tamanho-resposta'><button class='close' type='button' data-dismiss='alert'>&times;</button><strong>Seu e-mail foi cadastrado com sucesso!</strong></div>";
    }
   
    alerta.innerHTML = info;


    // dormir(3000);
    // // // alerta.classList.remove("hidden");
    // // // alerta.innerHTML = info;
    // // setTimeout(alerta.innerHTML = info,2000);
}

// function esconderResposta(){
//     // var intervalo = setInterval( document.getElementById('receber-informacao').innerHTML='',2000);
//     // clearInterval(intervalo);
// }


let enviarFormulario=()=>{

    let usuario = document.getElementById("nomeUsuario").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(usuario === '' || email === '' || mensagem === ''){
        document.getElementById("nomeUsuario").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mensagem").value = '';        

        return document.getElementById("receber-formulario").innerHTML = 
        "<div class='alert alert-danger alert-dismissible tamanho-resposta'><button class='close' type='button' data-dismiss='alert'>&times;</button><strong>Preencha todos os campos obrigatórios!</strong></div>";
    }

    else{
        document.getElementById("nomeUsuario").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mensagem").value = '';   

        return document.getElementById("receber-formulario").innerHTML =
        "<div class='alert alert-success alert-dismissible tamanho-resposta'><button class='close' type='button' data-dismiss='alert'>&times;</button><strong>Agradecemos o seu contato!</strong></div>";
    }
}

/*
let esconderResposta = (findElement,removeClass)=>{
    let element =document.querySelector(findElement);
    element.classList.remove(removeClass);
}
*/
