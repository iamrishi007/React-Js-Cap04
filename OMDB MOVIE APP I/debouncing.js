let box = document.getElementById('box')
let poster = document.getElementById('poster')
let mainDiv = document.getElementById("main")


function getFetch() {
     let movie = document.getElementById('movie').value

     if (movie === "") {
          alert("Enter Movie Name")

     }



     let apikey = "abd13736"

     const MovieUrl = `http://www.omdbapi.com/?apikey=${apikey}&t=${movie}`



     fetch(MovieUrl).then((res) =>
          res.json()).then((final) =>
               movieData(final)
          ).catch((error) =>
               console.log(error))



     movieData()

}



function movieData(movie) {



     poster.innerHTML = " "
     poster.innerHTML = `<img src="${movie.Poster}"  class="movieImg" alt="${movie.Title}">`
     box.innerHTML = ""
     box.innerHTML = `<h2 class="title">${movie.Title}</h2>
     <p class="year"><strong>Year :  </strong> ${movie.Year}</p>
     <p class="genre"><strong>Genre :  </strong> ${movie.Genre}</p>
     <p class="director"><strong>Director :  </strong> ${movie.Director}</p>
     <p class="actors"><strong>Actors :  </strong> ${movie.Actors}</p>
     <p class="rating"><strong>IMDb Rating :  </strong> ${movie.imdbRating}</p>
     <p class="rated"><strong> Rated :  </strong> ${movie.Rated}</p>
     <p class="boxoffice"><strong>Boxoffice :  </strong> ${movie.Boxoffice}</p>`


}

let call;
function debouncing(callfunction, delay) {

     if (call) {
          clearTimeout(call)
     }
     call = setTimeout(() => {
          callfunction()
     }, delay)
}

debouncing()



// Tritling APi =www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata