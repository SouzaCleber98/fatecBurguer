const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;
const storageKey = 'darkMode';

if (localStorage.getItem(storageKey) === 'enabled') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  const enabled = body.classList.toggle('dark-mode');
  localStorage.setItem(storageKey, enabled ? 'enabled' : 'disabled');
});
