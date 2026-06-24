// Variável para controlar o tamanho do texto
let tamanhoAtualFonte = 18;

// Função para calcular a economia de água
function calcularEconomia() {
    // Pega o valor digitado pelo usuário
    let metrosQuadrados = document.getElementById("tamanhoHorta").value;
    let caixaResultado = document.getElementById("resultado");

    // Validação simples: se o usuário não digitar nada ou número negativo
    if (metrosQuadrados <= 0 || metrosQuadrados === "") {
        caixaResultado.style.display = "block";
        caixaResultado.innerHTML = "<strong>Por favor, digite um tamanho de área válido!</strong>";
        return;
    }

    // Conta matemática simples baseada em dados fictícios de economia rural
    // Exemplo: O gotejamento economiza em média 30 litros de água por metro quadrado por dia
    let aguaEconomizadaPorDia = metrosQuadrados * 30;
    let aguaEconomizadaPorMes = aguaEconomizadaPorDia * 30;

    // Faz a caixa de resultado aparecer e insere o texto nela
    caixaResultado.style.display = "block";
    caixaResultado.innerHTML = `
        <h3>Impacto Ecológico Estimado:</h3>
        <p>Ao mudar para o gotejamento sustentável, você deixará de desperdiçar:</p>
        <p>💧 <strong>${aguaEconomizadaPorDia} litros</strong> de água por dia.</p>
        <p>🚜 <strong>${aguaEconomizadaPorMes} litros</strong> de água por mês!</p>
        <p><em>Isso garante uma produção forte sem esgotar o nosso meio ambiente.</em></p>
    `;
}

// FUNÇÕES DE ACESSIBILIDADE

// 1. Alternar Alto Contraste (muda as cores da tela)
function mudarContraste() {
    // Adiciona ou remove a classe 'alto-contraste' no body
    document.body.classList.toggle("alto-contraste");
}

// 2. Aumentar o tamanho da letra
function aumentarFonte() {
    if (tamanhoAtualFonte < 30) { // Limite máximo para não quebrar o layout
        tamanhoAtualFonte = tamanhoAtualFonte + 2;
        document.body.style.fontSize = tamanhoAtualFonte + "px";
    }
}

// 3. Voltar a letra ao tamanho normal
function resetarFonte() {
    tamanhoAtualFonte = 18;
    document.body.style.fontSize = tamanhoAtualFonte + "px";
}