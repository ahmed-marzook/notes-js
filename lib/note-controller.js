// function changeGreeting() {
//   document.getElementById('app').innerHTML = "Howdy";
// }

function noteController() {
  var note = new Note;
  var noteList = new NoteList;
  note.newNote("Favourite drink: seltzer");
  noteList.storeNote(note.getNote());
  var noteListView = new NoteListView(noteList)
  document.getElementById('app').innerHTML = noteListView.displayList();
}
