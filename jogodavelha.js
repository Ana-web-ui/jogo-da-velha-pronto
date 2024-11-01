const mesa = document.querySelector("#mesa");
const JOGADOR_BOLA = 'JOGADOR_BOLA'
const JOGADOR_XIS = 'JOGADOR_XIS'
let jogadorAtual = JOGADOR_BOLA
const x = '<div class="text-3xl text-blue-500">X</div>'
const o = '<div class="text-3xl text-red-500">O</div>'
let jogadas = array(9).fill(null)


//determinar o próximo jogador
function determinarProximoJocador(){
  const contagem = jogadas.reduce((acc, jogada) =>{
    if (jogada === JOGADOR_BOLA) acc.bola++;
    else if (jogada === JOGADOR_XIS) acc.xis++;
    return acc;
  }, {bola: 0, xis: 0});

  return contagem.bola <= contagem.xis ? JOGADOR_BOLA : JOGADOR_XIS;
}

//2: verificar quem é o jogador atual
function alternarJogador() {
  jogadorAtual = jogadorAtual === JOGADOR_BOLA ? JOGADOR_XIS : JOGADOR_BOLA;
}


  for (let combinacao of combinacoesVencedoras){
    const [a, b, c] = combinacao;
    if (jogadas [a] && jogadas[a] === jogadas[b] && jogadas[a] ===jogadas[c]){
      return jogadas[a];
    }
  }

mesa.addEventListener("click", (event) => {
  const quadrado = event.target;
  const index = Array.from(quadrados).indexOf(quadrado);
  //TO DO: 1:verificar se tem algo dentro do quadrado 
if (quadrado.innerHTML || jogadas[index]){
  return;
}
  
  //3: Se estiver vazio, adicione o/x e muda qual é o jogador atual
  quadrado.innerHTML = jogadorAtual === JOGADOR_BOLA ? o : x;
  jogadas[index] = jogadorAtual;
  //BONUS: identificar quando o jogo acabar e mostrar o vencedor 
  const vencedor = checarVencedor();
  if(vencedor){
 alert(`O vencedor é: ${vencedor === JOGADOR_BOLA ? "O" : "X"}`);
 jogador.fill(null);
 quadrado.forEach( q => q.innerHTML = "");
 jogadorAtual = JOGADOR_BOLA;
 return;

 
  }
alternarJogador();
});
