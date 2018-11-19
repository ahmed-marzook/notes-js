(function(exports) {
  function Note() {
    this.note = ""
  };
  Note.prototype.newNote = function(content) {
    this.note = content
  };
  Note.prototype.getNote = function() {
    return this.note;
  }
  exports.Note = Note;
})(this);
