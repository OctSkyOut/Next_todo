import { useRouter } from 'next/router';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const router = useRouter();
  const routerPush = (aRouter, dynamicPageName = '') => {
    if (dynamicPageName !== '')
      return aRouter.push(`/vegetable/${dynamicPageName}`);
    return aRouter.push('/tomato');
  };
  return (
    <div>
      <button type="button" onClick={() => routerPush(router)}>
        tomato로 가기
      </button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={() => routerPush(router, name)}>
        {name}으로 가기
      </button>
    </div>
  );
};

export default App;
