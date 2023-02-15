import { ReactComponent as Databiz } from '../../../assets/images/client-databiz.svg';
import { ReactComponent as AudioPhile } from '../../../assets/images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../../assets/images/client-meet.svg';
import { ReactComponent as Maker } from '../../../assets/images/client-maker.svg';
import styles from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h1 className={styles.container__titulo}>Make </h1>
        <h1 className={styles.container__titulo}>remote work</h1>
      </div>
      <div className={styles.container__card}>
        <p className={styles.container__texts}>Get your in sync, no matter your location.</p>
        <p className={styles.container__texts}>Streamline processes, create team rituals, and watch productivity soar.</p>
      </div>
      <button className={styles.container__btn}>Learn more</button>
      <div className={styles.container__clients}>
        <Databiz className={styles.container__clients__item} />
        <AudioPhile className={styles.container__clients__item} />
        <Meet className={styles.container__clients__item} />
        <Maker className={styles.container__clients__item} />
      </div>
    </div>
  );
}