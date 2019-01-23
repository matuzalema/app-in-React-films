

var movies = [
  {
    id: 1,
    title: 'Patch Adams',
    desc: 'film o prawdziwym powołaniu',
    src: '../images/patch.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: '../images/krol.jpg'
  },
  {
    id: 3,
    title: 'Buntownik z wyboru',
    desc: 'Film psychologiczny',
    src: '../images/buntownik.jpg'
  },
  {
    id: 4,
    title: 'Przebudzenia',
    desc: 'Film o walce z chorobami',
    src: '../images/przebudzenia.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.src})
    );
});

var element = 
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));