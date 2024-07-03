import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/projects', label: 'Proyectos' },
  { link: '/about-me', label: 'Sobre mí' },
  { link: '/experience', label: 'Experiencia' },
  { link: '/contact', label: 'Contacto' },
];

export function HeaderSimple() {
  const location = useLocation();
  console.log();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState<string | undefined>(links.find((x) => x.link === location.pathname)?.link);
  const navigate = useNavigate();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title order={1} c={'indigo'} ff={'mono'}>
          KF
        </Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
