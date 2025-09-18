let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    notesList.innerHTML += `
      <div class="note">
        <div class="note-text">${note}</div>
        <div class="actions">
          <button onclick="editNote(${index})">Edit</button>
          <button onclick="deleteNote(${index})">Delete</button>
        </div>
      </div>
    `;
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const noteText = document.getElementById("noteText").value.trim();
  if (noteText === "") return alert("Note cannot be empty!");

  notes.push(noteText);
  document.getElementById("noteText").value = "";
  showNotes();
}

function editNote(index) {
  const newText = prompt("Edit your note:", notes[index]);
  if (newText !== null && newText.trim() !== "") {
    notes[index] = newText.trim();
    showNotes();
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  showNotes();
}

// Display notes on page load
showNotes();
