// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  
  if (next === 'light') {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', next);
  }
  
  localStorage.setItem('theme', next);
});