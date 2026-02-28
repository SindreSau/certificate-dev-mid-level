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
        if (movies.filter((movie) => data.id === movie.id).length < 1) {
            setMovies([...movies, data]);
        } else {
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
        setModalOpen(false);
    }

    function handleAddMovie() {
        setCurrentMovie({ id: movies.length + 1, rating: 0 });
        setModalOpen(true);
    }

    function handleRemoveMovie(id) {
        setMovies(movies.filter((movie) => movie.id != id));
    }

    function handleRemoveRatings() {
        setMovies(
            movies.map((movie) => {
                return { ...movie, rating: 0 };
            }),
        );
    }

    function handleRatingChange(id, newRating) {
        console.log('changing rating: ' + id + ' to ' + newRating);
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
                    <button className='btn btn-primary' onClick={handleAddMovie}>
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
