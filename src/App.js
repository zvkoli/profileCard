import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import ProfileCard from './pages/ProfileCard';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    },3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#1C1C1C]'>
      {loading ? <Loader /> : <ProfileCard />}
    </div>
  );
};

export default App;
