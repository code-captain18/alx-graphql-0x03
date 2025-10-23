import { useState } from 'react';

const ErrorTrigger: React.FC = () => {
    const [shouldThrow, setShouldThrow] = useState(false);

    if (shouldThrow) {
        throw new Error('This is a client-side test error!');
    }

    return (
        <div>
            <h1>Error Testing Component</h1>
            <p>Click the button below to trigger an error and test the ErrorBoundary with Sentry integration:</p>
            <button 
                onClick={() => setShouldThrow(true)}
                style={{
                    background: '#ff4444',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Trigger Error
            </button>
        </div>
    );
};

export default ErrorTrigger;