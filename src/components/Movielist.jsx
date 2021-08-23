import { Movie } from './Movie';

function Movielist(props) {
  const { movies = [] } = props;

  return (
    <div className='movie_list'>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Not found</h4>
      )}
    </div>
  );
}

export { Movielist };
