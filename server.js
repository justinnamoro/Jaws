const express = require('express') 
const database = require('./mysqlDatabase.js');
const app = express() 

app.use(express.json())

const port = process.env.PORT || 3306

app.listen(port, () => {
  console.log('listening on port ${port}')
})

app.get('l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/', (req, res) => {
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

app.post('l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/', (req, res) => {
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
app.patch('l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/:id', (req, res) => {
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

app.delete('l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/:id', (req, res) => {
  const movieId = parseInt(req.params.id)
  const result = database.deleteMovie(movieId)
  res.send(result) 
})
