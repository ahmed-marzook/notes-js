(function(exports) {
  function NoteListView(notes) {
    this.noteList = notes
    this.displayList = "<ul>"
  }

  NoteListView.prototype.displayListViwer = function () {
    console.log(this.noteList.notes)
    this.noteList.notes.forEach(function(note) {
      return this.displayList + "<li>" + note + "</li>"
      console.log(note)
    })
    this.displayList + "</ul>"
    return this.displayList
  };
  exports.NoteListView = NoteListView;
})(this);
