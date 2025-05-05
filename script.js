script.js

function addNote() {
  const input = document.getElementById('noteInput');
  const notesList = document.getElementById('notesList');

  const note = input.value.trim();
  if (note === "") return;

  const li = document.createElement('li');
  li.textContent = note;
  notesList.appendChild(li);

  input.value = "";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
