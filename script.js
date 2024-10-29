function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'block';
  }
  
  // Simula o carregamento da tela inicial
  window.onload = () => {
    setTimeout(() => {
      showScreen('login-screen');
    }, 2000); // 2 segundos de carregamento
  };
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showScreen('main-screen');
  });
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showScreen('main-screen');
  });
  
  