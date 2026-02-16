import { StarIcon } from '@heroicons/react/24/solid';
import { ALL_MOVIES } from './data/movies';

export default function App() {
    const movies = ALL_MOVIES.items;

    movies[0].image = null;
    movies[1].rating = null;

    return (
        <div className='app'>
            <div className='movie-list'>
                {movies.map((movie) => {
                    return (
                        <div className='movie-item group' key={movie.id}>
                            <div className='movie-item-image-wrapper relative'>
                                {movie.inTheaters && (
                                    <div className='movie-item-theaters-banner'>
                                        <div className='movie-item-theaters-banner-text'>Now playing</div>
                                    </div>
                                )}

                                <div className='absolute top-3 right-3 z-10'>
                                    <div className='relative'>
                                        <StarIcon
                                            className={
                                                movie.rating ? 'text-amber-300 size-10' : 'text-gray-400 size-10'
                                            }
                                        />
                                        <div className='absolute top-0 flex justify-center items-center w-full h-full'>
                                            {movie.rating ? movie.rating : '-'}
                                        </div>
                                    </div>
                                </div>

                                {movie.image ? (
                                    <img src={movie.image} className='movie-item-image z-0' alt={movie.name} />
                                ) : (
                                    <div className='w-full h-full bg-gray-100 text-center flex items-center justify-center text-gray-400 text-lg'>
                                        No Image
                                    </div>
                                )}
                            </div>

                            <div className='movie-item-content-wrapper'>
                                <div className='movie-item-title-wrapper'>
                                    <h3 className='movie-item-title'>{movie.name}</h3>
                                    <div className='movie-item-genres-wrapper'>
                                        {movie.genres?.map((genre) => (
                                            <span key={`${movie.id}-${genre}`} className='movie-item-genre-tag'>
                                                {genre}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='movie-item-description-wrapper'>
                                    <p className='movie-item-description'>{movie.description}</p>
                                </div>
                                <div className='movie-item-rating-wrapper'>
                                    <span className='movie-item-rating-text'>Rating: {movie.rating || 0}/5</span>
                                    <div className='movie-item-star-icon-wrapper'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                aria-label={`Rate ${movie.name} with ${star} star${
                                                    star > 1 ? 's' : ''
                                                }`}
                                                key={star}
                                                className={`movie-item-star-icon-button ${
                                                    star <= (movie.rating || 0)
                                                        ? 'text-yellow-500'
                                                        : 'text-gray-400 hover:text-yellow-300'
                                                }`}>
                                                <StarIcon className='movie-item-star-icon' />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
