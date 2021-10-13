import axios from 'axios';

const getUserComponant = ({ user }) => {
  const username = user && user.name;
  return <div>{username}</div>;
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
