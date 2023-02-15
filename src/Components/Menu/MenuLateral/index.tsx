import { useSetRecoilState, useRecoilValue } from 'recoil';
import { companyAtivaMobile, featureAtivaMobile } from '../../../state/atom';
import styles from './MenuLateral.module.scss';
import { ReactComponent as ArrowDown } from '../../../assets/images/icon-arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../../assets/images/icon-arrow-up.svg';
import FeatureNav from '../../ExpandedNav/FeaturesNav';
import CompanyNav from '../../ExpandedNav/CompanyNav';

export const MenuLateral = () => {
  const setFeature = useSetRecoilState(featureAtivaMobile);
  const feature = useRecoilValue(featureAtivaMobile);

  const setCompany = useSetRecoilState(companyAtivaMobile);
  const company = useRecoilValue(companyAtivaMobile);

  return (
    <section className={styles.menu}>
      <div className={styles.menu__lateral}>
        <div className={styles.menu__lateral__item}
          onClick={() => setFeature(!feature)} >
          <p>Features</p>
          {feature ? <ArrowDown /> : <ArrowUp />}
        </div>
        {feature? <FeatureNav /> : ''}
        <div className={styles.menu__lateral__item}
          onClick={() => setCompany(!company)} >
          <p>Company</p>
          {company ? <ArrowDown /> : <ArrowUp />}
        </div>
        {company? <CompanyNav /> : ''}
        <div className={styles.menu__lateral__item}>
          <p>Carrers</p>
        </div>
        <div className={styles.menu__lateral__item}>
          <p>About</p>
        </div>
        <div className={styles.menu__lateral__divR}>
          <button className={styles.menu__lateral__user}>Login</button>
          <button className={styles.menu__lateral__user__R}>Register</button>
        </div>
      </div>
    </section>
  )
}
