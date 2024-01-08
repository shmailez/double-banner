import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import BannerUp from './components/Banner-up';
import BannerDown from './components/Banner-down';

function App() {

  const ref1 = useRef(false);
  // const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);

  // const isInViewport2 = useIsInViewport(ref2);

  return (
    <div className="App">
      
      <BannerUp refParam={ref1}/>
      <BannerDown inView={isInViewport1}/>
      
    </div>
  );
  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }
 
}

export default App;
