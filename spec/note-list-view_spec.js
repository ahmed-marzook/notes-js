function testListView() {
  var note = new Note
  var list = new NoteList
  note.newNote("random note 1")
  list.storeNote(note.getNote())
  note.newNote("random note 2")
  list.storeNote(note.getNote())
  var noteViewer = new NoteListView(list.listNotes());
  console.log(noteViewer.noteList)
};
testListView();
