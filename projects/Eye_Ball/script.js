const container = document.querySelector('.ufo');
const eyeball = document.querySelector('.eyes');

function moveEyeball(e) {
  const x_cursor = e.pageX;
  const y_cursor = e.pageY;
  const rect = eyeball.getBoundingClientRect();
  const x_eyeball = rect.left + (rect.width / 2);
  const y_eyeball = rect.top + (rect.height / 2);
  const angle = -Math.atan2(x_cursor - x_eyeball, y_cursor - y_eyeball) * (180 / Math.PI) - 180;
  
  eyeball.style.transform = `rotate(${angle}deg)`;
}

container.addEventListener('mousemove', moveEyeball);

