import { ALL_MOVIES } from './data/movies';
import MovieItem from './components/MovieItem';
import Modal from './components/ui/Modal';
import MovieForm from './components/MovieForm';

export default function App() {
    const movies = ALL_MOVIES.items;
    const showMovieForm = true;
    const currentMovie = ALL_MOVIES.items[0]; // Edit this to ALL_MOVIES.items[0] to simulate editing a movie

    return (
        <div className='app'>
            <Modal isOpen={showMovieForm} title={currentMovie?.id ? 'Edit Movie' : 'Add Movie'}>
                <MovieForm movie={currentMovie} />
            </Modal>
            <div className='movie-list'>
                {movies.map((movie) => {
                    return <MovieItem key={movie.id} movie={movie} />;
                })}
            </div>
        </div>
    );
}
