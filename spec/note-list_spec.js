(function(exports) {
  function testStoreANote() {
    var note = new Note
    var list = new NoteList
    note.newNote("this is a note")
    list.storeNote(note.getNote())
    if (list.listNotes() !== ["this is a note"]) {
      throw new Error("note not added")
    } else {
      console.log(".")
    }
  }
  testStoreANote();
})(this);
