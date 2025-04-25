// Gráfico de Pontuação
const ctxPontuacao = document.getElementById('chartPontuacao').getContext('2d');
new Chart(ctxPontuacao, {
  type: 'bar',
  data: {
    labels: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4'],
    datasets: [{
      label: 'Pontuação',
      data: [3, 5, 4, 6],
      backgroundColor: 'rgba(108, 92, 231, 0.7)',
      borderColor: 'rgba(108, 92, 231, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Seu Progresso'
      }
    }
  }
});

// Gráfico de Temas
const ctxTemas = document.getElementById('chartTemas').getContext('2d');
new Chart(ctxTemas, {
  type: 'doughnut',
  data: {
    labels: ['Planetas', 'Estrelas', 'Naves', 'Aliens'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: [
        '#6c5ce7',
        '#00cec9',
        '#fd79a8',
        '#fdcb6e'
      ],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Acertos por Tema'
      }
    }
  }
});