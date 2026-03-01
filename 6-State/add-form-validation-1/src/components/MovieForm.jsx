import { useState } from 'react';

const allGenres = ['Drama', 'Crime', 'Action', 'Comedy', 'Thriller', 'Horror', 'Sci-Fi', 'Fantasy', 'Romance'];

export default function MovieForm({ movie, onSave, onCancel }) {
    const [values, setValues] = useState({
        name: movie?.name || '',
        genres: movie?.genres || [],
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(''); // loading

    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    function handleGenreChange(e) {
        console.log(e.target.name);

        const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);

        setValues({ ...values, [e.target.name]: selectedOptions });
    }

    console.log(values.genres);

    function validateForm() {
        let errors = {};
        if (values.name.length === 0) {
            errors.name = 'Movie name is required';
        }

        console.log(values.genres);
        if (values.genres.length === 0) {
            errors.genre = 'You must select at least 1 genre';
        }

        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        const formData = new FormData(e.target);
        const data = {
            ...Object.fromEntries(formData),
            genres: formData.getAll('genres'),
            id: movie?.id || formData.get('id'),
        };

        setStatus('loading');
        try {
            await onSave(data);
            setStatus('');
        } catch (e) {
            console.error(e);
            setErrors({ global: 'Server error - please try again later' });
            setStatus('error');
        }
    };

    return (
        <div className='movie-form-container'>
            <form onSubmit={handleSubmit}>
                <input type='hidden' name='id' value={movie?.id || ''} />
                <div className='movie-form-input-wrapper'>
                    <label htmlFor='name' className='movie-form-label'>
                        Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        className='movie-form-input'
                        value={values.name}
                        onChange={handleChange}
                    />
                    <span className='movie-form-error'>{errors.name}</span>
                </div>
                <div className='movie-form-input-wrapper'>
                    <label htmlFor='description' className='movie-form-label'>
                        Description
                    </label>
                    <textarea
                        name='description'
                        className='movie-form-textarea'
                        defaultValue={movie?.description || ''}
                    />
                </div>
                <div className='movie-form-input-wrapper'>
                    <label htmlFor='image' className='movie-form-label'>
                        Image URL
                    </label>
                    <input
                        type='url'
                        name='image'
                        className='movie-form-input'
                        placeholder='https://example.com/image.jpg'
                        defaultValue={movie?.image || ''}
                    />
                </div>
                <div className='movie-form-input-wrapper'>
                    <label htmlFor='genres' className='movie-form-label'>
                        Genres
                    </label>
                    <select
                        name='genres'
                        className='movie-form-select'
                        multiple
                        value={values.genres}
                        onChange={handleGenreChange}>
                        {allGenres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                    <span className='movie-form-error'>{errors.genre}</span>
                </div>
                <div className='movie-form-input-wrapper'>
                    <label className='movie-form-checkbox-label'>
                        <input
                            type='checkbox'
                            name='inTheaters'
                            className='movie-form-checkbox'
                            defaultChecked={movie?.inTheaters || false}
                        />
                        <span>In Theaters</span>
                    </label>
                </div>
                <div className='movie-form-actions-wrapper'>
                    <button type='button' className='btn btn-secondary' onClick={onCancel}>
                        Cancel
                    </button>
                    <button type='submit' className='btn btn-primary'>
                        {status == 'loading' ? 'Loading' : movie?.id ? 'Save' : 'Create'}
                    </button>
                </div>
                <div className='mt-4 flex justify-end'>
                    <span className='movie-form-error'>{errors.global}</span>
                </div>
            </form>
        </div>
    );
}
