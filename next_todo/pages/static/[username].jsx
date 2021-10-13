import axios from 'axios';

const getUsernameComponant = ({ user, time }) => {
  const username = user && user.name;

  return (
    <>
      <div>{username}</div>
      <div>{time}</div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${params.username}`
    );
    const time = new Date().toISOString();

    if (res.status === 200) {
      const user = res.data;
      return { props: { user, time }, revalidate: 3 };
    }

    return { props: { time } };
  } catch (error) {
    console.log(error);
    return { props: { time: new Date().toISOString() } };
  }
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { username: 'oct-sky-out' } }],
    fallback: true,
  };
}

export default getUsernameComponant;
