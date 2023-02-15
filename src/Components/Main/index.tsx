import { MainContent } from "./MainContent";
import { MainPic } from "./MainPic/indext";
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <section className={styles.container}>
      <MainContent/>
      <MainPic />
    </section>
  );
}