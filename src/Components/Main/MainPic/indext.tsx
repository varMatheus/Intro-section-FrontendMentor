import { useEffect, useState } from 'react';
import styles from './MainPic.module.scss';

export const MainPic = () => {
  const [width, setWidth]   = useState(window.innerWidth);

  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div>
      <img className={styles.imagem}
        src={width <= 375 ? '/image-hero-mobile.png':'/image-hero-desktop.png'}
        alt="Man using laptop."
      />
    </div>
  );
}