import axios from 'axios';

import GitProfile from '../components/Git/Profile/GitProfile';
import GitRepository from '../components/Git/Repository/GitRepository';
import styles from '../../styles/users/[username].module.scss';

const getUserComponant = ({ user, repositorys }) => {
  return (
    <div className={styles.git_contents_wrapper}>
      <GitProfile user={user} />
      <GitRepository user={user} repositorys={repositorys} />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { username, page } = query;
  try {
    // Git User와 Repository의 정보
    const gitInformations = {
      user: {},
      repositorys: {},
    };

    // Git User 정보 받아오기
    const res = await axios.get(`https://api.github.com/users/${username}`);
    if (res.status === 200) gitInformations.user = res.data;

    // User의 Repository들 받아오기
    const repoRes = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=update&page=${page}&per_page=10`
    );
    if (repoRes.status === 200) {
      gitInformations.repositorys = repoRes.data;
      return { props: { ...gitInformations } };
    }

    return { props: 'none' };
  } catch (error) {
    return { props: {} };
  }
};

export default getUserComponant;
