document.getElementById("create-room-btn").addEventListener("click", () => {
  const roomId = generateRoomId();
  document.getElementById("room-id").innerText = roomId;

  document.getElementById("mode-selection").classList.add("hidden");
  document.getElementById("create-room").classList.remove("hidden");
});

document.getElementById("join-room-btn").addEventListener("click", () => {
  document.getElementById("mode-selection").classList.add("hidden");
  document.getElementById("join-room").classList.remove("hidden");
});

document.getElementById("start-game-btn").addEventListener("click", () => {
  const enteredId = document.getElementById("join-room-id").value.trim();
  if (enteredId === "") {
    alert("Please enter a Room ID.");
    return;
  }

  // Redirect to multiplayer quiz page with room ID
  window.location.href = "multiplayer-quiz.html?room=" + enteredId;
});

document.getElementById("start-game-creator").addEventListener("click", () => {
  const roomId = document.getElementById("room-id").innerText;

  // Redirect to multiplayer quiz page with room ID
  window.location.href = "multiplayer-quiz.html?room=" + roomId;
});

function generateRoomId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
