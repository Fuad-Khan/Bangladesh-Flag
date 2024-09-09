const flag = document.getElementById('flag');

let isDragging = false;
let offsetX, offsetY;

flag.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - flag.offsetLeft;
  offsetY = e.clientY - flag.offsetTop;
  flag.style.cursor = 'grabbing';  // Change cursor while dragging
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  flag.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    // Get window dimensions and flag dimensions
    const flagWidth = flag.offsetWidth;
    const flagHeight = flag.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate the new position
    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    // Prevent flag from moving outside the left or right boundary
    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft + flagWidth > windowWidth) {
      newLeft = windowWidth - flagWidth;
    }

    // Prevent flag from moving outside the top or bottom boundary
    if (newTop < 0) {
      newTop = 0;
    } else if (newTop + flagHeight > windowHeight) {
      newTop = windowHeight - flagHeight;
    }

    // Set the new position
    flag.style.left = `${newLeft}px`;
    flag.style.top = `${newTop}px`;
  }
});
