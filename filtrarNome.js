const nomes = ["Ana", "Joana", "Carlos", "amanda", 'Arislene'];

const nomesEncontradosComAa = []

for (const nomeComAOua of nomes) {
    if (nomeComAOua[0][0] === "A" || nomeComAOua[0][0] === 'a') {
        nomesEncontradosComAa.push(nomeComAOua)
    }
}

console.log(nomesEncontradosComAa);