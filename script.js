

  var app = document.getElementById('app');

var customNodeCreator = function(character) {
  return document.createTextNode(character);
}

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  onCreateTextNode: customNodeCreator,
});

typewriter
      .typeString('My name <span style="color: red;">Ahmed El Shafei ,</span> Front-End React Developer')
      .pauseFor(2000) // الانتظار قبل حذف النص
      .deleteAll() // حذف النص بالكامل
      .typeString('I love building interactive web apps.')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Let\'s build something amazing together!')
      .pauseFor(2000)
      .deleteAll()
      .start();

  