const genres = ['Drama', 'Crime', 'Action', 'Comedy', 'Thriller', 'Horror', 'Sci-Fi', 'Fantasy', 'Romance'];

export default function MovieForm({ movie }) {
    return (
        <form className='movie-form-container'>
            <div className='movie-form-input-wrapper'>
                <label className='movie-form-label' htmlFor='movie-name-input'>
                    Title
                </label>
                <input className='movie-form-input' type='text' id='movie-name-input' value={movie?.name} />
            </div>

            <div className='movie-form-input-wrapper'>
                <label className='movie-form-label' htmlFor='movie-description-input'>
                    Description
                </label>
                <textarea
                    className='movie-form-textarea'
                    type='textarea'
                    id='movie-description-input'
                    value={movie?.description}
                />
            </div>

            <div className='movie-form-input-wrapper'>
                <label className='movie-form-label' htmlFor='movie-image-url-input'>
                    Image URL
                </label>
                <input className='movie-form-input' type='text' id='movie-image-url-input' value={movie?.image} />
            </div>

            <div className='movie-form-input-wrapper'>
                <label className='movie-form-label' htmlFor='movie-genre-dropdown'>
                    Image URL
                </label>
                <select
                    multiple
                    className='movie-form-select'
                    id='movie-genre-dropdown'
                    name='genre'
                    defaultValue={movie?.genres}>
                    {genres.map((genre) => (
                        <option key={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            <div className='flex flex-row gap-2'>
                <input className='movie-form-checkbox' type='checkbox' name='inTheaters' id='in-theaters-checkbox' />
                <label className='movie-form-checkbox-label' htmlFor='in-theaters-checkbox'>
                    In Theaters
                </label>
            </div>
        </form>
    );
}
