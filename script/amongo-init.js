db = db.getSiblingDB('movie');

// Crear usuario administrativo para la base de datos 'movie'
db.createUser({
  user: 'usuario',
  pwd: 'usuario', // Recuerda cambiar esto por una contraseña segura.
  roles: [
    { role: 'dbAdmin', db: 'movie' },
    { role: 'readWrite', db: 'movie' }
  ],
});

// Crear la colección 'movies' si aún no existe
db.createCollection("movies");

// // Insertar datos de prueba en la colección 'movies'
// db.movies.insertMany([
//   {
//     "name": "Inception",
//     "time": ["14:00", "18:00", "22:00"],
//     "rating": 8.8
//   },
//   {
//     "name": "The Matrix",
//     "time": ["16:00", "20:00"],
//     "rating": 8.7
//   },
//   {
//     "name": "Interstellar",
//     "time": ["12:00", "16:00", "20:00", "00:00"],
//     "rating": 8.6
//   },
//   {
//     "name": "Parasite",
//     "time": ["14:30", "18:30", "21:30"],
//     "rating": 8.6
//   },
//   {
//     "name": "The Shawshank Redemption",
//     "time": ["13:00", "17:00", "21:00"],
//     "rating": 9.3
//   }
// ]);
