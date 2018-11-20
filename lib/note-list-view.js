(function(exports) {
  function NoteListView(notes) {
    this.noteList = notes
    this.displayList = "<ul>"
  }

  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  NoteListView.prototype.displayList = function () {
    this.noteList.forEach(function(note) {
      this.displayList + "<li>" + note + "</li>"
    })
    this.displayList + "</ul>"
  };
  exports.NoteListView = NoteListView;
})(this);
