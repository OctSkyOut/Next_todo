import { useState } from 'react';
import Link from 'next/link';

const App = () => {
  const [username, setUsernanme] = useState('');
  return (
    <div>
      <label>
        username
        <input
          type="text"
          onChange={(e) => {
            setUsernanme(e.target.value);
          }}
        />
      </label>
      <br />
      <Link href={`/users/${username}`}>
        <a>{username} Github 검색하기</a>
      </Link>
      <img src="/IMG_0509.jpg" alt="스레드" />
    </div>
  );
};

export default App;
