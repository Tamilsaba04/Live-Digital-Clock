function updateClock() {
  const now = new Date();

  // Format time
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${mins}:${secs}`;
  const timeEl = document.getElementById('time');

  // Add tick animation
  timeEl.textContent = timeString;
  timeEl.style.transform = 'scale(1.05)';
  setTimeout(() => (timeEl.style.transform = 'scale(1)'), 100);

  // Format date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('light');
}

// Init
updateClock();
setInterval(updateClock, 1000);
