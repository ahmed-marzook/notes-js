(function(exports) {
  function Note() {
    this.notes = []
  };
  Note.prototype.newNote = function(content) {
    this.notes.push(content);
  };
  Note.prototype.getNote = function(number) {
    console.log(this.notes[number-1]);
    return this.notes[number-1];
  }
  exports.Note = Note;
})(this);
