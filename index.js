const url="https://www.omdbapi.com/?apikey=6a12b6b2&plot=full&t=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const movieposter=document.querySelector(".movie-poster");

async function checkmovie(movie){
    const response=await fetch(url+movie);
    var data=await response.json();

    if(data.Title==undefined){
        document.querySelector(".error").style.display="block";
        document.querySelector(".movie").style.display="none"
    }
    else{
        
        console.log(data);
    
        document.querySelector(".title").innerHTML=data.Title;
        document.querySelector(".imdb").innerHTML=`${data.imdbRating}/10`;
        document.querySelector(".year").innerHTML=data.Year;
        document.querySelector(".movie-poster").src=data.Poster;
        document.querySelector(".plotmovie").innerHTML=data.Plot;


        document.querySelector(".error").style.display="none";
        document.querySelector(".movie").style.display="block"

    }
    
   
    
    

}






searchbtn.addEventListener("click",()=>{
    checkmovie(searchbox.value);
})