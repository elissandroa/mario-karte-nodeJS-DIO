
const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};
const player2 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};
const player3 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};
const player4 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};
const player5 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};
const player6 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRamdomBlock() {
    let random = Math.random();
    let result
    switch (true) {
        case random < 0.33:
            result = 'RETA'
            break;
        case random < 0.66:
            result = 'CURVA'
            break;
        default:
            result = 'CONFRONTO'
            break;
    }

    return result;
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`)

        // Sortear bloco
        let block = await getRamdomBlock();
        console.log(`Bloco: ${block}`)
    }

    //Rolar os Dadosk
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    /* Teste de Habilidade */
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
}

(
    async function main() {
        console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player4.NOME} começando... '\n`);


        await playRaceEngine(player1, player4);

    })()



