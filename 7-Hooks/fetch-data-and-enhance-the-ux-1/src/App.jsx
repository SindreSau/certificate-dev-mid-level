import MovieItem from './components/MovieItem';
import Modal from './components/ui/Modal';
import MovieForm from './components/MovieForm';
import { useEffect, useRef, useState } from 'react';
import { getMovies } from './services/movies-service';

export default function App() {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [showMovieForm, setShowMovieForm] = useState(false);
    const [status, setStatus] = useState('');
    const modalRef = useRef();

    const validRatings = movies.filter((movie) => Number.isFinite(movie.rating)).map((movie) => movie.rating);
    const averageRating = validRatings.length
        ? (validRatings.reduce((acc, rating) => acc + rating, 0) / validRatings.length).toFixed(1)
        : 'N/A';
    const totalMovies = movies.length;

    const updateRating = (id, rating) => {
        setMovies((prevMovies) => prevMovies.map((movie) => (movie.id === id ? { ...movie, rating } : movie)));
    };

    const removeMovie = (id) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };

    const editMovie = (id) => {
        const movie = movies.find((movie) => movie.id === id);
        setCurrentMovie(movie);
        showForm();
    };

    const saveMovie = (data) => {
        const isExisting = movies.find((movie) => movie.id === data.id);
        if (isExisting) {
            updateMovie(data);
        } else {
            addMovie(data);
        }
    };

    const updateMovie = (data) => {
        setMovies((prevMovies) =>
            prevMovies.map((m) => {
                if (m.id === data.id) {
                    return { ...data, rating: m.rating };
                }
                return m;
            }),
        );
        hideForm();
    };

    const addMovie = (data) => {
        setMovies((prevMovies) => [...prevMovies, data]);
        hideForm();
    };

    const hideForm = () => {
        setShowMovieForm(false);
        setCurrentMovie(null);
    };

    const showForm = () => {
        setShowMovieForm(true);
    };

    const removeRatings = () => {
        setMovies((prevMovies) => prevMovies.map((movie) => ({ ...movie, rating: null })));
    };

    useEffect(() => {
        console.log('running effect');

        async function fetchData() {
            try {
                setStatus('loading');
                const movies = await getMovies();
                console.log(movies);

                setMovies(movies);
            } catch (error) {
                console.error(error);
                setStatus('error');
            } finally {
                console.log('setting status back');

                setStatus('');
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (!showMovieForm) return;

        function closeOnEsc(e) {
            if (e.key != 'Escape') return;
            setShowMovieForm(false);
        }
        window.addEventListener('keydown', (e) => closeOnEsc(e));
        return window.removeEventListener('keypress', (e) => closeOnEsc(e));
    }, [showMovieForm]);

    useEffect(() => {
        if (!showMovieForm) return;
        function closeOnClickOutside(e) {
            const xy = {
                x: e.pageX,
                y: e.pageY,
            };
            if (
                xy.x < modalRef.current.offsetLeft ||
                xy.x > modalRef.current.offsetLeft + modalRef.current.clientWidth ||
                xy.y < modalRef.current.offsetTop ||
                xy.y > modalRef.current.offsetTop + modalRef.current.clientHeight
            ) {
                setShowMovieForm(false);
            }
        }
        let t = setTimeout(() => {
            window.addEventListener('mousedown', closeOnClickOutside);
        }, 150);
        return () => {
            window.removeEventListener('mousedown', closeOnClickOutside);
            clearTimeout(t);
        };
    }, [showMovieForm]);

    return (
        <div className='app'>
            <Modal
                ref={modalRef}
                isOpen={showMovieForm}
                title={currentMovie?.id ? 'Edit Movie' : 'Add Movie'}
                onClose={hideForm}>
                <MovieForm
                    movie={currentMovie}
                    onSave={(data) => {
                        saveMovie(data);
                    }}
                    onCancel={() => {
                        hideForm();
                    }}
                />
            </Modal>
            <div className='movie-actions-list-wrapper'>
                <div className='movie-actions-list-info'>
                    <span>
                        <strong>Total Movies:</strong> {totalMovies}
                    </span>
                    <span>|</span>
                    <span>
                        <strong>Average Rating:</strong> {averageRating}
                    </span>
                </div>
                <div className='movie-actions-list-actions'>
                    <button className='btn btn-secondary' onClick={removeRatings}>
                        Remove Ratings
                    </button>
                    <button className='btn btn-primary' onClick={showForm}>
                        Add Movie
                    </button>
                </div>
            </div>
            <div className='movie-list'>
                {status === 'loading' ? (
                    <div className='w-12 h-12 rounded-full bg-blue-200 animate-spin flex justify-center items-center relative'>
                        <div className='absolute bg-white size-5 left-0 top-0'></div>
                        <div className='w-10 h-10 rounded-full bg-white '></div>
                    </div>
                ) : (
                    movies.map((movie) => {
                        return (
                            <MovieItem
                                key={movie.id}
                                movie={movie}
                                onEdit={editMovie}
                                onRemove={removeMovie}
                                onUpdateRating={updateRating}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}
