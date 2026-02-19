// Criar uma funcao que retorna uma promisse, e a ideia é simular o preparo do bolo
// Receber tempo de assamento
// Lógica que trata, se o tempo que foi passado é suficente pro bolo assar ou não
// Se sim, retorna a função do resolve -> informando que o bolo assou com sucesso
// Se não, retorna reject com bolo queimado ou cru
// finally, criatividade de voces.

function prepararBolo(tempoForno) {

    return new Promise((resolve, reject) => {

        console.log(' Preparando bolo...');

        const tempoMinimo = 3;
        const tempoMaximo = 5;

        setTimeout(() => {
            if (tempoForno >= tempoMinimo && tempoForno <= tempoMaximo) {
                resolve('O bolo ficou em perfeitas condições!');
            } 
            else if (tempoForno < tempoMinimo) {
                reject('O bolo ficou cru, recomendo assar conforme a receita.');
            } 
            else {
                reject('O bolo queimou, recomendo pegar um extintor!');
            }
        }, tempoForno * 1000);

    });
}

prepararBolo(2)

    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Bolo pronto.'));
