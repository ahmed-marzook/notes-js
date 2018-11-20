(function(exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.storeNote = function(note) {
    this.notes.push(note)
  };
  NoteList.prototype.listNotes = function() {
    return this.notes;
  };
  exports.NoteList = NoteList;
})(this);
