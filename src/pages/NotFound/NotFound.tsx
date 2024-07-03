import { Button, Stack, Title } from '@mantine/core';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Stack justify="center" align="center">
      <Title ta={'center'}>Página no encontrada</Title>
      <Title ta={'center'} order={3} fw={400} c={'gray.6'}>
        La página que buscas no existe
      </Title>
      <Button
        onClick={() => {
          navigate('/');
        }}
        color="indigo"
      >
        Volver al inicio
      </Button>
    </Stack>
  );
};

export default NotFound;
