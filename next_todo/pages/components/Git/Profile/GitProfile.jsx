import { AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { VscOrganization } from 'react-icons/vsc';
import EtcUserInformation from './EtcUserInformation';
import styles from '../../../../styles/components/GitProfile.module.scss';

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
        <h2 className={styles.profile_user_name}>{user.name}</h2>
        <>
          <EtcUserInformation
            cls={styles.profile_user_login}
            icon={null}
            info={user.login}
          />
        </>
        <>
          <EtcUserInformation
            cls={styles.profile_user_bio}
            icon={null}
            info={user.bio}
          />
        </>
        <>
          <EtcUserInformation
            cls={styles.profile_user_company}
            icon={VscOrganization}
            info={user.company}
          />
        </>
        <>
          <EtcUserInformation
            cls={styles.profile_user_location}
            icon={HiLocationMarker}
            info={user.location}
          />
        </>
        <>
          <EtcUserInformation
            cls={styles.profile_user_email}
            icon={AiOutlineMail}
            info={user.email}
          />
        </>
        <>
          <EtcUserInformation
            cls={styles.profile_user_blog}
            icon={AiOutlineLink}
            info={user.blog}
          />
        </>
      </div>
    </>
  );
};

export default GitProfile;
