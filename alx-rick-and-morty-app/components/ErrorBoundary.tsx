import React, { ReactNode } from 'react';
import * as Sentry from '@sentry/react';

interface State {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log('ErrorBoundary caught an error:', error.message);
        console.log('Error info:', errorInfo);
        
        // Send to Sentry
        Sentry.captureException(error, {
            extra: errorInfo as Record<string, any>
        });
        
        console.log('Error sent to Sentry');
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button onClick={() => this.setState({ hasError: false })}>
                        Try again?
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;