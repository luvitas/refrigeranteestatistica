function calculate() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(',').map(Number).filter(n => !isNaN(n));

    // Verificação se os números foram inseridos corretamente
    if (numbers.length === 0) {
        alert("Por favor, insira uma lista válida de números.");
        return;
    }

    // Função para calcular a média
    const mean = (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2);

    // Função para calcular a mediana
    numbers.sort((a, b) => a - b);
    const middle = Math.floor(numbers.length / 2);
    const median = (numbers.length % 2 !== 0) ? numbers[middle] : ((numbers[middle - 1] + numbers[middle]) / 2).toFixed(2);

    // Função para calcular a moda
    const frequency = {};
    let maxFreq = 0;
    let mode = [];

    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = [num];
        } else if (frequency[num] === maxFreq) {
            mode.push(num);
        }
    });

    mode = mode.length === numbers.length ? 'Sem moda' : mode.join(", ");

    // Exibir os resultados
    document.getElementById("mean").innerHTML = "Média: " + mean;
    document.getElementById("median").innerHTML = "Mediana: " + median;
    document.getElementById("mode").innerHTML = "Moda: " + mode;

    // Mostrar a caixa de resultado com animação
    const resultContainer = document.getElementById("result-container");
    resultContainer.classList.add('show');
}
