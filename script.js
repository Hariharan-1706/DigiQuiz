// script.js
document.addEventListener('DOMContentLoaded', () => {
  const roomIdInput = document.getElementById('roomId');
  if (roomIdInput) {
    const id = 'ROOM-' + Math.floor(1000 + Math.random() * 9000);
    roomIdInput.value = id;
  }
});

