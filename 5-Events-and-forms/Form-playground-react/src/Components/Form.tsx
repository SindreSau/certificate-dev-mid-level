type FormProps = {
    onSubmit: () => void;
    onChange: (fieldName: string, value: string) => void;
};

export const Form = ({ onSubmit, onChange }: FormProps) => {
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-2'>
            <label htmlFor='firstname'>First name</label>
            <input
                id='firstname'
                type='text'
                name='firstname'
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />

            <label htmlFor='lastname'>Last name</label>
            <input
                id='lastname'
                type='text'
                name='lastname'
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />

            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' onChange={(e) => onChange(e.target.name, e.target.value)} />

            <button type='submit'>Submit</button>
        </form>
    );
};
