db = db.getSiblingDB('movie');

db.createUser({
  user: 'usuario',
  pwd: 'usuario', 
  roles: [
    { role: 'dbAdmin', db: 'movie' },
    { role: 'readWrite', db: 'movie' }
  ],
});

