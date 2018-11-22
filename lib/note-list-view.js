(function(exports) {
  function NoteListView(notes) {
    this.noteList = notes
    this.displayList = "<ul>"
  }

  NoteListView.prototype.displayListViewer = function () {
    console.log(this.noteList.notes)
    this.noteList.notes.forEach(function(note) {
      this.displayList += "<li>" + note + "</li>"
      console.log(note)
    })
    this.displayList += "</ul>"
    return this.displayList
  };
  exports.NoteListView = NoteListView;
})(this);
