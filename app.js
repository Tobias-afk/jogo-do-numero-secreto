    let numeroMaximo = 100;
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    console.log(numeroSecreto);
    let chute;
    let tentativas = 1; 
        
    //Enquanto chute não for igual ao numeroSecreto
    while(chute != numeroSecreto){
        chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
        if(chute == numeroSecreto) {
            break;
        } else {
            if(chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);  
            }
            tentativas++; 
         }
    }
  let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa'
alert(`Parabens, voce acertou o numero secreto:\n${numeroSecreto} com ${tentativas} ${palavraTentativa}`);