const mysql = require('mysql')

// 2
if (process.env.JAWSDB_URL){
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

  const dbDetails = {
    connectionLimit : 10,
    host     : process.env.MYSQL_HOST || 'localhost',
    user     : process.env.MYSQL_USERNAME || 'netflix_list_user',
    password : process.env.MYSQL_PASSWORD || 'MyNewPass4!',
    database : process.env.MYSQL_DATABASE || 'netflix_list'
  }


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
    INSERT INTO movies(Title, Description)
    VALUES("${movie.Title}","${movie.Description}")
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
    SET Title = ?
    WHERE id = ?
    `
    let params = [data.Title, id]

    connection.query(query, params, (error, result) =>{
      console.log(error,result)
      callback(error,result)
    })
  }

  exports.updateMovie = updateMovie
