import styles from './CompanyNav.module.scss';
import { useRecoilValue } from 'recoil';
import { companyAtiva, companyAtivaMobile } from '../../../state/atom';
import classNames from 'classnames';

const CompanyNav = () => {
  const ativada = useRecoilValue(companyAtiva);
  const company = useRecoilValue(companyAtivaMobile);
  return (
    <div className={classNames({
      [styles.container]: true,
      [styles.container__ativa]: ativada || company,
    })}>
      <div className={styles.container__item}>
        <span>History</span>
      </div>
      <div className={styles.container__item}>
        <span>Our Team</span>
      </div>
      <div className={styles.container__item}>
        <span>Blog</span>
      </div>
    </div>
  );
};

export default CompanyNav;
