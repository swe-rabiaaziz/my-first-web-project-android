const contactBtn = document.getElementById('contactBtn');
const contactToast = document.getElementById('contactToast');

contactBtn.addEventListener('click', () => {
  contactToast.classList.toggle('hidden');
  console.log('Contact button toggled');
});