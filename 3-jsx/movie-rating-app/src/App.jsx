import { ALL_MOVIES } from './data/movies';

/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/react/24/solid";

export default function App() {
    const movies = ALL_MOVIES.items;

    return (
        <div className='app'>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    name={movie.name}
                    description={movie.description}
                    image={movie.image}
                    rating={movie.rating}
                    genres={movie.genres}
                    inTheatres={movie.inTheaters}
                />
            ))}
        </div>
    );
}

function MovieCard({ id, name, description, image, rating, genres }) {
    function getStars(rating) {
        let stars = '';
        for (let i = rating; i > 0; i--) {
            stars += '⭐️';
        }
        return stars;
    }

    return (
        <div id={id} className='flex flex-col max-w-md border-gray-200 border rounded-2xl overflow-hidden'>
            <img src={image} alt={'image_' + name} className='max-h-96 object-top object-cover' />
            <div className='mt-2 px-6 py-2 min-h-52 flex flex-col justify-between'>
                <div>
                    <h2 className='movie-item-title'>{name}</h2>
                    <div className='movie-item-description-wrapper'>
                        <p className='movie-item-description'>{description}</p>
                    </div>
                    <div>
                        <ul className='movie-item-genres-wrapper'>
                            {genres.map((genre) => (
                                <li key={'genre_key_' + genre} id={genre} className='movie-item-genre-tag'>
                                    {genre}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    Rating: {rating}/5
                    <div className='-translate-y-0.5'>{getStars(rating)}</div>
                </div>
            </div>
        </div>
    );
}
