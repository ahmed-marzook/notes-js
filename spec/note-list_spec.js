(function(exports) {
  function testStoreANote() {
    var note = new Note
    var list = new NoteList
    note.newNote("this is a note")
    list.storeNote(note.getNote())
    var testList = list.listNotes()
    if (testList[0] !== "this is a note") {
      throw new Error("note was not added")
    } else {
      console.log(".")
    }
  };
  testStoreANote();
})(this);
