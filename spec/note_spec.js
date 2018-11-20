function testCreateANote() {
  var note = new Note();
  note.newNote("this is a note");
  if (note.getNote() !== "this is a note") {
    throw new Error("note not created")
  } else {
    console.log(".")
  }
};
testCreateANote();
