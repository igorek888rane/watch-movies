import { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { LayoutPropsTypes } from '@/components/Layout/types';
import Meta from '@/components/Layout/Meta';

const Layout: FC<PropsWithChildren<LayoutPropsTypes>> = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <>
      <Meta
        title={title}
        keywords={keywords ? keywords : ''}
        description={description ? description : ''}
      >
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </Meta>
    </>
  );
};

export default Layout;
