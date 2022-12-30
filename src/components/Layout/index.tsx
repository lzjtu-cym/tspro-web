import React from 'react';
import styles from './index.less';

const Layout: React.FC<any> = (props) => {
  const { children } = props;
  return <div className={styles['layout']}>{children}</div>;
};

export default Layout;
