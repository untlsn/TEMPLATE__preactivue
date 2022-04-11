import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Hello from index
      <Link to="/test">To test</Link>
    </div>
  );
};

export default Index;
