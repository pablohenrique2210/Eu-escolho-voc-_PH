// Array com as finalizações e suas respectivas imagens
    const submissions = [
    { sub: "Kimura", imagem: "./Assets/kimura.jpeg" },
    { sub: "Armlock", imagem: "./Assets/armlock.jpeg" },
    { sub: "Triângulo", imagem: "./Assets/triangulo.webp" },
    { sub: "Americana de Pé", imagem: "./Assets/americanadepe.webp" },
    { sub: "Estrangulamento", imagem: "./Assets/estrangulamento.jpeg" },
    { sub: "Guilhotina", imagem: "./Assets/guilhotina.webp" },
    { sub: "LegLock", imagem: "./Assets/leglock.webp" },
    { sub: "Mão de Vaca", imagem: "./Assets/maodevaca.webp" },
    { sub: "Mata Leão", imagem: "./Assets/mataleao.jpeg" },
    { sub: "Omoplata", imagem: "./Assets/omoplata.webp" },
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








