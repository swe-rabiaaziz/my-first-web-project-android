const btn = document.getElementById('actionBtn');
const output = document.getElementById('output');
let count = 0;

btn.addEventListener('click', () => {
  count++;
  output.textContent = `Button clicked ${count} time${count === 1 ? '' : 's'}!`;
});