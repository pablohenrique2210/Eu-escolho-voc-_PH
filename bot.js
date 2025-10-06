// Array com as finalizações e suas respectivas imagens
const submissions = [
    { sub: "Kimura", imagem: "./assets/kimura.jpeg" },
    { sub: "Armlock", imagem: "./assets/armlock.jpeg" },
    { sub: "Triângulo", imagem: "./assets/triangulo.webp" },
    { sub: "Americana de Pé", imagem: "./assets/americanadepe.webp" },
    { sub: "Estrangulamento", imagem: "./assets/estrangulamento.jpeg" },
    { sub: "Guilhotina", imagem: "./assets/guilhotina.webp" },
    { sub: "LegLock", imagem: "./assets/leg lock.webp" },
    { sub: "Mão de Vaca", imagem: "./assets/mao de vaca.webp" },
    { sub: "Mata Leão", imagem: "./assets/mata leao.jpeg" },
    { sub: "Omoplata", imagem: "./assets/omoplata.webp" },

];


const botao = document.getElementById("botao");
const resultadoElemento = document.getElementById("resultado");
const imagemElemento = document.getElementById("dadoImagem");


function sortearFinalizacao() {
    const tempoGiro = 100; // Tempo em milissegundos (ms) entre cada troca de imagem.
    const duracaoTotal = 2000; // Duração total da animação em ms (2 segundos).
    const inicio = Date.now(); // Marca o tempo exato em que a função começou.

    // Inicia um intervalo que executará o código a cada `tempoGiro` (100ms).
    const intervalo = setInterval(() => {
        // A cada execução, sorteia um índice aleatório do nosso array.
        const indiceAleatorio = Math.floor(Math.random() * submissions.length);
        
        // Atualiza a imagem na tela para criar o efeito de giro.
        if (imagemElemento) {
            imagemElemento.src = submissions[indiceAleatorio].imagem;
            imagemElemento.style.display = "block"; // Garante que a imagem esteja visível.
        }

        // Verifica se o tempo total da animação já passou.
        if (Date.now() - inicio >= duracaoTotal) {
            // Se o tempo acabou, para de executar o intervalo.
            clearInterval(intervalo);

            // Agora, sorteia o resultado FINAL.
            const indiceFinal = Math.floor(Math.random() * submissions.length);
            const finalizacaoSorteada = submissions[indiceFinal];

            // Atualiza o texto do resultado com o nome da finalização sorteada.
            if (resultadoElemento) {
                // Usamos a propriedade "sub", que é a correta do nosso objeto.
                resultadoElemento.textContent = `A Sua Finalização favorita é: ${finalizacaoSorteada.sub}`;
            }

            // Atualiza a imagem para mostrar a imagem da finalização sorteada.
            if (imagemElemento) {
                imagemElemento.src = finalizacaoSorteada.imagem;
            }
        }
    }, tempoGiro);
}

// 3. ADICIONANDO O EVENTO AO BOTÃO
// Verificamos se o botão realmente existe na página para evitar erros.
if (botao) {
    // Adicionamos um "ouvinte de eventos" que espera por um clique no botão.
    // Quando o clique acontece, ele chama a nossa função `sortearFinalizacao`.
    botao.addEventListener("click", sortearFinalizacao);
} else {
    // Se o botão não for encontrado, um aviso é exibido no console do navegador.
    console.warn('Elemento com id="botao" não foi encontrado. O script não funcionará como esperado.');
}