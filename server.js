const express = require('express') 
const database = require('./mysqlDatabase.js');
const app = express() 

app.use('/', function(req, res, next) {

  var origin = req.headers.origin;

//   use this if you want to limit the domain allowed
  var allowedOrigins = ['http://localhost:3000/', 'http://localhost:3306/'];
  if(allowedOrigins.indexOf(origin) === -1){
      next();
    return;
  }
​
   res.setHeader('Access-Control-Allow-Origin', origin || "");
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json())

const port = process.env.PORT || 3306

app.listen(port, () => {
  console.log('listening on port ${port}')
})

app.get('/', (req, res) => {
  // const movies = database.allMovies()
  // res.send({
  //   movies: movies
  // })

  database.allMovies((error, movies)=>{

    if(error) {
      res.send({error})
      return
    }
    res.send({movies})
  })
}) 

app.post('/', (req, res) => {
  // const movie = database.createMovie(req.body)
  // res.send(movie) 
  const movie = req.body

  database.createMovie(movie, (error, movieId)=>{

    if (error){
      res.send({error})
      return
    }

    movie.id = movieId

    res.send({movie})
  })
})
app.use(express.json())
app.patch('/:id', (req, res) => {
  const id = req.params.id
  const movieData = req.body


  database.updateMovie(id, movieData, (error, result) => {
    if (error) {
      res.send({error})
      return
    }
    res.send({result})
  })

  // console.log(id, movieData)
  // res.send(movieData)
})

app.delete('/:id', (req, res) => {
  const movieId = parseInt(req.params.id)
  const result = database.deleteMovie(movieId)
  res.send(result) 
})
