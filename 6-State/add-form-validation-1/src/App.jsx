import { ALL_MOVIES } from './data/movies';
import MovieItem from './components/MovieItem';
import Modal from './components/ui/Modal';
import MovieForm from './components/MovieForm';
import { useState } from 'react';

export default function App() {
    const [movies, setMovies] = useState(ALL_MOVIES.items);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [showMovieForm, setShowMovieForm] = useState(false);
    const [totalCount, setTotalCount] = useState(0);

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

    const saveMovie = async (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.id % 2 != 0) {
                    const isExisting = movies.find((movie) => movie.id === data.id);
                    if (isExisting) {
                        updateMovie(data);
                    } else {
                        addMovie(data);
                    }
                    resolve('success');
                } else {
                    reject('500 - Server error');
                }
            }, 1500);
        });
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

    return (
        <div className='app'>
            <Modal isOpen={showMovieForm} title={currentMovie?.id ? 'Edit Movie' : 'Add Movie'} onClose={hideForm}>
                <MovieForm
                    movie={currentMovie}
                    onSave={(data) => {
                        return saveMovie(data);
                    }}
                    onCancel={() => {
                        hideForm();
                    }}
                />
            </Modal>
            <div className='movie-actions-list-wrapper'>
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
                {movies.map((movie) => {
                    return (
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                            onEdit={editMovie}
                            onRemove={removeMovie}
                            onUpdateRating={updateRating}
                        />
                    );
                })}
            </div>

            <div>
                <span>Total count is: {totalCount}</span>
                <CounterButton setTotalCount={setTotalCount} />
                <CounterButton setTotalCount={setTotalCount} />
            </div>

            <Accordion>
                <p>Child 1 is very informative. Nisi dolor nisi sint ex ullamco veniam ad est consequat in ullamco.</p>
                <p>Child 2 is shorter</p>
                <p>
                    Child 3 is long. Ipsum id nostrud tempor veniam aute incididunt consequat nulla. Commodo excepteur
                    laborum ex commodo adipisicing sunt non irure commodo exercitation ex sunt commodo ea do.
                </p>
            </Accordion>
        </div>
    );
}

function CounterButton({ setTotalCount }) {
    const [count, setCount] = useState(0);
    function handleUpdateCount() {
        setTotalCount((count) => count + 1);
        setCount((count) => count + 1);
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={handleUpdateCount}>
                +1
            </button>
            <span>Buttons count is: {count}</span>
        </div>
    );
}

function Accordion({ children }) {
    const [activeIndex, setActiveIndex] = useState(2);
    function handleOnShow(index) {
        setActiveIndex(index);
    }

    return (
        <div className='flex flex-col gap-2'>
            {children.length > 1 ? (
                children.map((panel, index) => (
                    <Panel
                        key={index}
                        isActive={index == activeIndex}
                        onShow={(index) => handleOnShow(index)}
                        index={index}>
                        {panel}
                    </Panel>
                ))
            ) : (
                <Panel>{children}</Panel>
            )}
        </div>
    );
}

function Panel({ isActive, onShow, children, index }) {
    function handleClick() {
        onShow(index);
    }

    return (
        <section
            className={`border rounded border-gray-500 px-4 hover:bg-blue-50 py-1 overflow-hidden w-94  ${
                isActive ? 'max-h-96 transition-[max-height] duration-500 ease-in-out' : 'max-h-8.5'
            }`}>
            {!isActive && (
                <button className='w-full text-gray-500 rounded py-0.5 px-4' onClick={handleClick}>
                    ▼
                </button>
            )}
            {<div>{children}</div>}
        </section>
    );
}
