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
    </div>
  );
};

export default App;
