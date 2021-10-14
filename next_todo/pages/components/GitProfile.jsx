import { AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { VscOrganization } from 'react-icons/vsc';
import styles from '../../styles/components/GitProfile.module.scss';

const isAvaiableInformation = (info) => info || ' 정보가 없습니다.';

const GitProfile = ({ user }) => {
  return (
    <>
      <div className={styles.profile_wrapper}>
        <div className={styles.img_wrapper}>
          <img
            className={styles.profile_avatar}
            src={user.avatar_url}
            alt="profile-picture"
          />
        </div>
        <h2 className={styles.profile_user_name}>
          <span className={styles.profile_text}>
            {isAvaiableInformation(user.name)}
          </span>
        </h2>
        <p className={styles.profile_user_login}>
          <span className={styles.profile_text}>
            {isAvaiableInformation(user.login)}
          </span>
        </p>
        <p className={styles.profile_user_bio}>
          <span className={styles.profile_text}>
            {isAvaiableInformation(user.bio)}
          </span>
        </p>
        <p className={styles.profile_user_company}>
          <VscOrganization size={16} color="#686868" />
          <span className={styles.profile_text}>
            {isAvaiableInformation(user.company)}
          </span>
        </p>
        <p className={styles.profile_user_location}>
          <HiLocationMarker size={16} color="#686868" />
          <span className={styles.profile_text}>
            {isAvaiableInformation(user.location)}
          </span>
        </p>
        <p className={styles.profile_user_email}>
          <AiOutlineMail size={16} color="#686868" />
          <span className={styles.profile_text}>
            {isAvaiableInformation(user.email)}
          </span>
        </p>
        <p className={styles.profile_user_blog}>
          <AiOutlineLink size={16} color="#686868" />
          <span className={styles.profile_text}>
            {isAvaiableInformation(user.blog)}
          </span>
        </p>
      </div>
    </>
  );
};

export default GitProfile;
