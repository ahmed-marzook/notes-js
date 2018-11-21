// function changeGreeting() {
//   document.getElementById('app').innerHTML = "Howdy";
// }

(function(exports) {
  function NoteController(list) {
    this.note = new Note
    this.noteList = list
    this.note.newNote("Favourite drink: seltzer")
    this.noteList.storeNote(note.getNote())
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.passHTML = function () {
    document.getElementById('app').innerHTML = this.noteListView
  };
  exports.NoteController = NoteController;
})(this);
