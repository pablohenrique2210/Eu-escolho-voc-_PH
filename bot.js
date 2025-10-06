    const submissions = [
    { sub: "Kimura", imagem: "assets/kimura.jpeg" },
    { sub: "Armlock", imagem: "assets/armlock.jpeg" },
    { sub: "Triângulo", imagem: "assets/triangulo.webp" },
    { sub: "Americana de Pé", imagem: "assets/americanadepe.webp" },
    { sub: "Estrangulamento", imagem: "assets/estrangulamento.jpeg" },
    { sub: "Guilhotina", imagem: "assets/guilhotina.webp" },
    { sub: "Omoplata", imagem: "assets/omoplata.webp" },
    { sub: "Mão de Vaca", imagem: "https://cdn.shopify.com/s/files/1/2776/7470/files/Nikyo-1_large.jpg?v=1551488762" },
    { sub: "LegLock", imagem: "https://bjjfanatics.com.br/cdn/shop/articles/EC7912A5-D155-4E1E-B391-4185388149C8_1024x1024.jpeg?v=1557075604" },
    { sub: "Mata Leão", imagem: "data:image/jpeg;base64,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" },
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











