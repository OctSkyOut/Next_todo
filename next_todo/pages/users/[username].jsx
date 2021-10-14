import axios from 'axios';
import GitProfile from '../components/GitProfile';

const getUserComponant = ({ user }) => {
  if (!user) {
    return (
      <div>
        <p>유저 정보가 없습니다.</p>
      </div>
    );
  }
  return (
    <>
      <GitProfile user={user} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { username } = query;
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    if (res.status === 200) {
      console.log(res);
      const user = res.data;
      return { props: { user } };
    }
    return { props: 'none' };
  } catch (error) {
    return { props: {} };
  }
};

export default getUserComponant;
