import RatingStar from './RatingStar';
import NowPlayingPill from './InTheatresPill';
import GenrePill from './GenrePill';
import RatingButtons from './RatingButtons';

export default function MovieItem({ movie }) {
    return (
        <div className='movie-item group' key={movie.id}>
            <div className='movie-item-image-wrapper'>
                <RatingStar rating={movie.rating} />

                <NowPlayingPill inTheaters={movie.inTheaters} />

                {movie?.image ? (
                    <img src={movie.image} className='movie-item-image' alt={movie.name} />
                ) : (
                    <div className='movie-item-no-image'>
                        <span className='movie-item-no-image-text'>No image</span>
                    </div>
                )}
            </div>
            <div className='movie-item-content-wrapper'>
                <div className='movie-item-title-wrapper'>
                    <h3 className='movie-item-title'>{movie.name}</h3>
                    <div className='movie-item-genres-wrapper'>
                        {movie.genres?.map((genre) => (
                            <GenrePill genre={genre} key={`${movie.id}-${genre}`} />
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
                            <RatingButtons movieName={movie.name} star={star} rating={movie.rating} key={star} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
