(function(exports) {
  function NoteListView(notes) {
    this.noteList = notes
    this.displayList = "<ul>"
  }

  NoteListView.prototype.displayList = function () {
    this.noteList.forEach(function(note) {
      this.displayList + "<li>" + note + "</li>"
    })
    this.displayList + "</ul>"
    return this.displayList
  };
  exports.NoteListView = NoteListView;
})(this);
