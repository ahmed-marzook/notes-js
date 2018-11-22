// function changeGreeting() {
//   document.getElementById('app').innerHTML = "Howdy";
// }

function noteController() {
  var note = new Note;
  var noteList = new NoteList;
  document.getElementById('submit').onclick  = function() {
    note.newNote(document.getElementById('note-input').value);
  }
  console.log(note.getNote())
  noteList.storeNote(note.getNote());
  var noteListView = new NoteListView(noteList);
  document.getElementById('app').innerHTML = noteListView.displayListViewer();
}
