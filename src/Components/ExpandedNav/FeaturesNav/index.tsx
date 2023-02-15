import { ReactComponent as Todolist } from '../../../assets/images/icon-todo.svg';
import { ReactComponent as Calendar } from '../../../assets/images/icon-calendar.svg';
import { ReactComponent as Reminders } from '../../../assets/images/icon-reminders.svg';
import { ReactComponent as Planning } from '../../../assets/images/icon-planning.svg';
import styles from './FeatureNav.module.scss';
import { useRecoilValue } from 'recoil';
import { featureAtiva, featureAtivaMobile } from '../../../state/atom';
import classNames from 'classnames';

const FeatureNav = () => {
  const ativada = useRecoilValue(featureAtiva);
  const feature = useRecoilValue(featureAtivaMobile);

  return (
    <div className={classNames({
      [styles.container]: true,
      [styles.container__ativa]: ativada || feature
    })}>
      <div className={styles.container__item}>
        <Todolist />
        <span>Todo list</span>
      </div>
      <div className={styles.container__item}>
        <Calendar />
        <span>Calendar</span>
      </div>
      <div className={styles.container__item}>
        <Reminders />
        <span>Reminders</span>
      </div>
      <div className={styles.container__item}>
        <Planning />
        <span>Planning</span>
      </div>
    </div>
  );
};

export default FeatureNav;
