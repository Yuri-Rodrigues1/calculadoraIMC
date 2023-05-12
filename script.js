function calcular(){
    var altura = document.getElementById('altura').value/100;
    var peso = document.getElementById('peso').value;
    
    var imc = peso/altura**2;
    if(imc<18.5){
        window.alert('Você está muito magro')
    }else if(imc<24.9){
        window.alert('Peso ideal!')
    }else if(imc<29.9){
        window.alert('Você está com sobrepeso')
    }else if(imc<39.9){
        window.alert('Você está com obesidade')
    }
}