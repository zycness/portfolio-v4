import { Badge, Group, Paper, SimpleGrid, Stack, Text, Timeline, Title } from '@mantine/core';
import { IconDeviceLaptop } from '@tabler/icons-react';
import { PROJECTS_DATA } from './constants';

const Experiencie = () => {
  return (
    <SimpleGrid
      cols={{
        lg: 2,
      }}
    >
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        {PROJECTS_DATA.reverse().map((x) => {
          return (
            <Timeline.Item key={x.title} bullet={<IconDeviceLaptop />} title={x.title}>
              <Text size="sm" c={'dimmed'}>
                {x.description}
              </Text>
              <Group my={5} gap={5}>
                {x.technologies.map((x) => {
                  return (
                    <Badge color={x.color} variant="light" key={x.name}>
                      {x.name}
                    </Badge>
                  );
                })}
              </Group>
              <Text mt={5} c={'white'} size="xs">
                {x.date}
              </Text>
            </Timeline.Item>
          );
        })}
      </Timeline>
      <Stack>
        <Title order={3} ta={'center'}>
          Mi experiencia
        </Title>
        <SimpleGrid
          cols={{
            sm: 2,
          }}
        >
          {PROJECTS_DATA.map(({ title, technologies }) => (
            <Paper withBorder key={title} p={5}>
              <Title order={4} ta={'center'}>
                {title}
              </Title>
              <Group justify="center" gap={5}>
                {technologies.map(({ color, name }) => {
                  return (
                    <Badge variant="light" key={name} color={color}>
                      {name}
                    </Badge>
                  );
                })}
              </Group>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </SimpleGrid>
  );
};

export default Experiencie;
