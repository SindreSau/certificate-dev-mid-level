import { ALL_MOVIES } from './data/movies';
import MovieItem from './components/MovieItem';
import Modal from './components/ui/Modal';
import MovieForm from './components/MovieForm';
import { useState } from 'react';

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movies, setMovies] = useState(ALL_MOVIES.items);

    function handleSave(data) {
        const isExisting = movies.find((movie) => data.id === movie.id);
        console.log(isExisting);

        if (!isExisting) {
            addToMovies(data);
        } else {
            updateMovies(data);
        }
        setModalOpen(false);
    }

    function addToMovies(data) {
        data.id = movies.length + 1;
        console.log(data);

        setMovies([...movies, data]);
    }

    function updateMovies(data) {
        setMovies(
            movies.map((movie) => {
                if (movie.id === data.id) {
                    return data;
                } else {
                    return movie;
                }
            }),
        );
    }

    function handleRemoveMovie(id) {
        setMovies((movies) => movies.filter((movie) => movie.id != id));
    }

    function handleRemoveRatings() {
        setMovies(
            movies.map((movie) => {
                return { ...movie, rating: 0 };
            }),
        );
    }

    function handleRatingChange(id, newRating) {
        setMovies(
            movies.map((movie) => {
                if (movie.id === id) {
                    return { ...movie, rating: newRating };
                } else {
                    return movie;
                }
            }),
        );
    }

    return (
        <div className='app'>
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={currentMovie?.id ? 'Edit Movie' : 'Add Movie'}>
                <MovieForm
                    movie={currentMovie}
                    onSave={(data) => handleSave(data)}
                    onCancel={() => {
                        setModalOpen(false);
                    }}
                />
            </Modal>

            <div className='movie-actions-list-wrapper'>
                <div className='movie-actions-list-info'></div>
                <div className='movie-actions-list-actions'>
                    <button className='btn btn-secondary' onClick={handleRemoveRatings}>
                        Remove ratings
                    </button>
                    <button className='btn btn-primary' onClick={() => setModalOpen(true)}>
                        Add Movie
                    </button>
                </div>
            </div>

            <div className='movie-list'>
                {movies.map((movie) => {
                    return (
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                            onEdit={(id) => {
                                const curr = movies.find((movie) => movie.id == id);
                                setCurrentMovie(curr);
                                setModalOpen(true);
                            }}
                            onDelete={(id) => handleRemoveMovie(id)}
                            onRatingChange={(id, newRating) => handleRatingChange(id, newRating)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
