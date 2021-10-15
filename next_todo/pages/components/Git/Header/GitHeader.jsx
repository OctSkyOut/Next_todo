import { useState } from 'react';
import { useRouter } from 'next/router';
import { AiFillGithub } from 'react-icons/ai';
import styles from '../../../../styles/components/Git/Header/GitHeader.module.scss';

const GitHeader = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const usernameOnChange = (e) => {
    setUsername(e.target.value);
  };

  const usernameOnSubmit = (e) => {
    e.preventDefault();
    router.push(`/users/${username}`);
    setUsername('');
  };

  return (
    <div>
      <div className={styles.header_wrapper}>
        <AiFillGithub size={36} color="white" />
        <form className={styles.header_search_form} onSubmit={usernameOnSubmit}>
          <input type="text" value={username} onChange={usernameOnChange} />
        </form>
        <nav className={styles.header_nav}>
          <a href="http://github.com/pulls">Pull request</a>
          <a href="http://github.com/issues">Issues</a>
          <a href="http://github.com/marketplace">Marketplace</a>
          <a href="http://github.com/explore">Explore</a>
        </nav>
      </div>
    </div>
  );
};

export default GitHeader;
