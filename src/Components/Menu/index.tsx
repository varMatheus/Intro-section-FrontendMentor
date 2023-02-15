import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as ArrowDown } from '../../assets/images/icon-arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../assets/images/icon-arrow-up.svg';
import { ReactComponent as IconMenu } from '../../assets/images/icon-menu.svg';
import { ReactComponent as IconCloseMenu } from '../../assets/images/icon-close-menu.svg';
import styles from './Menu.module.scss';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { companyAtiva, featureAtiva, menuLateralAtiva } from '../../state/atom';
import FeatureNav from '../ExpandedNav/FeaturesNav';
import CompanyNav from '../ExpandedNav/CompanyNav';
import { MenuLateral } from './MenuLateral';
import { useState, useEffect } from 'react';

const Menu = () => {
  const setFeature = useSetRecoilState(featureAtiva);
  const feature = useRecoilValue(featureAtiva);

  const setCompany = useSetRecoilState(companyAtiva);
  const company = useRecoilValue(companyAtiva);

  const setManuLateral = useSetRecoilState(menuLateralAtiva);
  const menuLateral = useRecoilValue(menuLateralAtiva);
  const [width, setWidth]   = useState(window.innerWidth);

  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <div className={styles.menu__container}>
        <div className={styles.menu__container__divL}>
          <Logo />
          <nav className={styles.menu__container__nav}>
            <div className={styles.menu__container__item}
              onClick={() => setFeature(!feature)} >
              <p>Features</p>
              {feature ? <ArrowDown /> : <ArrowUp />}
            </div>
            <div className={styles.menu__container__item}
              onClick={() => setCompany(!company)} >
              <p>Company</p>
              {company ? <ArrowDown /> : <ArrowUp />}
            </div>
            <div className={styles.menu__container__item}>
              <p>Carrers</p>
            </div>
            <div className={styles.menu__container__item}>
              <p>About</p>
            </div>
          </nav>
        </div>
        <div className={styles.menu__container__divR}>
          <button className={styles.menu__container__user}>Login</button>
          <button className={styles.menu__container__user__R}>Register</button>
        </div>
        {width <= 375 ?
          <div onClick={() => setManuLateral(!menuLateral)}>
            {menuLateral ? <IconCloseMenu /> : <IconMenu />}
          </div>
        : ''}
      </div>
      {feature ? <FeatureNav /> : ''}
      {company ? <CompanyNav /> : ''}
      {menuLateral ? <MenuLateral /> : ''}
    </>
  )
};

export default Menu;