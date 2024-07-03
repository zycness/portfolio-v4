import { Container } from '@mantine/core';
import { Outlet } from 'react-router';
import { HeaderSimple } from '../HeaderSimple/HeaderSimple';

const Layout = () => {
  return (
    <>
      <HeaderSimple />
      <Container size={'xl'}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
