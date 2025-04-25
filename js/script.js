document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const quizContainer = document.getElementById('quiz-container');
    const perguntaElement = document.getElementById('pergunta');
    const opcoesElement = document.getElementById('opcoes');
    const pontuacaoElement = document.getElementById('pontuacao');
    const progressoElement = document.getElementById('progresso');
    const iniciarQuizBtn = document.getElementById('iniciarQuiz');
    const foguete = document.getElementById('foguete');
    const easterEggBtn = document.getElementById('easterEgg');
  
    // Variáveis do Quiz
    let perguntas = [
      {
        pergunta: "Qual planeta é conhecido como 'Planeta Vermelho'?",
        opcoes: ["Vênus", "Marte", "Júpiter", "Saturno"],
        respostaCorreta: 1
      },
      {
        pergunta: "Qual é a maior lua de Saturno?",
        opcoes: ["Titã", "Europa", "Ganimedes", "Io"],
        respostaCorreta: 0
      },
      {
        pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
        opcoes: ["1969", "1975", "1982", "1958"],
        respostaCorreta: 0
      }
    ];
  
    let perguntaAtual = 0;
    let pontuacao = 0;
  
    // Função para fechar o quiz
    function fecharQuiz() {
      quizContainer.style.opacity = '0';
      setTimeout(() => {
        quizContainer.style.display = 'none';
      }, 300);
      perguntaAtual = 0;
      pontuacao = 0;
      foguete.classList.remove('decolando');
      foguete.style.opacity = '1';
    }
  
    // Evento de clique para iniciar o quiz
    iniciarQuizBtn.addEventListener('click', function() {
      // Animação do foguete
      foguete.style.opacity = '1';
      foguete.classList.add('decolando');
      
      // Inicia o quiz
      quizContainer.style.display = 'flex';
      setTimeout(() => {
        quizContainer.classList.add('active');
        carregarPergunta();
      }, 100);
    });
  
    // Carregar pergunta
    function carregarPergunta() {
      if (perguntaAtual >= perguntas.length) {
        finalizarQuiz();
        return;
      }
  
      const pergunta = perguntas[perguntaAtual];
      perguntaElement.textContent = pergunta.pergunta;
      opcoesElement.innerHTML = '';
  
      pergunta.opcoes.forEach(function(opcao, index) {
        const botao = document.createElement('button');
        botao.classList.add('opcao-btn');
        botao.textContent = opcao;
        botao.addEventListener('click', function() {
          selecionarResposta(index);
        });
        opcoesElement.appendChild(botao);
      });
  
      progressoElement.textContent = `Pergunta ${perguntaAtual + 1}/${perguntas.length}`;
    }
  
    // Verificar resposta
    function selecionarResposta(index) {
      const pergunta = perguntas[perguntaAtual];
      if (index === pergunta.respostaCorreta) {
        pontuacao++;
        pontuacaoElement.textContent = `Pontuação: ${pontuacao}`;
        alert("Resposta correta! 🎉");
      } else {
        alert(`Errado! A resposta correta é: ${pergunta.opcoes[pergunta.respostaCorreta]}`);
      }
  
      perguntaAtual++;
      if (perguntaAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarQuiz();
      }
    }
  
    // Finalizar quiz
    function finalizarQuiz() {
      quizContainer.innerHTML = `
        <div class="quiz-box">
          <button id="fecharQuiz" class="btn-fechar">✕</button>
          <h2>Quiz Concluído! 🚀</h2>
          <p>Sua pontuação final: ${pontuacao}/${perguntas.length}</p>
          <div class="quiz-actions">
            <button id="reiniciarQuiz" class="btn-neumorph">Jogar Novamente</button>
            <button id="sairQuiz" class="btn-neumorph btn-sair">Sair do Quiz</button>
          </div>
        </div>
      `;
      
      document.getElementById('reiniciarQuiz').addEventListener('click', function() {
        perguntaAtual = 0;
        pontuacao = 0;
        pontuacaoElement.textContent = `Pontuação: 0`;
        carregarPergunta();
      });
      
      document.getElementById('sairQuiz').addEventListener('click', fecharQuiz);
      document.getElementById('fecharQuiz').addEventListener('click', fecharQuiz);
    }
  
    // Easter Egg
    easterEggBtn.addEventListener('click', function() {
      const ufo = document.createElement('div');
      ufo.innerHTML = '🛸';
      ufo.style.position = 'fixed';
      ufo.style.fontSize = '50px';
      ufo.style.animation = 'fly 5s linear';
      document.body.appendChild(ufo);
      setTimeout(function() {
        ufo.remove();
      }, 5000);
    });
  
    // Fechar quiz ao clicar fora
    quizContainer.addEventListener('click', function(e) {
      if (e.target === quizContainer) {
        fecharQuiz();
      }
    });
  });