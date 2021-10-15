import { formatDistance } from 'date-fns';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../../../styles/components/Git/Repository/GitRepositorys.module.scss';

const GitRepository = ({ user, repositorys }) => {
  const router = useRouter();
  const { page = '1' } = router.query;

  if (!user || !repositorys) {
    return null;
  }

  return (
    <div className={styles.repos_wrapper}>
      <div className={styles.repos_header}>
        Repositorys{' '}
        <span className={styles.repos_count}>{user.public_repos}</span>
      </div>
      {user &&
        repositorys &&
        repositorys.map((repo) => {
          return (
            <div key={repo.id} className={styles.repo_wrapper}>
              <a
                className={styles.repo_link}
                target="_blank"
                rel="noreferrer"
                href={`${repo.html_url}`}
              >
                <h2>{repo.name}</h2>
              </a>
              <p className={styles.repo_description}>{repo.description}</p>
              <p className={styles.repo_language}>
                {repo.language}
                <span className={styles.repo_update_at}>
                  {formatDistance(new Date(repo.updated_at), new Date(), {
                    addSuffix: true,
                  })}
                </span>
              </p>
            </div>
          );
        })}
      <div className={styles.repo_page}>
        <Link href={`/users/${user.login}?page=${Number(page) - 1}`}>
          <a>
            <button
              className={styles.repo_previous}
              type="button"
              disabled={page && page === '1'}
            >
              Previous
            </button>
          </a>
        </Link>
        <Link
          href={`/users/${user.login}?page=${!page ? '2' : Number(page) + 1}`}
        >
          <a>
            <button
              className={styles.repo_next}
              type="button"
              disabled={repositorys.length < 10}
            >
              Next
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default GitRepository;
