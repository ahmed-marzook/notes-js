(function(exports) {

  function testHelloWorld() {
    var helloWorld = new NoteModel();

    if (helloWorld.hello !== "Hello World!") {
      throw new Error("Not Hello world");
    } else {
      console.log(".");
    }
  };

  testHelloWorld();
})(this);
