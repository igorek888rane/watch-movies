import { useEffect, useState } from 'react';

function getWindowWidth(): { width: number } {
  if (typeof window !== 'undefined') {
    const { innerWidth: width } = window;
    return {
      width,
    };
  } else {
    return {
      width: 0,
    };
  }
}

export default function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState<{ width: number }>(
    getWindowWidth()
  );

  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout>;
    timeoutId = null;
    function handleResize() {
      clearTimeout(timeoutId!);
      timeoutId = setTimeout(() => setWindowWidth(getWindowWidth()), 150);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth.width;
}
