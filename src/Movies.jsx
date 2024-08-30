import MoviePamplet from "./moviePamplet";


function Movies(){

    return(
        <div className="anime" id="movies">
            <MoviePamplet name="Your Name" id="YN"/>
            <MoviePamplet name="A Silent Voice" id="SV"/>
        </div>
    );

}


export default Movies