import { useEffect, useRef, useState } from 'react';

export const useObserver = options => {
  const sticky = useRef(null);
  const [navbar, setNavbar] = useState('nav');

  useEffect(() => {
    const callbackFunction = entries => {
      const [entry] = entries;
      entry.isIntersecting ? setNavbar('nav') : setNavbar('stickytop');
    };

    let observerRefValue = null;

    const observer = new IntersectionObserver(callbackFunction, options);
    if (sticky.current) {
      observer.observe(sticky.current);
      observerRefValue = sticky.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [sticky, options]);

  return [sticky, navbar];
};
