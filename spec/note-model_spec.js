(function(exports) {
  function testCreateANote() {
    var note = new Note();
    note.newNote("this is a note");
    if (note.getNote(1) !== "this is a note") {
      throw new Error("note not created")
    } else {
      console.log(".")
    }
  };
  testCreateANote();
})(this);
