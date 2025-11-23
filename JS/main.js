function show(sectionId) {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
  window.scrollTo(0, 0);
}

// Show home page on load
window.onload = () => show('home');