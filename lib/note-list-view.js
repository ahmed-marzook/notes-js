(function(exports) {
  function NoteListView(notes) {
    this.noteList = notes
    this.displayList = "<ul>"
  }

  NoteListView.prototype.displayListViewer = function () {
    for (var i = 0; i < this.noteList.notes.length; i++){
      var tempList = "<li>" + this.noteList.notes[i] + "</li>" ;
      this.displayList += tempList
    }
    this.displayList += "</ul>"
    return this.displayList
  };
  exports.NoteListView = NoteListView;
})(this);
