let saldoVitorias = calcularSaldoRankeadas(110, 9);
let nivel = classificarNivelHeroi(saldoVitorias);

console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`);

function calcularSaldoRankeadas(vitorias, derrotas) {
	saldo = vitorias - derrotas;
	return saldo;
}

function classificarNivelHeroi(vitorias) {
	let nivelHeroi;

	switch (true) {
		case (vitorias <= 10):
			nivelHeroi = "Ferro";
			break;

        case (vitorias > 10 && vitorias <= 20):
            nivelHeroi = "Bronze";
            break;

        case (vitorias > 20 && vitorias <= 50):
            nivelHeroi = "Prata";
            break;

        case (vitorias > 50 && vitorias <= 80):
            nivelHeroi = "Ouro";
            break;

        case (vitorias > 80 && vitorias <= 90):
            nivelHeroi = "Diamante";
            break;

        case (vitorias > 90 && vitorias <= 100):
            nivelHeroi = "Lendário";
            break;

        case (vitorias > 100):
            nivelHeroi = "Imortal";
            break;

		default:
            nivelHeroi = "Iniciante";
			break;
	}

	return nivelHeroi;
}