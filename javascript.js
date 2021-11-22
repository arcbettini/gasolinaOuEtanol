// CRIADA VARIAVEL DE BOTÃO

const check = document.getElementById('buttonCalc')
const resultA = 'GASOLINA'
const resultB = 'ETANOL'

//ATRIBUIR A FUNÇAO DE CÁLCULO
/*as variáveis de elementos são incluidas na função para evitar
  que elas sejam consideradas "globais"*/
function calc() {
  const etanolPrice = document.getElementById('etanolPrice').value
  const gasolinePrice = document.getElementById('gasolinePrice').value
  const result = document.getElementById('resultCalc')

  if (etanolPrice !== '' && gasolinePrice !== '') {
    const fuelIndex = etanolPrice / gasolinePrice
    if (fuelIndex >= '0.7') {
      result.textContent = 'GASOLINA'
    } else {
      result.textContent = 'ETANOL'
    }
  } else {
    alert('Informe o valor do ETANOL e da GASOLINA')
  }
}

check.addEventListener('click', calc)
