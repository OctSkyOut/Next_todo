import styles from '../../../../styles/components/Git/Profile/GitProfile.module.scss';

const isAvaiableInformation = (info) => info || '정보가 없습니다.';

const EachUserInformation = ({ information }) => {
  return (
    <span className={styles.profile_text}>
      {isAvaiableInformation(information)}
    </span>
  );
};

export default EachUserInformation;
