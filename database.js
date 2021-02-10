let movies = [
    {
        id: 1,
        Title: "Haikyu!!",
        Description: "Haikyu!! is a Japanese manga series written and illustrated by Haruichi Furudate. The story follows Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature.",
        Watch: "",
        Progress:"",
        Rate: 0,
    },
    {
        id: 2,
        Title: "Gossip Girl",
        Description: "Blair Waldorf is a popular student at her private school and envied by one and all. But, her perfect life is unsettled when her ex-best friend enrols in the same institution.",
        Watch: "",
        Progress:"",
        Rate: 0,
    },
    {
        id: 3,
        Title: "Big Mouth",
        Description: "Even for a cartoon character, going through puberty isn't easy for a young person. Andrew is learning that first hand as he experiences the nightmare that is growing up in this animated series geared toward adults. Along for the ride are friends Nick and Jessi, who develop a budding romance along the way. ",
        Watch: "",
        Progress:"",
        Rate: 0,
    },
    {
        id: 4,
        Title: "Cobra Kai",
        Description: "Thirty four years after events of the 1984 All Valley Karate Tournament, a down-and-out Johnny Lawrence seeks redemption by reopening the infamous Cobra Kai dojo, reigniting his rivalry with a now successful Daniel LaRusso.",
        Watch: "",
        Progress:"",
        Rate: 0,
    },
]

  function allMovies() {
    return movies
  }
  exports.allMovies = allMovies
  
  function createMovie(movie) {
    movie.id = movies.length + 1 
    movies.push(movie) 
    return movie
  }
  exports.createMovie = createMovie
  
  function deleteMovie(movieId) {
    const movieIndex = movies.findIndex(movie => movie.id === movieId)
    if (movieIndex !== -1) {
      movies.splice(movieIndex, 1)
    }
    return {id: movieId}
  }
  exports.deleteMovie = deleteMovie
  
  function updateMovie(movieId, data) {
    if (data.completed !== undefined) { 
      const movie = movies.find(movie => movie.id === movieId) 
      movie.completed = data.completed 
    }
    return {id: movieId, ...data}
  }
  exports.updateMovie = updateMovie