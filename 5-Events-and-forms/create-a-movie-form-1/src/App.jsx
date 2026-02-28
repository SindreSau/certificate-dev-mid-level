import { ALL_MOVIES } from './data/movies';
import MovieItem from './components/MovieItem';
import Modal from './components/ui/Modal';
import MovieForm from './components/MovieForm';

export default function App() {
    const movies = ALL_MOVIES.items;
    const showMovieForm = true;
    const currentMovie = ALL_MOVIES.items[0]; // Edit this to ALL_MOVIES.items[0] to simulate editing a movie

    function handleOnSave(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            ...Object.fromEntries(formData.entries()),
            genres: formData.getAll('genres'),
            inTheaters: formData.get('inTheaters') ? true : false,
        };
        console.log(JSON.stringify(data, null, 4));
    }

    function handleOnCancel(e) {
        e.preventDefault();
        console.log('Cancel');
    }

    return (
        <div className='app'>
            <Modal isOpen={showMovieForm} title={currentMovie?.id ? 'Edit Movie' : 'Add Movie'}>
                <MovieForm movie={currentMovie} onSave={handleOnSave} onCancel={handleOnCancel} />
            </Modal>
            <div className='movie-list'>
                {movies.map((movie) => {
                    return <MovieItem key={movie.id} movie={movie} />;
                })}
            </div>
        </div>
    );
}
