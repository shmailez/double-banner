import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import BannerDown from './components/Banner-down';

function App() {

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  console.log('isInViewport1: ', isInViewport1);

  const isInViewport2 = useIsInViewport(ref2);
  console.log('isInViewport2: ', isInViewport2);

  console.log('appref1', ref1)

  return (
    <div className="App">
      
      <Banner refParam={ref1}/>
      <BannerDown refParam={ref2} inView={isInViewport1}/>
      
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
