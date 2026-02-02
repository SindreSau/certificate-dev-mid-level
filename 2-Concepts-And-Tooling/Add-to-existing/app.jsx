import { createRoot } from 'react-dom/client';
import { Button } from './createElement';
import './index.css';
import { StrictMode } from 'react';

// Mount React only in the specified container
const container = document.getElementById('react-container');
const root = createRoot(container);
root.render(
    <StrictMode>
        <h2>Hello from React</h2>
        <Button>Cool</Button>
    </StrictMode>,
);
