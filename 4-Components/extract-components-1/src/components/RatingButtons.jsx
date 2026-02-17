import { StarIcon } from '@heroicons/react/24/solid';

export default function RatingButtons({ movieName, star, rating }) {
    return (
        <button
            aria-label={`Rate ${movieName} with ${star} star${star > 1 ? 's' : ''}`}
            className={`movie-item-star-icon-button ${
                star <= (rating || 0) ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-300'
            }`}>
            <StarIcon className='movie-item-star-icon' />
        </button>
    );
}
