const mysql = require('mysql')

// 2
const dbDetails = {
  connectionLimit : 10,
  host     : process.env.MYSQL_HOST || 'l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : process.env.MYSQL_USERNAME || 'axw59h8flgu9l9d6',
  password : process.env.MYSQL_PASSWORD || 'tahf8ed0rovkgzai',
  database : process.env.MYSQL_DATABASE || 'c4loytn3n80o4y6a'
}

  const connection = mysql.createConnection(dbDetails)

  
  
  // 3
  function allMovies(callback) {
    const query = `
      SELECT *
      FROM movies
    `
    connection.query(query, null, (error, results, fields)=>{

      callback(error, results)

    })
  
  }
  exports.allMovies = allMovies
  
  function createMovie(movie, callback) {

    const query = `
    INSERT INTO movies(title, description, img, status)
    VALUES("${movie.title}","${movie.description}", ${movie.img}, ${movie.status})
    `
    console.log(query)

    connection.query(query, null, function(error, result, fields){

      callback(error, result.insertId)
    })
  }
  exports.createMovie = createMovie
  
  function deleteMovie(movieId) {
  
  }
  exports.deleteMovie = deleteMovie
  
  function completeMovie(movieId, data) {
  
  }
  exports.completeMovie = completeMovie

  function updateMovie(id, data, callback) {
    let query  = `
    UPDATE movies
    SET title = ?
    WHERE id = ?
    `
    let params = [data.title, id]

    connection.query(query, params, (error, result) =>{
      console.log(error,result)
      callback(error,result)
    })
  }

  exports.updateMovie = updateMovie
