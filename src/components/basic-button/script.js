
const themeToggleButton = document.getElementById('theme-toggle');
      
// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// Event listener to toggle theme

themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // Toggle between 'dark' and 'light' themes
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Save the preference in localStorage
  localStorage.setItem('theme', newTheme);
});
