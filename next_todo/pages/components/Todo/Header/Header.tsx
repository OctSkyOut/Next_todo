import React from 'react';
import styles from '../../../../styles/components/Todo/Header/Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.todo_header_wrapper}>
      <h1>OCT SKY OUT의 TODO List</h1>
    </div>
  );
};

export default Header;
