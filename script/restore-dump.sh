  
  sleep 1


# Ahora realiza la restauración
mongorestore --uri="mongodb://usuario:usuario@localhost:27017/movie" db-dump/movie