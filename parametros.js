// parametros de função

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parametro x argumentos

// ordem dos parametros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("daniel", 23));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));