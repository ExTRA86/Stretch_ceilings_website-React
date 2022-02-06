import { useEffect, useRef, useState } from 'react';

export const useObserver = options => {
  const sticky = useRef(null);
  const [navbar, setNavbar] = useState('nav');

  const callbackFunction = entries => {
    const [entry] = entries;
    entry.isIntersecting ? setNavbar('nav') : setNavbar('stickytop');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (sticky.current) observer.observe(sticky.current);

    return () => {
      if (sticky.current) observer.unobserve(sticky.current);
    };
  }, [sticky, options]);

  return [sticky, navbar];
};
