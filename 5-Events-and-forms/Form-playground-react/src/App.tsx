import { useState } from 'react';
import { Form } from './Components/Form';

type TestFormData = {
    firstname: string;
    lastname: string;
    email: string;
};

function App() {
    const [formData, setFormData] = useState<TestFormData>({ firstname: '', lastname: '', email: '' });

    function handleSubmit() {
        console.log('submitting: ');
        console.log(formData);
    }

    function handleChange(fieldName: string, value: string) {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: value,
        }));
    }

    return (
        <div>
            <h1 className='text-2xl'>Check out my form</h1>

            <Form onSubmit={handleSubmit} onChange={handleChange} />
        </div>
    );
}

export default App;
