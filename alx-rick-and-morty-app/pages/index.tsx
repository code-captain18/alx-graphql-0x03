import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorTrigger from '@/components/ErrorTrigger';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorTrigger />
    </ErrorBoundary>
  );
};

export default Home;