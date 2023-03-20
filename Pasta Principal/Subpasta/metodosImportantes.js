const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// massa quebrou o carro!
pilotos.pop()
console.log(pilotos)

// adiciona na última [3] posição
pilotos.push('Verstappen')
console.log(pilotos)

// remove o primeiro [0]
pilotos.shift()
console.log(pilotos)

// adiciona na primeira [0] posição
pilotos.unshift('Hamilton')
console.log(pilotos)


// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

// pega um pedaço do array
const algunsPilotos1 = pilotos.slice(2) // gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)