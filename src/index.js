let saldoVitorias = calcularSaldoRankeadas(110, 900);
let nivel = classificarNivelHeroi(saldoVitorias);

console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`);

function calcularSaldoRankeadas(vitorias, derrotas) {
	saldo = vitorias - derrotas;
	return saldo;
}

function classificarNivelHeroi(vitorias) {
	let nivelHeroi;

	if (vitorias <= 10) {
		nivelHeroi = "Ferro";

    } else if (vitorias > 10 && vitorias <= 20) {
        nivelHeroi = "Bronze";

    } else if (vitorias > 20 && vitorias <= 50) {
        nivelHeroi = "Prata";

    } else if (vitorias > 50 && vitorias <= 80) {
        nivelHeroi = "Ouro";
    
    } else if (vitorias > 80 && vitorias <= 90) {
        nivelHeroi = "Diamante";
    
    } else if (vitorias > 90 && vitorias <= 100) {
        nivelHeroi = "Lendário";
    
    } else {
        nivelHeroi = "Imortal";
    }

	return nivelHeroi;
}