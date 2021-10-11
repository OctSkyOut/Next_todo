import Link from 'next/link';
import { useRouter } from 'next/router';

const name = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <h2>Hello! {query.name}</h2>
      <Link href="/">Move to &apos;/&apos;</Link>
    </div>
  );
};

export default name;
