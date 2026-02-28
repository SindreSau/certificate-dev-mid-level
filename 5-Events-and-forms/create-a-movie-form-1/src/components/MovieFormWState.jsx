import { useState } from 'react';

const allGenres = ['Drama', 'Crime', 'Action', 'Comedy', 'Thriller', 'Horror', 'Sci-Fi', 'Fantasy', 'Romance'];

export default function MovieFormWState({ movie, onCancel }) {
    const [title, setTitle] = useState(movie?.name);
    const [description, setDescription] = useState(movie?.description);
    const [imageUrl, setImageUrl] = useState(movie?.image);
    const [genres, setGenres] = useState(movie?.genres);
    const [inTheaters, setInTheaters] = useState(movie?.inTheaters);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.set('inTheaters', formData.get('inTheaters') ? true : false); // Checkboxes return "on" or nothing...
        let formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <form className='movie-form-container' onSubmit={handleSubmit}>
            <div className='movie-form-input-wrapper'>
                <label className='movie-form-label' htmlFor='movie-name-input'>
                    Title
                </label>
                <input
                    className='movie-form-input'
                    type='text'
                    id='movie-name-input'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className='movie-form-input-wrapper'>
                <label className='movie-form-label' htmlFor='movie-description-input'>
                    Description
                </label>
                <textarea
                    className='movie-form-textarea'
                    type='textarea'
                    id='movie-description-input'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className='movie-form-input-wrapper'>
                <label className='movie-form-label' htmlFor='movie-image-url-input'>
                    Image URL
                </label>
                <input
                    className='movie-form-input'
                    type='text'
                    id='movie-image-url-input'
                    name='imageUrl'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>

            <div className='movie-form-input-wrapper'>
                <label className='movie-form-label' htmlFor='movie-genre-dropdown'>
                    Genre
                </label>
                <select
                    multiple
                    className='movie-form-select'
                    id='movie-genre-dropdown'
                    name='genre'
                    defaultValue={genres}
                    onChange={(e) => setGenres(...e.target.selectedOptions)}>
                    {allGenres.map((genre) => (
                        <option key={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            <div className='flex flex-row gap-2'>
                <input
                    className='movie-form-checkbox'
                    type='checkbox'
                    name='inTheaters'
                    id='in-theaters-checkbox'
                    defaultChecked={inTheaters}
                    onChange={(e) => setInTheaters(e.target.checked)}
                />
                <label className='movie-form-checkbox-label' htmlFor='in-theaters-checkbox'>
                    In Theaters
                </label>
            </div>

            <div className='movie-form-actions-wrapper'>
                <button className='btn btn-secondary' type='button' onClick={onCancel}>
                    Cancel
                </button>
                <button className='btn btn-primary' type='submit'>
                    Create
                </button>
            </div>
        </form>
    );
}
