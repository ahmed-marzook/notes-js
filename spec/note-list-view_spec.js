function testListView() {
  var note = new Note
  var list = new NoteList
  note.newNote("random note 1")
  list.storeNote(note.getNote())
  note.newNote("random note 2")
  list.storeNote(note.getNote())
  var noteViewer = new NoteListView(list.listNotes());
  if (noteViewer.noteList[0] === "random note 1" && noteViewer.noteList[1] === "random note 2"){
    console.log(".")
  } else {
    throw new Error("List not displaying")
  };
};
function testDisplayList() {
  var note = new Note
  var list = new NoteList
  note.newNote("random note 1")
  list.storeNote(note.getNote())
  note.newNote("random note 2")
  list.storeNote(note.getNote())
  if () {

  } else {

  }
}
testListView();
