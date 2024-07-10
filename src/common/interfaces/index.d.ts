import { DefaultMantineColor } from '@mantine/core';
import { Technologies } from '../../modules/Experience/constants';

interface IProject {
  title: string;
  link: string;
  video?: string;
  image: string;
  color: DefaultMantineColor;
  date: string;
  description: string;
  technologies: {
    name: Technologies;
    color: DefaultMantineColor;
  }[];
}
