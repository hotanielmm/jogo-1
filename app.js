alert("boas vindas ao jogo do numero secreto");
let numeroMaximo = 15;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let tentativas = 1;
let chute;



while (chute != numeroSecreto) {
    chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);

    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;

    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto e menor que ${chute} `);
        } else {
            alert(`o numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }

}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`isso ai! vc descobriu o numero secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`);
// if (tentativas > 1){
//  alert(`isso ai! vc descobriu o numero secreto ${numeroSecreto}, com ${tentativas} tentativas.`);

//} else{
// alert(`isso ai! vc descobriu o numero secreto ${numeroSecreto}, com ${tentativas} tentativa.`);

//}