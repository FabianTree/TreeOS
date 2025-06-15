document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const homeScreen = document.getElementById('homeScreen');
  const welcomeText = document.getElementById('welcomeText');

  // Hide loading screen after 2.5s
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    homeScreen.classList.remove('hidden');
    welcomeText.classList.add('fade-out');
  }, 2500);

  const buttons = document.querySelectorAll('.app-btn');
  const apps = document.querySelectorAll('.app');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const appId = button.getAttribute('data-app');
      apps.forEach(app => app.classList.add('hidden')); // Hide all
      const selectedApp = document.getElementById(appId);
      if (selectedApp) selectedApp.classList.remove('hidden');
    });
  });

  const closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const app = btn.closest('.app');
      app.classList.add('hidden');
    });
  });
});