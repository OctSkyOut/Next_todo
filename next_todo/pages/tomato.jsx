import Link from 'next/link';

const tomato = () => {
  return (
    <div>
      <h2>Link to &apos;main&apos;</h2>
      <Link href="/">
        <a>Move to &apos;/&apos;</a>
      </Link>
    </div>
  );
};

export default tomato;
