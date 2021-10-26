const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));
app.use(express.static('public'));

let topMovies = [
  {
    title: 'Another Earth',
    genre: ['Science Fiction', 'Mystery', 'Drama'],
    director: { name: 'Mike Cahill' },
  },
  {
    title: 'Ex Machina',
    genre: ['Psychological Thriller', 'Drama', 'Science Fiction'],
    director: { name: 'Alex Garland' },
  },
  {
    title: 'Snowpiercer',
    genre: ['Fantasy', 'Science Fiction', 'Action'],
    director: { name: 'Bong Joon-ho' },
  },
  {
    title: 'Silence Of The Lambs',
    genre: ['Psychological Horror', 'Neo Noir', 'Thriller'],
    director: { name: 'Jonathan Demme' },
  },
  {
    title: 'The Handmaiden',
    genre: ['Thriller', 'Drama', 'Crime'],
    director: { name: 'Park Chan-Wook' },
  },
  {
    title: 'Split',
    genre: ['Horror', 'Psychological Thriller', 'Mystery'],
    director: { name: 'M. Night Shyamalan' },
  },
  {
    title: 'Shutter Island',
    genre: ['Psychological Thriller', 'Horror', 'Drama'],
    director: { name: 'Martin Scorsese' },
  },
];

let newUsers = [''];

app.get('/', (req, res) => {
  res.send('Welcome to myFlix app!');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/movies/:title', (req, res) => {
  res.send(
    'Successful GET request returning data about a single movies by title to the user.'
  );
});

app.get('/movies/:title/genre', (req, res) => {
  res.send('Successful GET request returning data about a genre.');
});

app.get('/movies/director/:name', (req, res) => {
  res.send('Successful GET request returning data about a director.');
});

app.post('/newUser', (req, res) => {
  res.send('Successful POST request user was able to register.');
});

app.post('/newUser/:id/favorites', (req, res) => {
  res.send('Successful POST request movie has been added to favorites.');
});

app.put('/newUser/:id/info', (req, res) => {
  res.send('Successful PUT request user info updated.');
});

app.delete('/newUser/:id/favorites', (req, res) => {
  res.send(
    'Successful DELETE request movie has been deleted from user list of favorites.'
  );
});

app.delete('/newUser', (req, res) => {
  res.send('Successful DELETE request existing user has been deregistered.');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});