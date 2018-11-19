(function(exports) {
  function Note() {
    this.note = ""
  };
  Note.prototype.newNote = function(content) {
    this.note = content
  };
  Note.prototype.getNote = function() {
    console.log(this.note);
    return this.note;
  }
  exports.Note = Note;
})(this);
